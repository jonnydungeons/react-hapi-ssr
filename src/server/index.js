'use strict'

import Hapi from 'hapi'
import HapiAutCookie from 'hapi-auth-cookie'
import Inert from 'inert'
import Path from 'path'
import { StaticRouter, matchPath } from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import React from 'react'
import serialize from 'serialize-javascript'
import Handlers from './handlers'
import routes from '../shared/routes'
import App from '../shared/App'

// Create a server with a host and port
const pre1 = async(request, h) => {
  const activeRoute = routes.find(route => matchPath(request.url.path, route)) || {},
    _data = activeRoute.fetchInitialData ? await activeRoute.fetchInitialData() : {}

  const markup = renderToString(
    <StaticRouter location={request.url.path} context={{}}>
      <App data={_data} />
    </StaticRouter>
  )

  return `<!DOCTYPE html>
  <html>
    <head>
      <title>Hapi React SSR</title>
    </head>
    <body>
      <div id='app'>${markup}</div>
      <script type='text/javascript' src='/assets/bundle.js' defer></script>
      <script>window.__INITIAL_DATA__ = ${serialize(_data)}</script>
    </body>
  </html>`
}

const Server = Hapi.server({
    host:'0.0.0.0',
    port:8000,
    state: { ignoreErrors: true }
})

// Start the server
async function start() {

  try {
    // Register plugins
    await Server.register([Inert, HapiAutCookie])

    // Setup cache
    const cache = Server.cache({
      segment: 'sessions',
      expiresIn: 3 * 24 * 60 * 60 * 1000
    })

    // Assign cache to server
    Server.app.cache = cache

    // Configure auth strategy
    Server.auth.strategy('session', 'cookie', {
      password: 'password-should-be-32-characters',
      cookie: 'sid-example',
      redirectTo: '/login',
      isSecure: false,
      isHttpOnly: true,
      validateFunc: async (request, session) => {
        const cached = await cache.get(session.sid),
          out = { valid: !!cached }

        if (out.valid) {
            out.credentials = cached.account
        }

        console.log('out', out)

        return out
      }
    })

    // Assign default strategy
    Server.auth.default('session')

    // Add routes
    Server.route([
      {
        method: 'GET',
        path: '/assets/{param*}',
        handler: {
          directory: {
            path: 'assets'
          }
        },
        options: {
          auth: false
        }
      },
      {
        method:'GET',
        path:'/',
        options: {
          auth: false,
          pre: [
            { method: pre1, assign: 'm1' }
          ],
          handler: async(request,h) => {
            const res = await request.pre.m1
            return h.response(res)
          }
        }
      },
      {
        method:'GET',
        path:'/login',
        options: {
          auth: { mode: 'try' },
          pre: [
            { method: pre1, assign: 'm1' }
          ],
          handler: async(request,h) => {
            const res = await request.pre.m1
            return h.response(res)
          }
        }
      },
      {
        method:'GET',
        path:'/account',
        options: {
          pre: [
            { method: pre1, assign: 'm1' }
          ],
          handler: async(request,h) => {
            const res = await request.pre.m1
            return h.response(res)
          }
        }
      },
      {
        method: ['GET','POST'],
        path: '/api/v1/login',
        handler: Handlers.Api.Login,
        options: {
          auth: false,
          cors: {
            origin: ['*'],
            credentials: true
          }
        }
      }
    ])

    await Server.start()
  }
  catch (err) {
    console.log(err)
    process.exit(1)
  }

  console.log('Server running at:', Server.info.uri)
}

start()
