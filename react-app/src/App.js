import React, { Component } from 'react';
// import './assets/scss/styles.scss';
import './App.css';
import Header from './component/header';
import Footer from './component/footer';
import Circle from './circle';
import FormHooks from './formHooks';
import Pagination from './pagination';
import Features from './pages/Features';
import Account from './pages/Account';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import PrivateRoute from './core/guards/PrivateRoute';
import Auth from './pages/Auth';

class App extends Component {

  render() {
    return (
      <>
      <Header></Header>
      <main className="page-main">
        <Switch>
          <PrivateRoute path="/account">
            <Account />
          </PrivateRoute>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/">
            <Features />
          </Route>
        </Switch>
        {/* <section className="tab-list">
          <div className="button-list">
            <button onClick={() => this.handleChangePage('home')}>Page Home</button>
            <button onClick={() => this.handleChangePage('newList')}>Page News List</button>
            <button onClick={() => this.handleChangePage('contact')}>Page Contact</button>
            <button onClick={() => this.handleChangePage('users')}>Page List user</button>
          </div>
          {(page === 'home') && <div className="circles">
              <Circle sty="50px" num="50"></Circle>
              <Circle sty="50px" num="40"></Circle>
              <Circle sty="50px" num="30"></Circle>
          </div>}
          {(page === 'newList') && <div className="list-key">
            {(data.length > 0) && <ul className="list-new">{newList}</ul>}
            {(data.length === 0) && <ul className="list-new"><li>Bạn ko còn item nào.</li></ul>}
          </div>}
          {(page === 'contact') && <FormHooks></FormHooks>}
          {(page === 'users') && <Pagination></Pagination>}
        </section> */}
      </main>
      <Footer></Footer>
      </>
    );
  }

}

export default App;
