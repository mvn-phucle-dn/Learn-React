import React from 'react';
import { Route, Switch } from 'react-router';
import Login from './Login';

const Auth = () => {
  return (
    <div>
      <Switch>
        <Route path="/auth/login">
          <Login />
        </Route>
      </Switch>
    </div>
  )
}

export default Auth;
