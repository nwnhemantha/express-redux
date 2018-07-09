import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <NavLink activeclassname="active" className="navbar-brand" to="/">
            NHR
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item ">
                <NavLink activeclassname="active" className="nav-link" to="/dashboard">
                  Dashboard
                </NavLink>
              </li>
            </ul>

            <ul className="navbar-nav ">
              <li className="nav-item ">
                <NavLink activeclassname="active" className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink activeclassname="active" className="nav-link" to="/register">
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink activeclassname="active" className="nav-link" to="/logout">
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container">{this.props.children}</div>
      </div>
    )
  }
}

export default App
