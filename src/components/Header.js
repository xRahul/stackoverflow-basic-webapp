import React from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends React.Component {
  render() {
    return (
      <NavLink to={'/'} style={{ textDecoration: 'none', color: 'black' }}>
        <h1 style={{marginTop: 20, marginBottom: 30}}>
            Stackoverflow Basic View
        </h1>
      </NavLink>
    )
  }
}