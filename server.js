/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/polyfill/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@babel/polyfill/lib/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/jonortiz/github/react-hapi-ssr/node_modules/@babel/polyfill/lib/index.js'\");\n\n//# sourceURL=webpack:///./node_modules/@babel/polyfill/lib/index.js?");

/***/ }),

/***/ "./node_modules/bounce/lib/index.js":
/*!******************************************!*\
  !*** ./node_modules/bounce/lib/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/jonortiz/github/react-hapi-ssr/node_modules/bounce/lib/index.js'\");\n\n//# sourceURL=webpack:///./node_modules/bounce/lib/index.js?");

/***/ }),

/***/ "./node_modules/hapi-auth-cookie/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/hapi-auth-cookie/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/jonortiz/github/react-hapi-ssr/node_modules/hapi-auth-cookie/lib/index.js'\");\n\n//# sourceURL=webpack:///./node_modules/hapi-auth-cookie/lib/index.js?");

/***/ }),

/***/ "./node_modules/hapi/lib/index.js":
/*!****************************************!*\
  !*** ./node_modules/hapi/lib/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/jonortiz/github/react-hapi-ssr/node_modules/hapi/lib/index.js'\");\n\n//# sourceURL=webpack:///./node_modules/hapi/lib/index.js?");

/***/ }),

/***/ "./node_modules/history/createBrowserHistory.js":
/*!******************************************************!*\
  !*** ./node_modules/history/createBrowserHistory.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/jonortiz/github/react-hapi-ssr/node_modules/history/createBrowserHistory.js'\");\n\n//# sourceURL=webpack:///./node_modules/history/createBrowserHistory.js?");

/***/ }),

/***/ "./node_modules/history/createMemoryHistory.js":
/*!*****************************************************!*\
  !*** ./node_modules/history/createMemoryHistory.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/jonortiz/github/react-hapi-ssr/node_modules/history/createMemoryHistory.js'\");\n\n//# sourceURL=webpack:///./node_modules/history/createMemoryHistory.js?");

/***/ }),

/***/ "./node_modules/inert/lib/index.js":
/*!*****************************************!*\
  !*** ./node_modules/inert/lib/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/jonortiz/github/react-hapi-ssr/node_modules/inert/lib/index.js'\");\n\n//# sourceURL=webpack:///./node_modules/inert/lib/index.js?");

/***/ }),

/***/ "./node_modules/isomorphic-fetch/fetch-npm-node.js":
/*!*********************************************************!*\
  !*** ./node_modules/isomorphic-fetch/fetch-npm-node.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/jonortiz/github/react-hapi-ssr/node_modules/isomorphic-fetch/fetch-npm-node.js'\");\n\n//# sourceURL=webpack:///./node_modules/isomorphic-fetch/fetch-npm-node.js?");

/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/jonortiz/github/react-hapi-ssr/node_modules/prop-types/index.js'\");\n\n//# sourceURL=webpack:///./node_modules/prop-types/index.js?");

/***/ }),

/***/ "./node_modules/react-cookie/es6/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-cookie/es6/index.js ***!
  \************************************************/
/*! exports provided: Cookies, CookiesProvider, withCookies */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/jonortiz/github/react-hapi-ssr/node_modules/react-cookie/es6/index.js'\");\n\n//# sourceURL=webpack:///./node_modules/react-cookie/es6/index.js?");

/***/ }),

/***/ "./node_modules/react-dom/server.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/server.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/jonortiz/github/react-hapi-ssr/node_modules/react-dom/server.js'\");\n\n//# sourceURL=webpack:///./node_modules/react-dom/server.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-redux/es/index.js ***!
  \**********************************************/
/*! exports provided: Provider, createProvider, connectAdvanced, connect */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/jonortiz/github/react-hapi-ssr/node_modules/react-redux/es/index.js'\");\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/index.js?");

/***/ }),

/***/ "./node_modules/react-router-dom/es/index.js":
/*!***************************************************!*\
  !*** ./node_modules/react-router-dom/es/index.js ***!
  \***************************************************/
/*! exports provided: BrowserRouter, HashRouter, Link, MemoryRouter, NavLink, Prompt, Redirect, Route, Router, StaticRouter, Switch, generatePath, matchPath, withRouter */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/jonortiz/github/react-hapi-ssr/node_modules/react-router-dom/es/index.js'\");\n\n//# sourceURL=webpack:///./node_modules/react-router-dom/es/index.js?");

/***/ }),

/***/ "./node_modules/react-router-redux/lib/index.js":
/*!******************************************************!*\
  !*** ./node_modules/react-router-redux/lib/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/jonortiz/github/react-hapi-ssr/node_modules/react-router-redux/lib/index.js'\");\n\n//# sourceURL=webpack:///./node_modules/react-router-redux/lib/index.js?");

/***/ }),

/***/ "./node_modules/react-router/es/index.js":
/*!***********************************************!*\
  !*** ./node_modules/react-router/es/index.js ***!
  \***********************************************/
/*! exports provided: MemoryRouter, Prompt, Redirect, Route, Router, StaticRouter, Switch, generatePath, matchPath, withRouter */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/jonortiz/github/react-hapi-ssr/node_modules/react-router/es/index.js'\");\n\n//# sourceURL=webpack:///./node_modules/react-router/es/index.js?");

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/jonortiz/github/react-hapi-ssr/node_modules/react/index.js'\");\n\n//# sourceURL=webpack:///./node_modules/react/index.js?");

/***/ }),

/***/ "./node_modules/redux-immutable-state-invariant/dist/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/redux-immutable-state-invariant/dist/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/jonortiz/github/react-hapi-ssr/node_modules/redux-immutable-state-invariant/dist/index.js'\");\n\n//# sourceURL=webpack:///./node_modules/redux-immutable-state-invariant/dist/index.js?");

/***/ }),

/***/ "./node_modules/redux-promise/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/redux-promise/lib/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/jonortiz/github/react-hapi-ssr/node_modules/redux-promise/lib/index.js'\");\n\n//# sourceURL=webpack:///./node_modules/redux-promise/lib/index.js?");

