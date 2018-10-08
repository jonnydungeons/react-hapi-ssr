"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Constants = void 0;
var Constants = {
  ACTIONS: {
    LOGIN: {
      SUCCESS: 'LOGIN_SUCCESS'
    }
  },
  FETCH: {
    SUCCESS: 'FETCH_SUCCESS',
    ERROR: 'FETCH_ERROR'
  },
  URI: {
    API: {
      LOGIN: "/api/v1/login",
      LOGOUT: "/api/v1/logout"
    }
  }
};
exports.Constants = Constants;