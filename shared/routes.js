"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Routes = void 0;

var _Home = _interopRequireDefault(require("./pages/Home"));

var _Login = _interopRequireDefault(require("./pages/Login"));

var _Widgets = _interopRequireDefault(require("./pages/Widgets"));

var _Account = _interopRequireDefault(require("./pages/Account"));

var _mock = require("./apis/mock");

var _index = require("./apis/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Routes = [{
  path: '/',
  exact: true,
  component: _Home.default
}, {
  path: '/widgets',
  component: _Widgets.default,
  fetchInitialData: function fetchInitialData() {
    return new Promise(function (resolve, reject) {
      var data = _mock.MockApi.load();

      return resolve(data);
    });
  }
}, {
  path: '/login',
  component: _Login.default
}, {
  path: '/account',
  component: _Account.default,
  isPrivate: true
}];
exports.Routes = Routes;