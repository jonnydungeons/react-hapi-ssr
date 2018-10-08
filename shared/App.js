"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _reactCookie = require("react-cookie");

var _reactRouter = require("react-router");

var _reactRouterDom = require("react-router-dom");

var _propTypes = require("prop-types");

var actions = _interopRequireWildcard(require("./actions/index"));

var _Navbar = _interopRequireDefault(require("./components/Navbar"));

var _routes = require("./routes");

var _NotFound = _interopRequireDefault(require("./pages/NotFound"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    var account = props.account;
    _this.state = {
      accountIsInSession: Object.keys(account).length !== 0,
      account: account
    };
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          accountIsInSession = _this$state.accountIsInSession,
          account = _this$state.account;
      return _react.default.createElement("div", null, _react.default.createElement(_Navbar.default, this.props), _react.default.createElement(_reactRouterDom.Switch, null, _routes.Routes.map(function (_ref) {
        var path = _ref.path,
            exact = _ref.exact,
            C = _ref.component,
            _ref$isPrivate = _ref.isPrivate,
            isPrivate = _ref$isPrivate === void 0 ? false : _ref$isPrivate,
            rest = _objectWithoutProperties(_ref, ["path", "exact", "component", "isPrivate"]);

        return _react.default.createElement(_reactRouterDom.Route, {
          key: path,
          path: path,
          exact: true,
          render: function render(props) {
            return _react.default.createElement(C, _extends({}, props, rest, _this2.props));
          }
        });
      }), _react.default.createElement(_reactRouterDom.Route, {
        render: function render(props) {
          return _react.default.createElement(_NotFound.default, props);
        }
      })));
    }
  }]);

  return App;
}(_react.Component);

App.propTypes = {
  account: _propTypes.PropTypes.object.isRequired,
  cookies: (0, _propTypes.instanceOf)(_reactCookie.Cookies).isRequired,
  actions: _propTypes.PropTypes.object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    account: state.account
  };
},
    mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(actions, dispatch)
  };
};

var _default = (0, _reactRouter.withRouter)((0, _reactCookie.withCookies)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App)));

exports.default = _default;