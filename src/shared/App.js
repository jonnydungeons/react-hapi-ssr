import React, { Component } from 'react'
import {connect} from 'react-redux'
import { withCookies, Cookies } from 'react-cookie'
import { withRouter } from 'react-router'
import { Switch, Route, Redirect } from 'react-router-dom'
import { instanceOf, PropTypes } from 'prop-types'
import Navbar from './components/Navbar'
import { Routes } from './routes'
import NotFound from './pages/NotFound'

class App extends Component {

  constructor(props) {

    super(props)

    const { account, cookies } = props

    this.state = {
      accountIsInSession: Object.keys(account).length !== 0,
      account: props.account,
      cookies
    }

  }

  render() {
    const { accountIsInSession, account, cookies } = this.state

    console.log('App props', this.props)

    return (
      <div>
        <Navbar />
        <Switch>
          {Routes.map(({ path, exact, component: C, isPrivate = false, ...rest}) => {
            const publicRender = props => (<C {...props} {...rest} {...this.props} />),
              privateRender = props => (accountIsInSession
                ? <Redirect to={{pathname: '/login',
                  state: { from: props.location.pathname} }} />
                : <C {...props} {...rest} {...this.props} cookies={props.cookies} />),
              renderProperty = !isPrivate ? publicRender : privateRender

            return <Route key={path} path={path} exact={exact} render={renderProperty} />
          })}
          <Route render={props => (<NotFound {...props} />)} />
        </Switch>
      </div>
    )
  }
}

App.propTypes = {
  account: PropTypes.object,
  cookies: instanceOf(Cookies).isRequired
}

const mapStateToProps = state => ({
  account: state.account
})

export default withRouter(withCookies(connect(mapStateToProps)(App)))
