import React from 'react';
import { FaUser, FaCartPlus } from 'react-icons/fa';
import { BrowserRouter as Router, Link, NavLink, Route } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header className="page-header">
        <div className="container flex-space-between">
          <div className="header-logo">
            <NavLink to="/"><img src="./logo.svg" alt="Logo"/></NavLink>
          </div>
          <nav className="navbar">
            <ul className="nav-list">
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/category">Category</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/sale">Sale</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
          <ul className="social-list">
            <li><NavLink to="/account"><FaUser /></NavLink></li>
            <li><NavLink to="/"><FaCartPlus /></NavLink></li>
          </ul>
        </div>
      </header>
    )
  }
}
export default Header;
