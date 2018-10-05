import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { withCookies, Cookies } from 'react-cookie'
import { withRouter } from 'react-router'
import { Switch, Route, Redirect } from 'react-router-dom'
import { instanceOf, PropTypes } from 'prop-types'
import * as actions from './actions/index'
import Navbar from './components/Navbar'
import { Routes } from './routes'
import NotFound from './pages/NotFound'

class App extends Component {

  constructor(props) {

    super(props)

    const { account } = props

    this.state = {
      accountIsInSession: Object.keys(account).length !== 0,
      account: account
    }

  }

  render() {
    const { accountIsInSession, account } = this.state

    return (
      <div>
        <Navbar {...this.props} />
        <Switch>
          {Routes.map(({ path, exact, component: C, isPrivate = false, ...rest}) => {
            const publicRender = props => (<C {...props} {...rest} {...this.props} />)/*,
              privateRender = props => (accountIsInSession
                ? <Redirect to={{pathname: '/login',
                  state: { from: props.location.pathname} }} />
                : <C {...props} {...rest} {...this.props} />),
              renderProperty = !isPrivate ? publicRender : privateRender*/

            return <Route key={path} path={path} exact={exact} render={publicRender} />
          })}
          <Route render={props => (<NotFound {...props} />)} />
        </Switch>
      </div>
    )
  }
}

App.propTypes = {
  account: PropTypes.object.isRequired,
  cookies: instanceOf(Cookies).isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    account: state.account
  }),
  mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })

export default withRouter(withCookies(connect(mapStateToProps, mapDispatchToProps)(App)))
