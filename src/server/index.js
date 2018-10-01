'use strict'

import Hapi from 'hapi'
import Inert from 'inert'
import Path from 'path'
import { StaticRouter, matchPath } from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import React from 'react'
import serialize from 'serialize-javascript'
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

    await Server.register([Inert])

    // Add the route
    Server.route([
      {
        method: 'GET',
        path: '/assets/{param*}',
        handler: {
          directory: {
            path: 'assets'
          }
        }
      },
      {
        method:'GET',
        path:'/',
        config: {
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
        config: {
          pre: [
            { method: pre1, assign: 'm1' }
          ],
          handler: async(request,h) => {
            const res = await request.pre.m1
            return h.response(res)
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
