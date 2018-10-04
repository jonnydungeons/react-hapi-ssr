import fetch from 'isomorphic-fetch'
import { Constants as constants } from '../constants/index'

class Api {

  static login(data) {

    return new Promise((resolve, reject) => {

      const encodedURI = encodeURI(`${constants.URI.API.LOGIN}`)

      fetch(encodedURI, {
        credentials: 'include',
        headers: {
          'Accept': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
      })
      .then((response) => resolve(response.json()))
      .catch(err => reject(err))
    })
  }

  static getAccount(data) {

    return new Promise((resolve, reject) => {

      const encodedURI = encodeURI(`${constants.URI.API.LOGIN}`)

      fetch(encodedURI, { credentials: 'include', method: 'GET' })
      .then((response) => resolve(response.json()))
      .catch(err => reject(err))
    })
  }

  static logout() {

    return new Promise((resolve, reject) => {

      const encodedURI = encodeURI(`${constants.URI.API.LOGOUT}`)

      fetch(encodedURI, { credentials: 'include', method: 'POST' })
      .then((response) => resolve(response.json()))
      .catch(err => reject(err))
    })
  }

}

export { Api }