/***/ }),

/***/ "./node_modules/redux-thunk/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/redux-thunk/es/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/jonortiz/github/react-hapi-ssr/node_modules/redux-thunk/es/index.js'\");\n\n//# sourceURL=webpack:///./node_modules/redux-thunk/es/index.js?");

/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/*! exports provided: createStore, combineReducers, bindActionCreators, applyMiddleware, compose, __DO_NOT_USE__ActionTypes */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/jonortiz/github/react-hapi-ssr/node_modules/redux/es/redux.js'\");\n\n//# sourceURL=webpack:///./node_modules/redux/es/redux.js?");

/***/ }),

/***/ "./node_modules/serialize-javascript/index.js":
/*!****************************************************!*\
  !*** ./node_modules/serialize-javascript/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/jonortiz/github/react-hapi-ssr/node_modules/serialize-javascript/index.js'\");\n\n//# sourceURL=webpack:///./node_modules/serialize-javascript/index.js?");

/***/ }),

/***/ "./node_modules/universal-cookie/es6/index.js":
/*!****************************************************!*\
  !*** ./node_modules/universal-cookie/es6/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/jonortiz/github/react-hapi-ssr/node_modules/universal-cookie/es6/index.js'\");\n\n//# sourceURL=webpack:///./node_modules/universal-cookie/es6/index.js?");

/***/ }),

