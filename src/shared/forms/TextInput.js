import React, { Component } from 'react'

class TextInput extends Component {

  render() {

    const { name, onChange, placeholder, value } = this.props

    return (
      <input className='text-input'
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type='text'
        value={value} />
    )
  }
}

export default TextInput
