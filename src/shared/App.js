import React, { Component } from 'react'
import { withCookies, Cookies } from 'react-cookie'
import { Switch, Route, Redirect } from 'react-router-dom'
import { instanceOf, PropTypes } from 'prop-types'
import Navbar from './components/Navbar'
import { Routes } from './routes'
import NotFound from './pages/NotFound'

const fakeAuth = {
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

class App extends Component {

  constructor(props) {
    super(props)

    const { cookies } = props

    this.state = {
      isAuthenticated: false,
      accountCookie: cookies.get('skilllit.com') || {}
    }
  }

  render() {
    const { isAuthenticated, accountCookie } = this.state
    console.log('accountCookie', accountCookie)
    return (
      <div>
        <Navbar />
        <Switch>
          {Routes.map(({ path, exact, component: C, isPrivate = false, ...rest}) => {
            const publicRender = props => (<C {...props} {...rest} />),
              privateRender = props => (!isAuthenticated
                ? <Redirect to={{pathname: '/login', state: { from: props.location }}} />
                : <C {...props} {...rest} />)

            const renderProperty = !isPrivate ? publicRender : privateRender

            return <Route key={path} path={path} exact={exact} render={renderProperty} />
          })}
          <Route render={props => (<NotFound {...props} />)} />
        </Switch>
      </div>
    )
  }
}

App.propTypes = {
  cookies: instanceOf(Cookies).isRequired
}

export default withCookies(App)