/***/ "./src/server/handlers/index.js":
/*!**************************************!*\
  !*** ./src/server/handlers/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar uuid = 1;\nvar users = {\n  \"jon.ortiz@me.com\": {\n    first_name: \"Jonny\",\n    username: \"J0NNYZER0\",\n    email: \"jon.ortiz@me.com\"\n  }\n},\n    Handlers = {\n  Api: {\n    Login: function () {\n      var _Login = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee(request, h) {\n        var payload, ip, message, account, sid, accountInSession;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                payload = JSON.parse(request.payload), ip = request.info.remoteAddress;\n                message = '', account = {};\n\n                if (!(request.method === 'post')) {\n                  _context.next = 8;\n                  break;\n                }\n\n                if (!payload.email) {\n                  message = 'Missing email';\n                } else {\n                  account = users[payload.email] || {};\n                }\n\n                sid = String(1);\n                _context.next = 7;\n                return request.server.app.cache.set(sid, account, 0);\n\n              case 7:\n                request.cookieAuth.set({\n                  sid: sid\n                });\n\n              case 8:\n                if (!(request.method === 'get')) {\n                  _context.next = 18;\n                  break;\n                }\n\n                accountInSession = request.state.hasOwnProperty('sid');\n\n                if (!accountInSession) {\n                  _context.next = 16;\n                  break;\n                }\n\n                _context.next = 13;\n                return request.server.app.cache.get(request.state['sid'].sid);\n\n              case 13:\n                _context.t0 = _context.sent;\n                _context.next = 17;\n                break;\n\n              case 16:\n                _context.t0 = {};\n\n              case 17:\n                account = _context.t0;\n\n              case 18:\n                return _context.abrupt(\"return\", h.response({\n                  status: 200,\n                  data: account\n                }));\n\n              case 19:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      return function Login(_x, _x2) {\n        return _Login.apply(this, arguments);\n      };\n    }(),\n    Logout: function () {\n      var _Logout = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee2(request, h) {\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                request.server.app.cache.drop(request.state['sid'].sid);\n                request.cookieAuth.clear();\n                return _context2.abrupt(\"return\", h.response({\n                  status: 200,\n                  data: {}\n                }));\n\n              case 3:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      return function Logout(_x3, _x4) {\n        return _Logout.apply(this, arguments);\n      };\n    }()\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Handlers);\n\n//# sourceURL=webpack:///./src/server/handlers/index.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var hapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hapi */ \"./node_modules/hapi/lib/index.js\");\n/* harmony import */ var hapi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hapi__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bounce */ \"./node_modules/bounce/lib/index.js\");\n/* harmony import */ var bounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bounce__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var hapi_auth_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hapi-auth-cookie */ \"./node_modules/hapi-auth-cookie/lib/index.js\");\n/* harmony import */ var hapi_auth_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hapi_auth_cookie__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var inert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! inert */ \"./node_modules/inert/lib/index.js\");\n/* harmony import */ var inert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(inert__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom/server */ \"./node_modules/react-dom/server.js\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! serialize-javascript */ \"./node_modules/serialize-javascript/index.js\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _plugins_hapi_react_cookie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./plugins/hapi-react-cookie */ \"./src/server/plugins/hapi-react-cookie.js\");\n/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./handlers */ \"./src/server/handlers/index.js\");\n/* harmony import */ var _shared_store_configureStore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/store/configureStore */ \"./src/shared/store/configureStore.js\");\n/* harmony import */ var _shared_routes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/routes */ \"./src/shared/routes.js\");\n/* harmony import */ var _shared_App__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/App */ \"./src/shared/App.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n // Create Hapi server\n\nvar Server = hapi__WEBPACK_IMPORTED_MODULE_0___default.a.server({\n  host: '0.0.0.0',\n  port: 8000,\n  state: {\n    ignoreErrors: true\n  }\n}); // Setup cache\n\nvar cache = Server.cache({\n  segment: 'sessions',\n  expiresIn: 3 * 24 * 60 * 60 * 1000\n}); // Assign cache to server\n\nServer.app.cache = cache; // Create a server with a host and port\n\nvar pre1 =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(request, h) {\n    var cookies, accountInSession, account, activeRoute, data, context, store, markup;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return Object(_plugins_hapi_react_cookie__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(request, h);\n\n          case 3:\n            cookies = _context.sent;\n            accountInSession = request.state.hasOwnProperty('sid');\n\n            if (!accountInSession) {\n              _context.next = 11;\n              break;\n            }\n\n            _context.next = 8;\n            return cache.get(request.state['sid'].sid);\n\n          case 8:\n            _context.t0 = _context.sent;\n            _context.next = 12;\n            break;\n\n          case 11:\n            _context.t0 = {};\n\n          case 12:\n            account = _context.t0;\n            activeRoute = _shared_routes__WEBPACK_IMPORTED_MODULE_14__[\"Routes\"].find(function (route) {\n              return Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[\"matchPath\"])(request.url.path, route);\n            }) || {};\n\n            if (!activeRoute.fetchInitialData) {\n              _context.next = 20;\n              break;\n            }\n\n            _context.next = 17;\n            return activeRoute.fetchInitialData();\n\n          case 17:\n            _context.t1 = _context.sent;\n            _context.next = 21;\n            break;\n\n          case 20:\n            _context.t1 = {};\n\n          case 21:\n            data = _context.t1;\n            context = _objectSpread({}, data);\n            store = Object(_shared_store_configureStore__WEBPACK_IMPORTED_MODULE_13__[\"default\"])();\n            console.log('context', context);\n            markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_7__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_8__[\"Provider\"], {\n              store: store\n            }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[\"StaticRouter\"], {\n              location: request.url.path,\n              context: context\n            }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_cookie__WEBPACK_IMPORTED_MODULE_9__[\"CookiesProvider\"], {\n              cookies: request.server.app.universalCookies\n            }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_shared_App__WEBPACK_IMPORTED_MODULE_15__[\"default\"], null)))));\n            console.log('context', context);\n            return _context.abrupt(\"return\", \"<!DOCTYPE html>\\n      <html>\\n        <head>\\n          <title>Hapi React SSR</title>\\n        </head>\\n        <body>\\n          <div id='app'>\".concat(markup, \"</div>\\n          <script type='text/javascript' src='/assets/bundle.js' defer></script>\\n          <script>window.__INITIAL_DATA__ = \").concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_10___default()(context), \"</script>\\n        </body>\\n      </html>\"));\n\n          case 30:\n            _context.prev = 30;\n            _context.t2 = _context[\"catch\"](0);\n            bounce__WEBPACK_IMPORTED_MODULE_1___default.a.rethrow(_context.t2, 'system');\n\n          case 33:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this, [[0, 30]]);\n  }));\n\n  return function pre1(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}(); // Start the server\n\n\nfunction start() {\n  return _start.apply(this, arguments);\n}\n\nfunction _start() {\n  _start = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee8() {\n    return regeneratorRuntime.wrap(function _callee8$(_context8) {\n      while (1) {\n        switch (_context8.prev = _context8.next) {\n          case 0:\n            _context8.prev = 0;\n            _context8.next = 3;\n            return Server.register([inert__WEBPACK_IMPORTED_MODULE_3___default.a, hapi_auth_cookie__WEBPACK_IMPORTED_MODULE_2___default.a]);\n\n          case 3:\n            // Configure auth strategy\n            Server.auth.strategy('session', 'cookie', {\n              password: 'a1276d5c-24fc-4d40-b4b5-4134f51e',\n              cookie: 'sid',\n              redirectTo: '/login',\n              isSecure: false,\n              isHttpOnly: false,\n              validateFunc: function () {\n                var _validateFunc = _asyncToGenerator(\n                /*#__PURE__*/\n                regeneratorRuntime.mark(function _callee2(request, session) {\n                  var cached, out;\n                  return regeneratorRuntime.wrap(function _callee2$(_context2) {\n                    while (1) {\n                      switch (_context2.prev = _context2.next) {\n                        case 0:\n                          _context2.next = 2;\n                          return cache.get(session.sid);\n\n                        case 2:\n                          cached = _context2.sent;\n                          out = {\n                            valid: !!cached\n                          };\n\n                          if (out.valid) {\n                            out.credentials = cached;\n                          }\n\n                          return _context2.abrupt(\"return\", out);\n\n                        case 6:\n                        case \"end\":\n                          return _context2.stop();\n                      }\n                    }\n                  }, _callee2, this);\n                }));\n\n                return function validateFunc(_x3, _x4) {\n                  return _validateFunc.apply(this, arguments);\n                };\n              }()\n            }); // Assign default strategy\n\n            Server.auth.default('session'); // Register extension event\n\n            Server.ext({\n              type: 'onPreResponse',\n              method: function () {\n                var _method = _asyncToGenerator(\n                /*#__PURE__*/\n                regeneratorRuntime.mark(function _callee3(request, h) {\n                  var statusCode;\n                  return regeneratorRuntime.wrap(function _callee3$(_context3) {\n                    while (1) {\n                      switch (_context3.prev = _context3.next) {\n                        case 0:\n                          statusCode = request.response.statusCode;\n                          _context3.t0 = statusCode;\n                          _context3.next = _context3.t0 === 404 ? 4 : _context3.t0 === 403 ? 6 : _context3.t0 === 401 ? 8 : _context3.t0 === 302 ? 10 : 12;\n                          break;\n\n                        case 4:\n                          console.log('not found');\n                          return _context3.abrupt(\"break\", 12);\n\n                        case 6:\n                          console.log('unauthorized');\n                          return _context3.abrupt(\"break\", 12);\n\n                        case 8:\n                          console.log('unauthorized');\n                          return _context3.abrupt(\"break\", 12);\n\n                        case 10:\n                          console.log('redirect');\n                          return _context3.abrupt(\"break\", 12);\n\n                        case 12:\n                          return _context3.abrupt(\"return\", h.continue);\n\n                        case 13:\n                        case \"end\":\n                          return _context3.stop();\n                      }\n                    }\n                  }, _callee3, this);\n                }));\n\n                return function method(_x5, _x6) {\n                  return _method.apply(this, arguments);\n                };\n              }()\n            }); // Add routes\n\n            Server.route([{\n              method: 'GET',\n              path: '/assets/{param*}',\n              options: {\n                auth: false,\n                handler: {\n                  directory: {\n                    path: 'assets'\n                  }\n                }\n              }\n            }, {\n              method: 'GET',\n              path: '/',\n              options: {\n                auth: false,\n                pre: [{\n                  method: pre1,\n                  assign: 'm1'\n                }],\n                handler: function () {\n                  var _handler = _asyncToGenerator(\n                  /*#__PURE__*/\n                  regeneratorRuntime.mark(function _callee4(request, h) {\n                    var res;\n                    return regeneratorRuntime.wrap(function _callee4$(_context4) {\n                      while (1) {\n                        switch (_context4.prev = _context4.next) {\n                          case 0:\n                            _context4.next = 2;\n                            return request.pre.m1;\n\n                          case 2:\n                            res = _context4.sent;\n                            return _context4.abrupt(\"return\", h.response(res));\n\n                          case 4:\n                          case \"end\":\n                            return _context4.stop();\n                        }\n                      }\n                    }, _callee4, this);\n                  }));\n\n                  return function handler(_x7, _x8) {\n                    return _handler.apply(this, arguments);\n                  };\n                }()\n              }\n            }, {\n              method: 'GET',\n              path: '/login',\n              options: {\n                auth: {\n                  mode: 'try'\n                },\n                pre: [{\n                  method: pre1,\n                  assign: 'm1'\n                }],\n                handler: function () {\n                  var _handler2 = _asyncToGenerator(\n                  /*#__PURE__*/\n                  regeneratorRuntime.mark(function _callee5(request, h) {\n                    var res;\n                    return regeneratorRuntime.wrap(function _callee5$(_context5) {\n                      while (1) {\n                        switch (_context5.prev = _context5.next) {\n                          case 0:\n                            _context5.next = 2;\n                            return request.pre.m1;\n\n                          case 2:\n                            res = _context5.sent;\n                            return _context5.abrupt(\"return\", h.response(res));\n\n                          case 4:\n                          case \"end\":\n                            return _context5.stop();\n                        }\n                      }\n                    }, _callee5, this);\n                  }));\n\n                  return function handler(_x9, _x10) {\n                    return _handler2.apply(this, arguments);\n                  };\n                }()\n              }\n            }, {\n              method: 'GET',\n              path: '/account',\n              options: {\n                auth: false,\n                pre: [{\n                  method: pre1,\n                  assign: 'm1'\n                }],\n                handler: function () {\n                  var _handler3 = _asyncToGenerator(\n                  /*#__PURE__*/\n                  regeneratorRuntime.mark(function _callee6(request, h) {\n                    var res;\n                    return regeneratorRuntime.wrap(function _callee6$(_context6) {\n                      while (1) {\n                        switch (_context6.prev = _context6.next) {\n                          case 0:\n                            _context6.next = 2;\n                            return request.pre.m1;\n\n                          case 2:\n                            res = _context6.sent;\n                            return _context6.abrupt(\"return\", h.response(res));\n\n                          case 4:\n                          case \"end\":\n                            return _context6.stop();\n                        }\n                      }\n                    }, _callee6, this);\n                  }));\n\n                  return function handler(_x11, _x12) {\n                    return _handler3.apply(this, arguments);\n                  };\n                }()\n              }\n            }, {\n              method: 'GET',\n              path: '/api/v1/login',\n              handler: _handlers__WEBPACK_IMPORTED_MODULE_12__[\"default\"].Api.Login,\n              options: {\n                auth: false,\n                pre: [{\n                  method: pre1,\n                  assign: 'm1'\n                }],\n                cors: {\n                  origin: ['*'],\n                  credentials: true\n                }\n              }\n            }, {\n              method: 'POST',\n              path: '/api/v1/login',\n              handler: _handlers__WEBPACK_IMPORTED_MODULE_12__[\"default\"].Api.Login,\n              options: {\n                auth: false,\n                cors: {\n                  origin: ['*'],\n                  credentials: true\n                }\n              }\n            }, {\n              method: 'POST',\n              path: '/api/v1/logout',\n              handler: _handlers__WEBPACK_IMPORTED_MODULE_12__[\"default\"].Api.Logout,\n              options: {\n                auth: false,\n                cors: {\n                  origin: ['*'],\n                  credentials: true\n                }\n              }\n            }, {\n              method: '*',\n              path: '/{p*}',\n              options: {\n                auth: false,\n                pre: [{\n                  method: pre1,\n                  assign: 'm1'\n                }],\n                handler: function () {\n                  var _handler4 = _asyncToGenerator(\n                  /*#__PURE__*/\n                  regeneratorRuntime.mark(function _callee7(request, h) {\n                    var res;\n                    return regeneratorRuntime.wrap(function _callee7$(_context7) {\n                      while (1) {\n                        switch (_context7.prev = _context7.next) {\n                          case 0:\n                            _context7.next = 2;\n                            return request.pre.m1;\n\n                          case 2:\n                            res = _context7.sent;\n                            return _context7.abrupt(\"return\", h.response(res));\n\n                          case 4:\n                          case \"end\":\n                            return _context7.stop();\n                        }\n                      }\n                    }, _callee7, this);\n                  }));\n\n                  return function handler(_x13, _x14) {\n                    return _handler4.apply(this, arguments);\n                  };\n                }()\n              }\n            }]);\n            _context8.next = 9;\n            return Server.start();\n\n          case 9:\n            _context8.next = 15;\n            break;\n\n          case 11:\n            _context8.prev = 11;\n            _context8.t0 = _context8[\"catch\"](0);\n            console.log(_context8.t0);\n            process.exit(1);\n\n          case 15:\n            console.log('Server running at:', Server.info.uri);\n\n          case 16:\n          case \"end\":\n            return _context8.stop();\n        }\n      }\n    }, _callee8, this, [[0, 11]]);\n  }));\n  return _start.apply(this, arguments);\n}\n\nstart();\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/plugins/hapi-react-cookie.js":
