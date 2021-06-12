import React, { Component } from 'react';
import './App.css';
import Header from './header';
import Footer from './footer';
import Circle from './circle';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home'
    }
  }

  handleChangePage(page) {
    this.setState({
      page
    });
  }

  render() {
    const { page }  = this.state;
    return (
      <>
      <Header></Header>
      <main className="page-main flex-centered">
        <section className="tab-list">
          <button onClick={() => this.handleChangePage('home')}>Page Home</button>
          <button onClick={() => this.handleChangePage('about')}>Page About</button>
          {(page === 'home') && <div className="circles">
              <Circle sty="50px" num="50"></Circle>
              <Circle sty="50px" num="40"></Circle>
              <Circle sty="50px" num="30"></Circle>
          </div>}
          {(page === 'about') && <div className="circles">About page</div>}
        </section>
        
        {/* <div className="container">
          <img src="./logo.svg" alt="Logo" />
          <h3>Hello React !!!</h3>
        </div> */}
      </main>
      <Footer></Footer>
      </>
    );
  }

}

export default App;
