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
            exact: true,
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
        {links.map(({ exact, name, path }) => (
          <li key={path}>
            <NavLink exact activeStyle={{fontWeight: 'bold'}} to={`${path}`}>
              {name}
            </NavLink>
          </li>
        ))}
        <li>{!accountIsInSession
          ? <NavLink activeStyle={{fontWeight: 'bold'}} to='/login'>Login</NavLink>
          : <a href="" onClick={actions.logout}>Logout</a>}</li>
      </ul>
    )
  }
}

export default Navbar
