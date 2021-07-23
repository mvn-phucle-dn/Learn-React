import React, { Component } from 'react';
import './App.css';
import Header from './header';
import Footer from './footer';
import Circle from './circle';
import FormHooks from './formHooks';
import Pagination from './pagination';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
      data: [
        {
          id: 1,
          title: 'This is title 1',
          content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
          img: './yibo.jpeg'
        },
        {
          id: 2,
          title: 'This is title 2',
          content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
          img: './yibo.jpeg'
        },
        {
          id: 3,
          title: 'This is title 3',
          content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
          img: './yibo.jpeg'
        },
        {
          id: 4,
          title: 'This is title 4',
          content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
          img: './yibo.jpeg'
        },
        {
          id: 5,
          title: 'This is title 5',
          content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
          img: './yibo.jpeg'
        }
      ],
    }
  }

  handleChangePage(page) {
    this.setState({
      page
    });
  }
  closeNew(item) {
    const data = this.state.data.filter(i => i.id !== item.id)
    this.setState({data})
  }

  render() {
    const { page }  = this.state;
    const { data }  = this.state;
    const news = this.state.data;
    const newList = news.map(e => (<li key={e.id}><img src={e.img} alt="thumb"/><div className="news-content"><h3>{e.title}</h3><p>{e.content}</p></div><button type="button" className="icon-close" onClick={this.closeNew.bind(this, e)}>Delete</button></li>));
    return (
      <>
      <Header></Header>
      <main className="page-main">
        <section className="tab-list">
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
        </section>
      </main>
      <Footer></Footer>
      </>
    );
  }

}

export default App;
