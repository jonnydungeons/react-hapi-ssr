import React, { Component } from 'react'
import { MockApi as mockApi } from '../apis/mock'

class Account extends Component {

  render() {
    const account = { ...this.props.account }

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
