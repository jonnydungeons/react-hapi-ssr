import Home from './pages/Home'
import Login from './pages/Login'
import Account from './pages/Account'
import { MockApi as mockApi } from './apis/mock'
import { Api as Api } from './apis/index'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/account',
    component: Account,
    fetchInitialData: () => new Promise((resolve, reject) => {
      const data = mockApi.load()
      return resolve(data)
    })
  }
]

export default routes