/*!*************************************************!*\
  !*** ./src/server/plugins/hapi-react-cookie.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! universal-cookie */ \"./node_modules/universal-cookie/es6/index.js\");\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nvar HapiReactCookie =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(request, h) {\n    var cookieHeader;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            cookieHeader = request.headers.cookie || '';\n            request.server.app.universalCookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"](cookieHeader);\n            request.server.app.universalCookies.addChangeListener(function (change) {\n              if (!h.state || !request.response) {\n                return;\n              }\n\n              if (change.value === undefined) {\n                h.unstate(change.name, change.options);\n              } else {\n                var newOptions = Object.assign({}, change.options);\n\n                if (newOptions.maxAge && change.options && change.options.maxAge) {\n                  // the standard for maxAge is seconds but express uses milliseconds\n                  newOptions.maxAge = change.options.maxAge * 1000;\n                }\n\n                h.state(change.name, change.value, newOptions);\n              }\n            });\n\n          case 3:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this);\n  }));\n\n  return function HapiReactCookie(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HapiReactCookie);\n\n//# sourceURL=webpack:///./src/server/plugins/hapi-react-cookie.js?");

/***/ }),

/***/ "./src/shared/App.js":
/*!***************************!*\
  !*** ./src/shared/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ \"./node_modules/react-router/es/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./actions/index */ \"./src/shared/actions/index.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Navbar */ \"./src/shared/components/Navbar.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes */ \"./src/shared/routes.js\");\n/* harmony import */ var _pages_NotFound__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/NotFound */ \"./src/shared/pages/NotFound.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(App, _Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    var account = props.account;\n    _this.state = {\n      accountIsInSession: Object.keys(account).length !== 0,\n      account: account\n    };\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var _this$state = this.state,\n          accountIsInSession = _this$state.accountIsInSession,\n          account = _this$state.account;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], this.props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"Switch\"], null, _routes__WEBPACK_IMPORTED_MODULE_9__[\"Routes\"].map(function (_ref) {\n        var path = _ref.path,\n            exact = _ref.exact,\n            C = _ref.component,\n            _ref$isPrivate = _ref.isPrivate,\n            isPrivate = _ref$isPrivate === void 0 ? false : _ref$isPrivate,\n            rest = _objectWithoutProperties(_ref, [\"path\", \"exact\", \"component\", \"isPrivate\"]);\n\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"Route\"], {\n          key: path,\n          path: path,\n          exact: true,\n          render: function render(props) {\n            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(C, _extends({}, props, rest, _this2.props));\n          }\n        });\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"Route\"], {\n        render: function render(props) {\n          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_NotFound__WEBPACK_IMPORTED_MODULE_10__[\"default\"], props);\n        }\n      })));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nApp.propTypes = {\n  account: prop_types__WEBPACK_IMPORTED_MODULE_6__[\"PropTypes\"].object.isRequired,\n  cookies: Object(prop_types__WEBPACK_IMPORTED_MODULE_6__[\"instanceOf\"])(react_cookie__WEBPACK_IMPORTED_MODULE_3__[\"Cookies\"]).isRequired,\n  actions: prop_types__WEBPACK_IMPORTED_MODULE_6__[\"PropTypes\"].object.isRequired\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    account: state.account\n  };\n},\n    mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    actions: Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"bindActionCreators\"])(_actions_index__WEBPACK_IMPORTED_MODULE_7__, dispatch)\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_4__[\"withRouter\"])(Object(react_cookie__WEBPACK_IMPORTED_MODULE_3__[\"withCookies\"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, mapDispatchToProps)(App))));\n\n//# sourceURL=webpack:///./src/shared/App.js?");

/***/ }),

