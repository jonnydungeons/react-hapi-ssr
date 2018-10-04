import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import LoginForm from '../forms/Login'

class Login extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    const { from } = this.props.location.state || { from: { pathname: '/' } },
      { account } = this.props,
      accountIsInSession = Object.keys(account).length !== 0

    if (accountIsInSession) return <Redirect to='/account' />

    return (
      <div>
        Login
        <LoginForm {...this.props} />
      </div>
    )
  }
}

export default Login
