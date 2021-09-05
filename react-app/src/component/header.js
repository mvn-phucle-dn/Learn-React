import React from 'react';
import { FaUser, FaCartPlus, FaHeart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const favs = useSelector(state => state.fav.value);
  return (
    <header className="page-header">
      <div className="container flex-space-between">
        <div className="header-logo">
          <NavLink to="/"><img src="./logo.svg" alt="Logo"/></NavLink>
        </div>
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link" to="/news">News</NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link" to="/users">Users</NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
        <ul className="social-list">
          <li><NavLink to="/">
            <span className="wrap-fav-counter">
              <FaHeart/>
              {favs.length ? <span>{favs.length}</span> : <span>{favs.length}</span>}
            </span>
          </NavLink></li>
          <li><NavLink to="/account"><FaUser /></NavLink></li>
          <li><NavLink to="/"><FaCartPlus /></NavLink></li>
        </ul>
      </div>
    </header>
  )
}
export default Header;