/***/ "./src/shared/actions/index.js":
/*!*************************************!*\
  !*** ./src/shared/actions/index.js ***!
  \*************************************/
/*! exports provided: login, getAccount, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return login; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAccount\", function() { return getAccount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logout\", function() { return logout; });\n/* harmony import */ var _apis_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apis/index */ \"./src/shared/apis/index.js\");\n/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/index */ \"./src/shared/constants/index.js\");\n\n\n\nvar success = function success(data) {\n  return {\n    type: _constants_index__WEBPACK_IMPORTED_MODULE_1__[\"Constants\"].ACTIONS.LOGIN.SUCCESS,\n    data: data\n  };\n};\n\nvar login = function login(data) {\n  return function (dispatch) {\n    return _apis_index__WEBPACK_IMPORTED_MODULE_0__[\"Api\"].login(data).then(function (response) {\n      dispatch(success(response.data));\n    }).catch(function (error) {\n      throw error;\n    });\n  };\n};\nvar getAccount = function getAccount() {\n  return function (dispatch) {\n    return _apis_index__WEBPACK_IMPORTED_MODULE_0__[\"Api\"].getAccount().then(function (response) {\n      dispatch(success(response.data));\n    }).catch(function (error) {\n      throw error;\n    });\n  };\n};\nvar logout = function logout() {\n  return function (dispatch) {\n    return _apis_index__WEBPACK_IMPORTED_MODULE_0__[\"Api\"].logout().then(function (response) {\n      dispatch(success(response.data));\n    }).catch(function (error) {\n      throw error;\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/shared/actions/index.js?");

/***/ }),

/***/ "./src/shared/apis/data.json":
/*!***********************************!*\
  !*** ./src/shared/apis/data.json ***!
  \***********************************/
/*! exports provided: data, default */
/***/ (function(module) {

eval("module.exports = {\"data\":[{\"name\":\"one\"},{\"name\":\"two\"},{\"name\":\"three\"},{\"name\":\"four\"},{\"name\":\"five\"}]};\n\n//# sourceURL=webpack:///./src/shared/apis/data.json?");

/***/ }),

/***/ "./src/shared/apis/index.js":
/*!**********************************!*\
  !*** ./src/shared/apis/index.js ***!
  \**********************************/
