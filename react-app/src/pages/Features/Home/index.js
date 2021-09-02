import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { toggle } from '../../../store/favSlice';

const Home = () => {
  const dispatch = useDispatch();

  const [news, setNews] = useState([
    {
      id: 1,
      title: 'This is title 1',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      img: './yibo.jpeg',
      favs: false
    },
    {
      id: 2,
      title: 'This is title 2',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      img: './yibo.jpeg',
      favs: false
    },
    {
      id: 3,
      title: 'This is title 3',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      img: './yibo.jpeg',
      favs: false
    },
    {
      id: 4,
      title: 'This is title 4',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      img: './yibo.jpeg',
      favs: false
    },
    {
      id: 5,
      title: 'This is title 5',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      img: './yibo.jpeg',
      favs: false
    }
  ]);

  function handleRemove(id) {
    const newList = news.filter(e => e.id !== id);
    setNews(newList);
  }

  const handleFav = (e, id) => {
    e.preventDefault();
    const newProds = news.map(e => {
      if (e.id === id) {
        e.favs = !e.favs;
      }
      return e;
    })
    setNews(newProds);
    dispatch(toggle(id));
  }
  
  return (
    <div className="container">
      <h1>Welcome to home page</h1>
      <div className="list-key">
        {(news.length > 0) && <ul className="list-new">
          {
            news.map(e => (
              <li key={e.id}>
                <img src={e.img} alt="thumb" />
                <div className="news-content">
                  <h3>{e.title}</h3>
                  <p>{e.content}</p>
                  <span className={`news-fav ${e.favs ? 'active' : ''}`} onClick={(event) => handleFav(event, e.id)}><FaHeart/></span>
                </div>
                <button type="button" className="icon-close" onClick={() => handleRemove(e.id)}>Delete</button>
              </li>
            ))
          }
        </ul>}
        {(news.length === 0) && <ul className="list-new"><li>Bạn ko còn item nào.</li></ul>}
      </div>
    </div>
    
    
  )
}

export default Home;
