import React, { Suspense, lazy } from 'react';
// import Home from './Home';
// import Category from './Category';
// import Sale from './Sale';
// import Contact from './Contact';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../../core/guards/PrivateRoute';

const Home = lazy(() => import('./Home'));
const News = lazy(() => import('./News'));
const Users = lazy(() => import('./Users'));
const Contact = lazy(() => import('./Contact'));

const Features = () => {
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/contact">
          <Contact/>
        </Route>
        {/* <Route path="/users">
          <Users/>
        </Route> */}
        <PrivateRoute path="/users">
          <Users />
        </PrivateRoute>
        <Route path="/news">
          <News/>
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
