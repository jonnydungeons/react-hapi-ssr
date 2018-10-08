'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _universalCookie = _interopRequireWildcard(require("universal-cookie"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var HapiReactCookie =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(request, h) {
    var cookieHeader;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cookieHeader = request.headers.cookie || '';
            request.server.app.universalCookies = new _universalCookie.default(cookieHeader);
            request.server.app.universalCookies.addChangeListener(function (change) {
              if (!h.state || !request.response) {
                return;
              }

              if (change.value === undefined) {
                h.unstate(change.name, change.options);
              } else {
                var newOptions = Object.assign({}, change.options);

                if (newOptions.maxAge && change.options && change.options.maxAge) {
                  // the standard for maxAge is seconds but express uses milliseconds
                  newOptions.maxAge = change.options.maxAge * 1000;
                }

                h.state(change.name, change.value, newOptions);
              }
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function HapiReactCookie(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = HapiReactCookie;
exports.default = _default;