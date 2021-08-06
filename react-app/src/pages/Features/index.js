import React from 'react';
import Home from './Home';
import Category from './Category';
import { Switch, Route } from 'react-router-dom';

const Features = () => {
  return (
    <>
      <Switch>
        <Route path="/category">
          <Category/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
        <Route path="/sale">
          <Home/>
        </Route>
        <Route path="/contact">
          <Home/>
        </Route>
      </Switch>
    </>
  );
}


export default Features;
