import {createStore, compose, applyMiddleware} from 'redux'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import createBrowserHistory from 'history/createBrowserHistory'
import createMemoryHistory from 'history/createMemoryHistory'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from '../reducers'
export const history = process.env.__isBrowser__ ? createBrowserHistory() : createMemoryHistory()

const configureStoreProd = initialState => {
    const reactRouterMiddleware = routerMiddleware(history),
      middlewares = [
        // Add other middleware on this line...

        // thunk middleware can also accept an extra argument to be passed to each thunk action
        // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
        thunk,
        promise,
        reactRouterMiddleware,
      ]

    return createStore(rootReducer, initialState, compose(
      applyMiddleware(...middlewares)))
  },
  configureStoreDev = initialState => {
    const reactRouterMiddleware = routerMiddleware(history),
      middlewares = [
        // Add other middleware on this line...

        // Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.
        reduxImmutableStateInvariant(),

        // thunk middleware can also accept an extra argument to be passed to each thunk action
        // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
        thunk,
        promise,
        reactRouterMiddleware,
      ],
      composeEnhancers = process.env.__isBrowser__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose, // add support for Redux dev tools
      store = createStore(rootReducer, initialState, composeEnhancers(
            applyMiddleware(...middlewares)))

    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('../reducers', () => {
        const nextReducer = require('../reducers').default // eslint-disable-line global-require
        store.replaceReducer(nextReducer)
      })
    }

    return store
  },
  configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev

export default configureStore
