'use strict'

let uuid = 1

const users = {
  jonny: {
    id: 'jonny',
    password: '1234',
    name: 'J0NNYZER0'
  }
},
Handlers = {
  Api: {
    Login: async (request, h) => {

      let message = '',
        account = null

      if (request.method === 'post') {
        if (!request.payload.username ||
            !request.payload.password) {

            message = 'Missing username or password'
        }
        else {
            account = users[request.payload.username]
            if (!account ||
                account.password !== request.payload.password) {

                message = 'Invalid username or password'
            }
        }
      }

      if (request.method === 'get') {

        //await request.server.app.cache.get(request.params.shortId)
      }
      const sid = String(+uuid)

      await request.server.app.cache.set(sid, { account }, 0)
      request.cookieAuth.set({ sid })

      return h.response({ status: 200, data: 'logged in' })
    },
    Logout: async (request, h) => {
      request.server.app.cache.drop(request.state['sid-example'].sid)
      request.cookieAuth.clear()
      return h.response({ status: 200, data: 'logged out' })
    }
  }
}

export default Handlers
