"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logout = exports.getAccount = exports.login = void 0;

var _index = require("../apis/index");

var _index2 = require("../constants/index");

var success = function success(data) {
  return {
    type: _index2.Constants.ACTIONS.LOGIN.SUCCESS,
    data: data
  };
};

var login = function login(data) {
  return function (dispatch) {
    return _index.Api.login(data).then(function (response) {
      dispatch(success(response.data));
    }).catch(function (error) {
      throw error;
    });
  };
};

exports.login = login;

var getAccount = function getAccount() {
  return function (dispatch) {
    return _index.Api.getAccount().then(function (response) {
      dispatch(success(response.data));
    }).catch(function (error) {
      throw error;
    });
  };
};

exports.getAccount = getAccount;

var logout = function logout() {
  return function (dispatch) {
    return _index.Api.logout().then(function (response) {
      dispatch(success(response.data));
    }).catch(function (error) {
      throw error;
    });
  };
};

exports.logout = logout;