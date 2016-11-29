import React, { Component } from 'react';
import { Route } from 'react-router';

import App from './containers/App';
import Login from './containers/Login';
import UserProfile from './containers/Profile';
const routes = (
  <Route path="/" component={App}>
    <Route path="/login" component={Login}></Route>
    <Route path="/profile" component={UserProfile}></Route>
  </Route>
);

export default routes;