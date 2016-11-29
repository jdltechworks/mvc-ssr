import { browserHistory } from 'react-router';

let isAuth = true;

export const Authenticate = (payload) => {
  return dispatch => {
    dispatch({ type: 'IS_AUTHENTICATING', payload });
    if(isAuth) {
      dispatch({ type: 'USER_IS_AUTHENTICATED', payload});
      browserHistory.push('/profile');
    }
  }
}


/**
 * [description]
 * @return {[type]} [description]
 */
export const checkAuth = () => {
  return dispatch => {
    dispatch({ type: 'IS_CHECKING_CREDENTIALS'});
    if(isAuth) {
      browserHistory.push('/profile');
    }
  }
}

/**
 * [description]
 * @return {[type]} [description]
 */
export const signOut = (payload) => {
  return dispatch => {

    dispatch({ type: 'LOGGED_OUT', payload});
    browserHistory.push('/login');

  }
}

