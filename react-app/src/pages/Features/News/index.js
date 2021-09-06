import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { toggle } from '../../../store/favSlice';
import { Link } from 'react-router-dom';

const News = () => {
  const dispatch = useDispatch();

  const [news, setNews] = useState([
    {
      id: 1,
      title: 'This is title 1',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      img: './thuysi1.jpeg',
      favs: false
    },
    {
      id: 2,
      title: 'This is title 2',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      img: './thuysi2.jpeg',
      favs: false
    },
    {
      id: 3,
      title: 'This is title 3',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      img: './thuysi3.png',
      favs: false
    },
    {
      id: 4,
      title: 'This is title 4',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      img: './thuysi4.jpeg',
      favs: false
    },
    {
      id: 5,
      title: 'This is title 5',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      img: './thuysi5.jpeg',
      favs: false
    },
    {
      id: 6,
      title: 'This is title 1',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      img: './thuysi6.jpeg',
      favs: false
    },
    {
      id: 7,
      title: 'This is title 2',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      img: './thuysi7.jpeg',
      favs: false
    },
    {
      id: 8,
      title: 'This is title 3',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      img: './thuysi8.jpeg',
      favs: false
    },
  ]);

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
      <h1 className="title-page">List News</h1>
      {(news.length > 0) && <ul className="list-new">
        {
          news.map(e => (
            <li key={e.id}>
              <img src={e.img} alt="thumb" />
              <div className="news-content">
                <h3><Link to="/">{e.title}</Link></h3>
                <p>{e.content}</p>
                <span className={`news-fav ${e.favs ? 'active' : ''}`} onClick={(event) => handleFav(event, e.id)}><FaHeart/></span>
              </div>
            </li>
          ))
        }
      </ul>}
      {(news.length === 0) && <ul className="list-new"><li>Bạn ko còn item nào.</li></ul>}
    </div>
    
    
  )
}

export default News;
