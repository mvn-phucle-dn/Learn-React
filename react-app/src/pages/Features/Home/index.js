import React, {  } from 'react';

const Home = () => {
  return (
    <div className="container">
      <h1 className="title-page">Welcome to Home page</h1>
      <video width="800" height="500" controls>
        <source src="./tasogare.mp4" type="video/mp4"/>
      </video>
    </div>
  )
}

export default Home;
