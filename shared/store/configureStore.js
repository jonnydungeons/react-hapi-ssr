"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.history = void 0;

var _redux = require("redux");

var _reduxImmutableStateInvariant = _interopRequireDefault(require("redux-immutable-state-invariant"));

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reduxPromise = _interopRequireDefault(require("redux-promise"));

var _createBrowserHistory = _interopRequireDefault(require("history/createBrowserHistory"));

var _createMemoryHistory = _interopRequireDefault(require("history/createMemoryHistory"));

var _reactRouterRedux = require("react-router-redux");

var _reducers = _interopRequireDefault(require("../reducers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = process.env.__isBrowser__ ? (0, _createBrowserHistory.default)() : (0, _createMemoryHistory.default)();
exports.history = history;

var configureStoreProd = function configureStoreProd(initialState) {
  var reactRouterMiddleware = (0, _reactRouterRedux.routerMiddleware)(history),
      middlewares = [// Add other middleware on this line...
  // thunk middleware can also accept an extra argument to be passed to each thunk action
  // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
  _reduxThunk.default, _reduxPromise.default, reactRouterMiddleware];
  return (0, _redux.createStore)(_reducers.default, initialState, (0, _redux.compose)(_redux.applyMiddleware.apply(void 0, middlewares)));
},
    configureStoreDev = function configureStoreDev(initialState) {
  var reactRouterMiddleware = (0, _reactRouterRedux.routerMiddleware)(history),
      middlewares = [// Add other middleware on this line...
  // Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.
  (0, _reduxImmutableStateInvariant.default)(), // thunk middleware can also accept an extra argument to be passed to each thunk action
  // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
  _reduxThunk.default, _reduxPromise.default, reactRouterMiddleware],
      composeEnhancers = process.env.__isBrowser__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : _redux.compose,
      // add support for Redux dev tools
  store = (0, _redux.createStore)(_reducers.default, initialState, composeEnhancers(_redux.applyMiddleware.apply(void 0, middlewares)));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', function () {
      var nextReducer = require('../reducers').default; // eslint-disable-line global-require


      store.replaceReducer(nextReducer);
    });
  }

  return store;
},
    configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

var _default = configureStore;
exports.default = _default;