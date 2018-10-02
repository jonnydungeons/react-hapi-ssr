import React, { Component } from 'react'
import LoginForm from '../forms/Login'

class Login extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleOnChange(formData) {
    console.log('formData', formData)

    this.setState(formData)

    console.log('handleOnChange', this.state)
  }

  handleSubmit() {
    console.log('handleSubmit')
  }

  render() {

    return (
      <div>
        Login
        <LoginForm
          formData={this.state}
          handleOnChange={this.handleOnChange}
          handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default Login
