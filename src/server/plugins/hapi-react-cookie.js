'use strict'

import Cookies, { CookieChangeOptions } from 'universal-cookie'

const HapiReactCookie = async (request, h) => {

  const cookieHeader = request.headers.cookie || ''

  request.server.app.universalCookies = new Cookies(cookieHeader)

  request.server.app.universalCookies.addChangeListener(change => {
    if (!h.state || !request.response) {
      return
    }

    if (change.value === undefined) {
      h.unstate(change.name, change.options)
    } else {
      const newOptions = Object.assign({}, change.options)
      if (newOptions.maxAge && change.options && change.options.maxAge) {
        // the standard for maxAge is seconds but express uses milliseconds
        newOptions.maxAge = change.options.maxAge * 1000
      }

      h.state(change.name, change.value, newOptions)
    }
  })
}

export default HapiReactCookie
