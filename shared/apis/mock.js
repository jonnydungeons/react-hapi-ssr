"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MockApi = void 0;

var _data = _interopRequireDefault(require("./data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MockApi =
/*#__PURE__*/
function () {
  function MockApi() {
    _classCallCheck(this, MockApi);
  }

  _createClass(MockApi, null, [{
    key: "load",
    value: function load() {
      return new Promise(function (resolve) {
        setTimeout(function () {
          return resolve(_data.default);
        }, 0);
      });
    }
  }]);

  return MockApi;
}();

exports.MockApi = MockApi;