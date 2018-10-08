"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = require("../constants/index");

var _initialState = _interopRequireDefault(require("./initialState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var accountReducer = function accountReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState.default.account;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _index.Constants.ACTIONS.LOGIN.SUCCESS:
      {
        var account = _objectSpread({}, action.data);

        return account;
      }

    default:
      return state;
  }
};

var _default = accountReducer;
exports.default = _default;