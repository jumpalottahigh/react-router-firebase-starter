import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logo from './logo.png'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav className="brand">
          <a href="/">
            <img src={logo} alt="Georgi Yanev logo" />
            <h4>@jumpalottahigh</h4>
          </a>
        </nav>
        <nav className="main">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
    )
  }
}

export default Header
