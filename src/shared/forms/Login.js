import React, { Component } from 'react'


class LoginForm extends Component {

  constructor(props) {
    super(props)
    this._handleOnChange = this._handleOnChange.bind(this)
  }

  _handleOnChange() {
    const { formData, handleOnChange } = this.props
    handleOnChange(formData)
  }

  render() {
    const { formData } = this.props

    return (
      <form>
        <input onChange={this._handleOnChange} value={formData.email} type="text" name="email" placeholder="Email" />
        <br/><br/>
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    )
  }
}

export default LoginForm
