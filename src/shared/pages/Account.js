import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { MockApi as mockApi } from '../apis/mock'

class Account extends Component {

  render() {
    const account = { ...this.props.account },
      accountIsInSession = Object.keys(account).length !== 0

    if (!accountIsInSession) return <Redirect to='/login' />

    return (
      <div>
        Hello {account.first_name}!<br /><br />
        Username: {account.username}<br />
        Email: {account.email}<br />
      </div>
    )
  }
}

export default Account
