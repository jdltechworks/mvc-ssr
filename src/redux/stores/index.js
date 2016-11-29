import _ from 'lodash';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore, compose } from 'redux';

import mainReducer from '../reducers';

const middlewares = [thunk];

/**
 * Store configuration
 */

let composeEnhancers = compose;

const store = createStore(mainReducer, composeEnhancers(applyMiddleware(...middlewares)));

export default store;