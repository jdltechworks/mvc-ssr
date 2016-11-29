const Auth = (state = {
  isLoggedIn: false,
  loginFaied: false,
  isAuthenticating: false,
}, action) => {
  let { type, payload } = action;
  switch(type) {
    case 'IS_AUTHENTICATING': return {
      ...state,
      isAuthenticating: true,
      isLoggedIn: false,
      loginFailed: false
    }
    break;
    case 'LOGIN_SUCCESS': return {
      ...state,
      isAuthenticating: false,
      isLoggedIn: true,
      loginFailed: false
    }
    break;
    case 'IS_CHECKING_CREDENTIALS': return {
      ...state,
      isAuthenticating: false,
      isLoggedIn: false,
      loginFailed: false
    }
    break;
    case 'USER_IS_AUTHENTICATED': return {
      ...state,
      isAuthenticating: false,
      isLoggedIn: true,
      loginFailed: false
    }
    break;
    case 'SESSION_EXPIRED': return {
      ...state,
      isAuthenticating: false,
      isLoggedIn: false,
      loginFailed: true
    }
    break;
    case 'LOGGED_OUT': return {
      ...state,
      isAuthenticating: false,
      isLoggedIn: false,
      loginFailed: false
    }
    break;
    default: return state;

  }
}

export default Auth;