'use strict';

var _hapi = _interopRequireDefault(require("hapi"));

var _bounce = _interopRequireDefault(require("bounce"));

var _hapiAuthCookie = _interopRequireDefault(require("hapi-auth-cookie"));

var _inert = _interopRequireDefault(require("inert"));

var _path = _interopRequireDefault(require("path"));

require("@babel/polyfill");

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _server = require("react-dom/server");

var _reactRedux = require("react-redux");

var _reactCookie = require("react-cookie");

var _serializeJavascript = _interopRequireDefault(require("serialize-javascript"));

var _hapiReactCookie = _interopRequireDefault(require("./plugins/hapi-react-cookie"));

var _handlers = _interopRequireDefault(require("./handlers"));

var _configureStore = _interopRequireDefault(require("../shared/store/configureStore"));

var _routes = require("../shared/routes");

var _App = _interopRequireDefault(require("../shared/App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Create Hapi server
var Server = _hapi.default.server({
  host: '0.0.0.0',
  port: process.env.PORT || 3000,
  state: {
    ignoreErrors: true
  },
  debug: {
    request: ['*']
  }
}); // Setup cache


var cache = Server.cache({
  segment: 'sessions',
  expiresIn: 3 * 24 * 60 * 60 * 1000
}); // Assign cache to server

Server.app.cache = cache; // Create a server with a host and port

var pre1 =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(request, h) {
    var cookies, accountInSession, account, activeRoute, data, context, store, markup;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _hapiReactCookie.default)(request, h);

          case 3:
            cookies = _context.sent;
            accountInSession = request.state.hasOwnProperty('sid');

            if (!accountInSession) {
              _context.next = 11;
              break;
            }

            _context.next = 8;
            return cache.get(request.state['sid'].sid);

          case 8:
            _context.t0 = _context.sent;
            _context.next = 12;
            break;

          case 11:
            _context.t0 = {};

          case 12:
            account = _context.t0;
            activeRoute = _routes.Routes.find(function (route) {
              return (0, _reactRouterDom.matchPath)(request.url.path, route);
            }) || {};

            if (!activeRoute.fetchInitialData) {
              _context.next = 20;
              break;
            }

            _context.next = 17;
            return activeRoute.fetchInitialData();

          case 17:
            _context.t1 = _context.sent;
            _context.next = 21;
            break;

          case 20:
            _context.t1 = {};

          case 21:
            data = _context.t1;
            context = _objectSpread({}, data);
            store = (0, _configureStore.default)();
            markup = (0, _server.renderToString)(_react.default.createElement(_reactRedux.Provider, {
              store: store
            }, _react.default.createElement(_reactRouterDom.StaticRouter, {
              location: request.url.path,
              context: context
            }, _react.default.createElement(_reactCookie.CookiesProvider, {
              cookies: request.server.app.universalCookies
            }, _react.default.createElement(_App.default, null)))));
            return _context.abrupt("return", "<!DOCTYPE html>\n      <html>\n        <head>\n          <title>Hapi React SSR</title>\n        </head>\n        <body>\n          <div id='app'>".concat(markup, "</div>\n          <script type='text/javascript' src='/assets/bundle.js' defer></script>\n          <script>window.__INITIAL_DATA__ = ").concat((0, _serializeJavascript.default)(context), "</script>\n        </body>\n      </html>"));

          case 28:
            _context.prev = 28;
            _context.t2 = _context["catch"](0);

            _bounce.default.rethrow(_context.t2, 'system');

          case 31:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 28]]);
  }));

  return function pre1(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // Start the server


function start() {
  return _start.apply(this, arguments);
}

function _start() {
  _start = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee8() {
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return Server.register([_inert.default, _hapiAuthCookie.default]);

          case 3:
            // Configure auth strategy
            Server.auth.strategy('session', 'cookie', {
              password: 'a1276d5c-24fc-4d40-b4b5-4134f51e',
              cookie: 'sid',
              redirectTo: '/login',
              isSecure: false,
              isHttpOnly: false,
              validateFunc: function () {
                var _validateFunc = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee2(request, session) {
                  var cached, out;
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return cache.get(session.sid);

                        case 2:
                          cached = _context2.sent;
                          out = {
                            valid: !!cached
                          };

                          if (out.valid) {
                            out.credentials = cached;
                          }

                          return _context2.abrupt("return", out);

                        case 6:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, this);
                }));

                return function validateFunc(_x3, _x4) {
                  return _validateFunc.apply(this, arguments);
                };
              }()
            }); // Assign default strategy

            Server.auth.default('session'); // Register extension event

            Server.ext({
              type: 'onPreResponse',
              method: function () {
                var _method = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee3(request, h) {
                  var statusCode;
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          statusCode = request.response.statusCode;
                          _context3.t0 = statusCode;
                          _context3.next = _context3.t0 === 404 ? 4 : _context3.t0 === 403 ? 6 : _context3.t0 === 401 ? 8 : _context3.t0 === 302 ? 10 : 12;
                          break;

                        case 4:
                          console.log('not found');
                          return _context3.abrupt("break", 12);

                        case 6:
                          console.log('unauthorized');
                          return _context3.abrupt("break", 12);

                        case 8:
                          console.log('unauthorized');
                          return _context3.abrupt("break", 12);

                        case 10:
                          console.log('redirect');
                          return _context3.abrupt("break", 12);

                        case 12:
                          return _context3.abrupt("return", h.continue);

                        case 13:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3, this);
                }));

                return function method(_x5, _x6) {
                  return _method.apply(this, arguments);
                };
              }()
            }); // Add routes

            Server.route([{
              method: 'GET',
              path: '/assets/{param*}',
              options: {
                auth: false,
                handler: {
                  directory: {
                    path: 'assets'
                  }
                }
              }
            }, {
              method: 'GET',
              path: '/',
              options: {
                auth: false,
                pre: [{
                  method: pre1,
                  assign: 'm1'
                }],
                handler: function () {
                  var _handler = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee4(request, h) {
                    var res;
                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            _context4.next = 2;
                            return request.pre.m1;

                          case 2:
                            res = _context4.sent;
                            return _context4.abrupt("return", h.response(res));

                          case 4:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4, this);
                  }));

                  return function handler(_x7, _x8) {
                    return _handler.apply(this, arguments);
                  };
                }()
              }
            }, {
              method: 'GET',
              path: '/login',
              options: {
                auth: {
                  mode: 'try'
                },
                pre: [{
                  method: pre1,
                  assign: 'm1'
                }],
                handler: function () {
                  var _handler2 = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee5(request, h) {
                    var res;
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            _context5.next = 2;
                            return request.pre.m1;

                          case 2:
                            res = _context5.sent;
                            return _context5.abrupt("return", h.response(res));

                          case 4:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5, this);
                  }));

                  return function handler(_x9, _x10) {
                    return _handler2.apply(this, arguments);
                  };
                }()
              }
            }, {
              method: 'GET',
              path: '/account',
              options: {
                auth: false,
                pre: [{
                  method: pre1,
                  assign: 'm1'
                }],
                handler: function () {
                  var _handler3 = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee6(request, h) {
                    var res;
                    return regeneratorRuntime.wrap(function _callee6$(_context6) {
                      while (1) {
                        switch (_context6.prev = _context6.next) {
                          case 0:
                            _context6.next = 2;
                            return request.pre.m1;

                          case 2:
                            res = _context6.sent;
                            return _context6.abrupt("return", h.response(res));

                          case 4:
                          case "end":
                            return _context6.stop();
                        }
                      }
                    }, _callee6, this);
                  }));

                  return function handler(_x11, _x12) {
                    return _handler3.apply(this, arguments);
                  };
                }()
              }
            }, {
              method: 'GET',
              path: '/api/v1/login',
              handler: _handlers.default.Api.Login,
              options: {
                auth: false,
                pre: [{
                  method: pre1,
                  assign: 'm1'
                }],
                cors: {
                  origin: ['*'],
                  credentials: true
                }
              }
            }, {
              method: 'POST',
              path: '/api/v1/login',
              handler: _handlers.default.Api.Login,
              options: {
                auth: false,
                cors: {
                  origin: ['*'],
                  credentials: true
                }
              }
            }, {
              method: 'POST',
              path: '/api/v1/logout',
              handler: _handlers.default.Api.Logout,
              options: {
                auth: false,
                cors: {
                  origin: ['*'],
                  credentials: true
                }
              }
            }, {
              method: '*',
              path: '/{p*}',
              options: {
                auth: false,
                pre: [{
                  method: pre1,
                  assign: 'm1'
                }],
                handler: function () {
                  var _handler4 = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee7(request, h) {
                    var res;
                    return regeneratorRuntime.wrap(function _callee7$(_context7) {
                      while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            _context7.next = 2;
                            return request.pre.m1;

                          case 2:
                            res = _context7.sent;
                            return _context7.abrupt("return", h.response(res));

                          case 4:
                          case "end":
                            return _context7.stop();
                        }
                      }
                    }, _callee7, this);
                  }));

                  return function handler(_x13, _x14) {
                    return _handler4.apply(this, arguments);
                  };
                }()
              }
            }]);
            _context8.next = 9;
            return Server.start();

          case 9:
            _context8.next = 15;
            break;

          case 11:
            _context8.prev = 11;
            _context8.t0 = _context8["catch"](0);
            console.log(_context8.t0);
            process.exit(1);

          case 15:
            console.log('Server running at:', Server.info.uri);

          case 16:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this, [[0, 11]]);
  }));
  return _start.apply(this, arguments);
}

start();