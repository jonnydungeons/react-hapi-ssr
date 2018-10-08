'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var uuid = 1;
var users = {
  "jon.ortiz@me.com": {
    first_name: "Jonny",
    username: "J0NNYZER0",
    email: "jon.ortiz@me.com"
  }
},
    Handlers = {
  Api: {
    Login: function () {
      var _Login = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(request, h) {
        var payload, ip, message, account, sid, accountInSession;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                payload = JSON.parse(request.payload), ip = request.info.remoteAddress;
                message = '', account = {};

                if (!(request.method === 'post')) {
                  _context.next = 8;
                  break;
                }

                if (!payload.email) {
                  message = 'Missing email';
                } else {
                  account = users[payload.email] || {};
                }

                sid = String(1);
                _context.next = 7;
                return request.server.app.cache.set(sid, account, 0);

              case 7:
                request.cookieAuth.set({
                  sid: sid
                });

              case 8:
                if (!(request.method === 'get')) {
                  _context.next = 18;
                  break;
                }

                accountInSession = request.state.hasOwnProperty('sid');

                if (!accountInSession) {
                  _context.next = 16;
                  break;
                }

                _context.next = 13;
                return request.server.app.cache.get(request.state['sid'].sid);

              case 13:
                _context.t0 = _context.sent;
                _context.next = 17;
                break;

              case 16:
                _context.t0 = {};

              case 17:
                account = _context.t0;

              case 18:
                return _context.abrupt("return", h.response({
                  status: 200,
                  data: account
                }));

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function Login(_x, _x2) {
        return _Login.apply(this, arguments);
      };
    }(),
    Logout: function () {
      var _Logout = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(request, h) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                request.server.app.cache.drop(request.state['sid'].sid);
                request.cookieAuth.clear();
                return _context2.abrupt("return", h.response({
                  status: 200,
                  data: {}
                }));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function Logout(_x3, _x4) {
        return _Logout.apply(this, arguments);
      };
    }()
  }
};
var _default = Handlers;
exports.default = _default;