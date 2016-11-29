import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { createMemoryHistory, match, RouterContext } from 'react-router';
import serialize from 'serialize-javascript';
import stringify from 'node-stringify';
import store from '../../src/redux/stores';
import routes from '../../src/routes';

module.exports = function(req, res, next) {
  if(!_.eq(req.url, '/api')) {
    let memoryHistory = createMemoryHistory(req.url);
    let history = syncHistoryWithStore(memoryHistory, store);
     match({ history, routes, location: req.url }, (error, redirectLocation, renderProps) => {
      if(error) {
        res.status(500).send('err');
      } else if(redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search)
      } else if(renderProps) {
        const content = renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        );
        var _store = stringify(store.getState());
        res.render('index', {
            title: 'My Test App',
            _store,
            content,
            partials: { scripts: 'scripts', head: 'head' }
        });
      }
    }); 
   } else {
    next();
   }
}