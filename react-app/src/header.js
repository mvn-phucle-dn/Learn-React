import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header class="page-header">
        <div class="container flex-space-between">
          <div class="header-logo">
            <a href="#"><img src="./logo.svg" alt="Logo"/></a>
          </div>
          <nav class="navbar">
            <ul class="nav-list">
              <li class="nav-item">
                <a class="nav-link active" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Category</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Sale</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <ul class="social-list">
            <li><a href="#"><img src="./search.svg" alt="Logo" /></a></li>
            <li><a href="#"><img src="./login.svg" alt="Logo" /></a></li>
          </ul>
        </div>
      </header>
    )
  }
}
export default Header;