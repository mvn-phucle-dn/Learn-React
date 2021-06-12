import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="page-header">
        <div className="container flex-space-between">
          <div className="header-logo">
            <a href="#"><img src="./logo.svg" alt="Logo"/></a>
          </div>
          <nav className="navbar">
            <ul className="nav-list">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Category</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sale</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <ul className="social-list">
            <li><a href="#"><img src="./search.svg" alt="Logo" /></a></li>
            <li><a href="#"><img src="./login.svg" alt="Logo" /></a></li>
          </ul>
        </div>
      </header>
    )
  }
}
export default Header;