/*! exports provided: Api */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Api\", function() { return Api; });\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-node.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/index */ \"./src/shared/constants/index.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Api =\n/*#__PURE__*/\nfunction () {\n  function Api() {\n    _classCallCheck(this, Api);\n  }\n\n  _createClass(Api, null, [{\n    key: \"login\",\n    value: function login(data) {\n      return new Promise(function (resolve, reject) {\n        var encodedURI = encodeURI(\"\".concat(_constants_index__WEBPACK_IMPORTED_MODULE_1__[\"Constants\"].URI.API.LOGIN));\n        isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(encodedURI, {\n          credentials: 'include',\n          headers: {\n            'Accept': 'application/json'\n          },\n          method: 'POST',\n          body: JSON.stringify(data)\n        }).then(function (response) {\n          return resolve(response.json());\n        }).catch(function (err) {\n          return reject(err);\n        });\n      });\n    }\n  }, {\n    key: \"getAccount\",\n    value: function getAccount(data) {\n      return new Promise(function (resolve, reject) {\n        var encodedURI = encodeURI(\"\".concat(_constants_index__WEBPACK_IMPORTED_MODULE_1__[\"Constants\"].URI.API.LOGIN));\n        isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(encodedURI, {\n          credentials: 'include',\n          method: 'GET'\n        }).then(function (response) {\n          return resolve(response.json());\n        }).catch(function (err) {\n          return reject(err);\n        });\n      });\n    }\n  }, {\n    key: \"logout\",\n    value: function logout() {\n      return new Promise(function (resolve, reject) {\n        var encodedURI = encodeURI(\"\".concat(_constants_index__WEBPACK_IMPORTED_MODULE_1__[\"Constants\"].URI.API.LOGOUT));\n        isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(encodedURI, {\n          credentials: 'include',\n          method: 'POST'\n        }).then(function (response) {\n          return resolve(response.json());\n        }).catch(function (err) {\n          return reject(err);\n        });\n      });\n    }\n  }]);\n\n  return Api;\n}();\n\n\n\n//# sourceURL=webpack:///./src/shared/apis/index.js?");

/***/ }),

/***/ "./src/shared/apis/mock.js":
/*!*********************************!*\
  !*** ./src/shared/apis/mock.js ***!
  \*********************************/
/*! exports provided: MockApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MockApi\", function() { return MockApi; });\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.json */ \"./src/shared/apis/data.json\");\nvar _data_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data.json */ \"./src/shared/apis/data.json\", 1);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar MockApi =\n/*#__PURE__*/\nfunction () {\n  function MockApi() {\n    _classCallCheck(this, MockApi);\n  }\n\n  _createClass(MockApi, null, [{\n    key: \"load\",\n    value: function load() {\n      return new Promise(function (resolve) {\n        setTimeout(function () {\n          return resolve(_data_json__WEBPACK_IMPORTED_MODULE_0__);\n        }, 0);\n      });\n    }\n  }]);\n\n  return MockApi;\n}();\n\n\n\n//# sourceURL=webpack:///./src/shared/apis/mock.js?");

/***/ }),

/***/ "./src/shared/components/Navbar.js":
/*!*****************************************!*\
  !*** ./src/shared/components/Navbar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar Navbar =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Navbar, _Component);\n\n  function Navbar(props) {\n    _classCallCheck(this, Navbar);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Navbar).call(this, props));\n  }\n\n  _createClass(Navbar, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          account = _this$props.account,\n          actions = _this$props.actions,\n          accountIsInSession = Object.keys(account).length !== 0,\n          links = [{\n        exact: true,\n        name: 'Home',\n        path: '/'\n      }, {\n        name: 'Widgets',\n        path: '/widgets'\n      }, {\n        name: 'Account',\n        path: '/account'\n      }];\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, links.map(function (_ref) {\n        var exact = _ref.exact,\n            name = _ref.name,\n            path = _ref.path;\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n          key: path\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n          exact: true,\n          activeStyle: {\n            fontWeight: 'bold'\n          },\n          to: \"\".concat(path)\n        }, name));\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, !accountIsInSession ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n        activeStyle: {\n          fontWeight: 'bold'\n        },\n        to: \"/login\"\n      }, \"Login\") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"\",\n        onClick: actions.logout\n      }, \"Logout\")));\n    }\n  }]);\n\n  return Navbar;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\n\n//# sourceURL=webpack:///./src/shared/components/Navbar.js?");

/***/ }),

/***/ "./src/shared/constants/index.js":
/*!***************************************!*\
  !*** ./src/shared/constants/index.js ***!
  \***************************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Constants\", function() { return Constants; });\nvar Constants = {\n  ACTIONS: {\n    LOGIN: {\n      SUCCESS: 'LOGIN_SUCCESS'\n    }\n  },\n  FETCH: {\n    SUCCESS: 'FETCH_SUCCESS',\n    ERROR: 'FETCH_ERROR'\n  },\n  URI: {\n    API: {\n      LOGIN: \"/api/v1/login\",\n      LOGOUT: \"/api/v1/logout\"\n    }\n  }\n};\n\n\n//# sourceURL=webpack:///./src/shared/constants/index.js?");

/***/ }),

/***/ "./src/shared/forms/Login.js":
/*!***********************************!*\
  !*** ./src/shared/forms/Login.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextInput */ \"./src/shared/forms/TextInput.js\");\n/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/index */ \"./src/shared/actions/index.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n\n\n\n\nvar LoginForm =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(LoginForm, _Component);\n\n  function LoginForm(props) {\n    var _this;\n\n    _classCallCheck(this, LoginForm);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(LoginForm).call(this, props));\n    _this.state = {\n      form: {\n        email: ''\n      }\n    };\n    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.handleOnChange = _this.handleOnChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    return _this;\n  }\n\n  _createClass(LoginForm, [{\n    key: \"handleOnChange\",\n    value: function handleOnChange(e) {\n      this.state.form[e.target.name] = e.target.value;\n      this.setState({\n        form: this.state.form\n      });\n    }\n  }, {\n    key: \"handleSubmit\",\n    value: function handleSubmit(e) {\n      var _this$props = this.props,\n          actions = _this$props.actions,\n          loginCallback = _this$props.loginCallback;\n      e.preventDefault();\n      actions.login(this.state.form);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var formData = this.props.formData;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextInput__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        name: \"email\",\n        onChange: this.handleOnChange,\n        placeholder: \"email\",\n        value: this.state.form.email\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        onClick: this.handleSubmit\n      }, \"Submit\"));\n    }\n  }]);\n\n  return LoginForm;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginForm);\n\n//# sourceURL=webpack:///./src/shared/forms/Login.js?");

