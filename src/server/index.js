import Hapi from 'hapi'
import Bounce from 'bounce'
import HapiAutCookie from 'hapi-auth-cookie'
import Inert from 'inert'
import Path from 'path'
import React from 'react'
import { StaticRouter, matchPath } from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { CookiesProvider } from 'react-cookie'
import serialize from 'serialize-javascript'
import HapiReactCookie from './plugins/hapi-react-cookie'
import Handlers from './handlers'
import configureStore from '../shared/store/configureStore'
import { Routes } from '../shared/routes'
import App from '../shared/App'

// Create a server with a host and port
const pre1 = async(request, h) => {

  const cookies = await HapiReactCookie(request, h)

  try {

    const activeRoute = Routes.find(
      route => matchPath(request.url.path, route)) || {},
      data = activeRoute.fetchInitialData
      ? await activeRoute.fetchInitialData() : {},
      context = { data },
      store = configureStore(),
      markup = renderToString(
      <Provider store={store}>
        <StaticRouter location={request.url.path} context={context}>
          <CookiesProvider cookies={request.server.app.universalCookies}>
            <App />
          </CookiesProvider>
        </StaticRouter>
      </Provider>
    )

    return `<!DOCTYPE html>
      <html>
        <head>
          <title>Hapi React SSR</title>
        </head>
        <body>
          <div id='app'>${markup}</div>
          <script type='text/javascript' src='/assets/bundle.js' defer></script>
          <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
        </body>
      </html>`

  } catch(err) {

    Bounce.rethrow(err, 'system')

  }
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
      password: 'a1276d5c-24fc-4d40-b4b5-4134f51e',
      cookie: 'sid',
      redirectTo: '/login',
      isSecure: false,
      isHttpOnly: false,
      validateFunc: async (request, session) => {
        console.log('validateFunc')
        const cached = await cache.get(session.sid),
          out = { valid: !!cached }

        if (out.valid) {
            out.credentials = cached.account
        }

        return out
      }
    })

    // Assign default strategy
    Server.auth.default('session')

    // Register extension event
    Server.ext({
      type: 'onPreResponse',
      method: async (request, h) => {

        const statusCode = request.response.statusCode

        switch(statusCode) {

          case 404: {

            console.log('not found')
            break
          }

          case 403: {

            console.log('unauthorized')
            break
          }

          case 401: {

            console.log('unauthorized')
            break
          }

          case 302: {

            console.log('redirect')
            break
          }

          default:
            console.log('statuscode is ', statusCode)
        }

        return h.continue
      }
    })

    // Add routes
    Server.route([
      {
        method: 'GET',
        path: '/assets/{param*}',
        options: {
          auth: false,
          handler: {
            directory: {
              path: 'assets'
            }
          },
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
      },
      {
        method: '*',
        path: '/{p*}',
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
