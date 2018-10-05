import Home from './pages/Home'
import Login from './pages/Login'
import Widgets from './pages/Widgets'
import Account from './pages/Account'
import { MockApi as mockApi } from './apis/mock'
import { Api as Api } from './apis/index'

const Routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/widgets',
    component: Widgets,
    fetchInitialData: () => new Promise((resolve, reject) => {
      const data = mockApi.load()
      return resolve(data)
    })
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/account',
    component: Account,
    isPrivate: true
  }
]

export {
  Routes
}
