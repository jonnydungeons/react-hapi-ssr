"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reactRouterRedux = require("react-router-redux");

var _accountReducer = _interopRequireDefault(require("./accountReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  routing: _reactRouterRedux.routerReducer,
  account: _accountReducer.default
});
var _default = rootReducer;
exports.default = _default;