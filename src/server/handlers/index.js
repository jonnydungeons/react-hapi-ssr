'use strict'

let uuid = 1

const users = {
  "jon.ortiz@me.com": {
    first_name: "Jonny",
    username: "J0NNYZER0",
    email: "jon.ortiz@me.com"
  }
},
Handlers = {
  Api: {
    Login: async (request, h) => {
      const payload = JSON.parse(request.payload),
        ip = request.info.remoteAddress

      let message = '',
        account = {}

      if (request.method === 'post') {

        if (!payload.email) {
          message = 'Missing email'
        }
        else {
          account = users[payload.email] || {}
        }

        const sid = String(1)

        await request.server.app.cache.set(sid, account, 0)

        request.cookieAuth.set({ sid })

      }

      if (request.method === 'get') {

        const accountInSession = request.state.hasOwnProperty('sid')

        account = accountInSession ? await request.server.app.cache.get(request.state['sid'].sid) : {}

      }

      return h.response({ status: 200, data: account })
    },
    Logout: async (request, h) => {
      request.server.app.cache.drop(request.state['sid'].sid)
      request.cookieAuth.clear()
      return h.response({ status: 200, data: {} })
    }
  }
}

export default Handlers
