import { Api as api } from '../apis/index'
import { Constants as constants } from '../constants/index'

const fetchSuccess = (status) => ({
  type: constants.FETCH.SUCCESS, status
}),
accountSuccess = (data) => ({
  type: constants.ACTIONS.LOGIN.SUCCESS, data
})

export const login = data => {

  return dispatch => {

    return api.login(data).then(response => {

      dispatch(accountSuccess(response.data))

    }).catch(error => {

      throw(error)
    })
  }
}

export const getAccount = () => {

  return dispatch => {

    return api.getAccount().then(response => {

      dispatch(accountSuccess(response.data))

    }).catch(error => {

      throw(error)
    })
  }
}

export const logout = () => {
  return dispatch => {

    return api.logout().then(response => {

      dispatch(fetchSuccess(response))

    }).catch(error => {

      throw(error)
    })
  }
}
