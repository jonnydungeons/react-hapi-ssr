import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar () {
  const links = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'Account',
    path: '/account',
  }]

  return (
    <ul>
      {links.map(({ name, path }) => (
        <li key={path}>
          <NavLink activeStyle={{fontWeight: 'bold'}} to={`${path}`}>
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
