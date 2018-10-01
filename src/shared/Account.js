import React, { Component } from 'react'

class Account extends Component {

  render() {

    return (
      <div>
        Hello {this.props.data.first_name}!<br /><br />
        Username: {this.props.data.username}<br />
        Email: {this.props.data.email}<br />
      </div>
    )
  }
}

export default Account