/***/ }),

/***/ "./src/shared/forms/TextInput.js":
/*!***************************************!*\
  !*** ./src/shared/forms/TextInput.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar TextInput =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(TextInput, _Component);\n\n  function TextInput() {\n    _classCallCheck(this, TextInput);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(TextInput).apply(this, arguments));\n  }\n\n  _createClass(TextInput, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          name = _this$props.name,\n          onChange = _this$props.onChange,\n          placeholder = _this$props.placeholder,\n          value = _this$props.value;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        className: \"text-input\",\n        name: name,\n        onChange: onChange,\n        placeholder: placeholder,\n        type: \"text\",\n        value: value\n      });\n    }\n  }]);\n\n  return TextInput;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TextInput);\n\n//# sourceURL=webpack:///./src/shared/forms/TextInput.js?");

/***/ }),

/***/ "./src/shared/pages/Account.js":
/*!*************************************!*\
  !*** ./src/shared/pages/Account.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var _apis_mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apis/mock */ \"./src/shared/apis/mock.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar Account =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Account, _Component);\n\n  function Account() {\n    _classCallCheck(this, Account);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Account).apply(this, arguments));\n  }\n\n  _createClass(Account, [{\n    key: \"render\",\n    value: function render() {\n      var account = _objectSpread({}, this.props.account),\n          accountIsInSession = Object.keys(account).length !== 0;\n\n      if (!accountIsInSession) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Redirect\"], {\n        to: \"/login\"\n      });\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Hello \", account.first_name, \"!\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \"Username: \", account.username, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \"Email: \", account.email, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null));\n    }\n  }]);\n\n  return Account;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Account);\n\n//# sourceURL=webpack:///./src/shared/pages/Account.js?");

/***/ }),

/***/ "./src/shared/pages/Home.js":
/*!**********************************!*\
  !*** ./src/shared/pages/Home.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar Home =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Home, _Component);\n\n  function Home() {\n    _classCallCheck(this, Home);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Home).apply(this, arguments));\n  }\n\n  _createClass(Home, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Home page\");\n    }\n  }]);\n\n  return Home;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/shared/pages/Home.js?");

/***/ }),

/***/ "./src/shared/pages/Login.js":
/*!***********************************!*\
  !*** ./src/shared/pages/Login.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var _forms_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../forms/Login */ \"./src/shared/forms/Login.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar Login =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Login, _Component);\n\n  function Login(props) {\n    _classCallCheck(this, Login);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Login).call(this, props));\n  }\n\n  _createClass(Login, [{\n    key: \"render\",\n    value: function render() {\n      var _ref = this.props.location.state || {\n        from: {\n          pathname: '/'\n        }\n      },\n          from = _ref.from,\n          account = this.props.account,\n          accountIsInSession = Object.keys(account).length !== 0;\n\n      if (accountIsInSession) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Redirect\"], {\n        to: \"/account\"\n      });\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Login\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_forms_Login__WEBPACK_IMPORTED_MODULE_2__[\"default\"], this.props));\n    }\n  }]);\n\n  return Login;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\n\n//# sourceURL=webpack:///./src/shared/pages/Login.js?");

/***/ }),

/***/ "./src/shared/pages/NotFound.js":
/*!**************************************!*\
  !*** ./src/shared/pages/NotFound.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar NotFound =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(NotFound, _Component);\n\n  function NotFound() {\n    _classCallCheck(this, NotFound);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(NotFound).apply(this, arguments));\n  }\n\n  _createClass(NotFound, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Page Not Found\");\n    }\n  }]);\n\n  return NotFound;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotFound);\n\n//# sourceURL=webpack:///./src/shared/pages/NotFound.js?");

/***/ }),

/***/ "./src/shared/pages/Widgets.js":
/*!*************************************!*\
  !*** ./src/shared/pages/Widgets.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n\n\nvar Widgets =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Widgets, _Component);\n\n  function Widgets(props) {\n    var _this;\n\n    _classCallCheck(this, Widgets);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Widgets).call(this, props));\n    var widgets;\n\n    if (false) {} else {\n      widgets = props.staticContext;\n    }\n\n    _this.state = {\n      loading: widgets && widgets.hasOwnProperty('data') ? false : true,\n      widgets: widgets\n    };\n    _this.fetchWidgets = _this.fetchWidgets.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    return _this;\n  }\n\n  _createClass(Widgets, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this$state = this.state,\n          loading = _this$state.loading,\n          widgets = _this$state.widgets;\n\n      if (loading) {\n        this.fetchWidgets();\n      }\n    }\n  }, {\n    key: \"fetchWidgets\",\n    value: function fetchWidgets() {\n      var _this2 = this;\n\n      var fetchInitialData = this.props.fetchInitialData;\n      this.setState(function () {\n        return {\n          loading: true\n        };\n      });\n      fetchInitialData().then(function (widgets) {\n        return _this2.setState({\n          loading: false,\n          widgets: widgets\n        });\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$state2 = this.state,\n          loading = _this$state2.loading,\n          widgets = _this$state2.widgets;\n\n      if (loading === true) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"'Loading...'\");\n      }\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n        style: {\n          display: 'flex',\n          flexWrap: 'wrap'\n        }\n      }, widgets.data.map(function (_ref) {\n        var name = _ref.name;\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n          key: name,\n          style: {\n            margin: 30\n          }\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, name)));\n      }));\n    }\n  }]);\n\n  return Widgets;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Widgets);\n\n//# sourceURL=webpack:///./src/shared/pages/Widgets.js?");

/***/ }),

/***/ "./src/shared/reducers/accountReducer.js":
/*!***********************************************!*\
  !*** ./src/shared/reducers/accountReducer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/index */ \"./src/shared/constants/index.js\");\n/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialState */ \"./src/shared/reducers/initialState.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// https://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html\n\n\n\nvar accountReducer = function accountReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState__WEBPACK_IMPORTED_MODULE_1__[\"default\"].account;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _constants_index__WEBPACK_IMPORTED_MODULE_0__[\"Constants\"].ACTIONS.LOGIN.SUCCESS:\n      {\n        var account = _objectSpread({}, action.data);\n\n        return account;\n      }\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (accountReducer);\n\n//# sourceURL=webpack:///./src/shared/reducers/accountReducer.js?");

