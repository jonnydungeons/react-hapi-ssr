import React, { Component } from 'react'
import TextInput from './TextInput'
import {login} from '../actions/index'

class LoginForm extends Component {

  constructor(props) {

    super(props)

    this.state = {
      form: {
        email: ''
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleOnChange(e) {

    this.state.form[e.target.name] = e.target.value

    this.setState({form: this.state.form})

  }

  handleSubmit(e) {
    const { actions, loginCallback } = this.props

    e.preventDefault()

    actions.login(this.state.form)

  }

  render() {
    const { formData } = this.props

    return (
      <form>
        <TextInput
          name='email'
          onChange={this.handleOnChange}
          placeholder='email'
          value={this.state.form.email} />
        <br/><br/>
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    )
  }
}

export default LoginForm
