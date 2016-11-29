import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import store from '../redux/stores';
import { browserHistory, Router, Route, IndexRedirect } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from '../routes';


/**
 * Route provider
 */
console.log(window.initialState);

const _history = syncHistoryWithStore(browserHistory, store);

class Root extends Component {
  render() {
    return(
      <Provider store={store}>
        <Router history={_history} routes={routes}>
        </Router>
      </Provider>
    );
  }
}

export default Root;