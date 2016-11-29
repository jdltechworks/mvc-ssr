import Root from './containers';
import React, { Component } from 'react';


import { render } from 'react-dom';

render(<Root />, document.getElementById('root'));

if(process.env.NODE_ENV === 'development') {
  module.hot.accept();
}