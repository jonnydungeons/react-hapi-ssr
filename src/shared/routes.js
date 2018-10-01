import Home from './Home'
import Account from './Account'
import { Api as api } from './api'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/account',
    component: Account,
    fetchInitialData: () => new Promise((resolve, reject) => {
      const data = api.load()

      return resolve(data)
    })
  }
]

export default routes
