import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import LoginForm from '../forms/Login'

class Login extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    const { from } = this.props.location.state || { from: { pathname: '/' } },
      { accountIsInSession, account } = this.props
      console.log('accountIsInSession login', accountIsInSession)
    /*if (!accountIsInSession) {

      return <Redirect to={from} />
    }*/

    return (
      <div>
        Login
        <LoginForm {...this.props} />
      </div>
    )
  }
}

export default Login
