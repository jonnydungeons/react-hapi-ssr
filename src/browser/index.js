import React from 'react'
import { Provider } from 'react-redux'
import { CookiesProvider } from 'react-cookie'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import configureStore from '../shared/store/configureStore'
import { getAccount } from '../shared/actions/index'
import App from '../shared/App'

const store = configureStore()

store.dispatch(getAccount())

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)
