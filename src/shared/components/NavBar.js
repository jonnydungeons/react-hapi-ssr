import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
  constructor(props) {

    super(props)

  }

  render() {
    const { account, actions } = this.props,
      accountIsInSession = Object.keys(account).length !== 0,
      links = [
          {
            name: 'Home',
            path: '/'
          },
          {
            name: 'Widgets',
            path: '/widgets',
          },
          {
            name: 'Account',
            path: '/account',
          }
        ]

    return (
      <ul>
        {links.map(({ name, path }) => (
          <li key={path}>
            <NavLink activeStyle={{fontWeight: 'bold'}} to={`${path}`}>
              {name}
            </NavLink>
          </li>
        ))}
        <li>{!accountIsInSession ? <NavLink to='/login'>Login</NavLink> : <span onClick={actions.logout}>Logout</span>}</li>
      </ul>
    )
  }
}

export default Navbar
