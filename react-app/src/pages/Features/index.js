import React, { Suspense, lazy } from 'react';
// import Home from './Home';
// import Category from './Category';
// import Sale from './Sale';
// import Contact from './Contact';
import { Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Category = lazy(() => import('./Category'));
const Sale = lazy(() => import('./Sale'));
const Contact = lazy(() => import('./Contact'));

const Features = () => {
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/sale">
          <Sale/>
        </Route>
        <Route path="/category">
          <Category/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Suspense>
    </>
  );
}


export default Features;