/***/ }),

/***/ "./src/shared/reducers/index.js":
/*!**************************************!*\
  !*** ./src/shared/reducers/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-redux */ \"./node_modules/react-router-redux/lib/index.js\");\n/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _accountReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accountReducer */ \"./src/shared/reducers/accountReducer.js\");\n\n\n\nvar rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  routing: react_router_redux__WEBPACK_IMPORTED_MODULE_1__[\"routerReducer\"],\n  account: _accountReducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);\n\n//# sourceURL=webpack:///./src/shared/reducers/index.js?");

/***/ }),

/***/ "./src/shared/reducers/initialState.js":
/*!*********************************************!*\
  !*** ./src/shared/reducers/initialState.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  account: {}\n});\n\n//# sourceURL=webpack:///./src/shared/reducers/initialState.js?");

/***/ }),

/***/ "./src/shared/routes.js":
/*!******************************!*\
  !*** ./src/shared/routes.js ***!
  \******************************/
/*! exports provided: Routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Routes\", function() { return Routes; });\n/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/Home */ \"./src/shared/pages/Home.js\");\n/* harmony import */ var _pages_Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/Login */ \"./src/shared/pages/Login.js\");\n/* harmony import */ var _pages_Widgets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Widgets */ \"./src/shared/pages/Widgets.js\");\n/* harmony import */ var _pages_Account__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/Account */ \"./src/shared/pages/Account.js\");\n/* harmony import */ var _apis_mock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apis/mock */ \"./src/shared/apis/mock.js\");\n/* harmony import */ var _apis_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apis/index */ \"./src/shared/apis/index.js\");\n\n\n\n\n\n\nvar Routes = [{\n  path: '/',\n  exact: true,\n  component: _pages_Home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n}, {\n  path: '/widgets',\n  component: _pages_Widgets__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  fetchInitialData: function fetchInitialData() {\n    return new Promise(function (resolve, reject) {\n      var data = _apis_mock__WEBPACK_IMPORTED_MODULE_4__[\"MockApi\"].load();\n      return resolve(data);\n    });\n  }\n}, {\n  path: '/login',\n  component: _pages_Login__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}, {\n  path: '/account',\n  component: _pages_Account__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  isPrivate: true\n}];\n\n\n//# sourceURL=webpack:///./src/shared/routes.js?");

/***/ }),

/***/ "./src/shared/store/configureStore.js":
/*!********************************************!*\
  !*** ./src/shared/store/configureStore.js ***!
  \********************************************/
/*! exports provided: history, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"history\", function() { return history; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var redux_immutable_state_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-immutable-state-invariant */ \"./node_modules/redux-immutable-state-invariant/dist/index.js\");\n/* harmony import */ var redux_immutable_state_invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_immutable_state_invariant__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n/* harmony import */ var redux_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-promise */ \"./node_modules/redux-promise/lib/index.js\");\n/* harmony import */ var redux_promise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_promise__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! history/createBrowserHistory */ \"./node_modules/history/createBrowserHistory.js\");\n/* harmony import */ var history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var history_createMemoryHistory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! history/createMemoryHistory */ \"./node_modules/history/createMemoryHistory.js\");\n/* harmony import */ var history_createMemoryHistory__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(history_createMemoryHistory__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-redux */ \"./node_modules/react-router-redux/lib/index.js\");\n/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_redux__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers */ \"./src/shared/reducers/index.js\");\n\n\n\n\n\n\n\n\nvar history =  false ? undefined : history_createMemoryHistory__WEBPACK_IMPORTED_MODULE_5___default()();\n\nvar configureStoreProd = function configureStoreProd(initialState) {\n  var reactRouterMiddleware = Object(react_router_redux__WEBPACK_IMPORTED_MODULE_6__[\"routerMiddleware\"])(history),\n      middlewares = [// Add other middleware on this line...\n  // thunk middleware can also accept an extra argument to be passed to each thunk action\n  // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument\n  redux_thunk__WEBPACK_IMPORTED_MODULE_2__[\"default\"], redux_promise__WEBPACK_IMPORTED_MODULE_3___default.a, reactRouterMiddleware];\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_7__[\"default\"], initialState, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"compose\"])(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"].apply(void 0, middlewares)));\n},\n    configureStoreDev = function configureStoreDev(initialState) {\n  var reactRouterMiddleware = Object(react_router_redux__WEBPACK_IMPORTED_MODULE_6__[\"routerMiddleware\"])(history),\n      middlewares = [// Add other middleware on this line...\n  // Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.\n  redux_immutable_state_invariant__WEBPACK_IMPORTED_MODULE_1___default()(), // thunk middleware can also accept an extra argument to be passed to each thunk action\n  // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument\n  redux_thunk__WEBPACK_IMPORTED_MODULE_2__[\"default\"], redux_promise__WEBPACK_IMPORTED_MODULE_3___default.a, reactRouterMiddleware],\n      composeEnhancers =  false ? undefined : redux__WEBPACK_IMPORTED_MODULE_0__[\"compose\"],\n      // add support for Redux dev tools\n  store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_7__[\"default\"], initialState, composeEnhancers(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"].apply(void 0, middlewares)));\n\n  if (false) {}\n\n  return store;\n},\n    configureStore =  false ? undefined : configureStoreDev;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (configureStore);\n\n//# sourceURL=webpack:///./src/shared/store/configureStore.js?");

/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi @babel/polyfill ./src/server/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! @babel/polyfill */\"./node_modules/@babel/polyfill/lib/index.js\");\nmodule.exports = __webpack_require__(/*! ./src/server/index.js */\"./src/server/index.js\");\n\n\n//# sourceURL=webpack:///multi_@babel/polyfill_./src/server/index.js?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });