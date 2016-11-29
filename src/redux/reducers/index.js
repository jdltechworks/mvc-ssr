import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as form } from 'redux-form';

import Auth from './Auth';


const mainReducer = combineReducers({
  Auth,
  form,
  routing: routerReducer 
});

export default mainReducer;