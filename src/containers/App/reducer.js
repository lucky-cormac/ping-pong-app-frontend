import {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  AUTH_TOKEN_ERROR,
} from './constants';

import {
  getTokenInStorage,
  getUserInStorage,
  saveTokenInStorage,
  saveUserInStorage,
  deleteTokenInStorage,
  deleteUserInStorage,
} from 'utils/auth';

const initialState = {
  isAuthenticated: Boolean(getTokenInStorage()),
  currentUser: {
    loading: null,
    error: null,
    data: getUserInStorage(),
  },
};

function appReducer(state = initialState, action) {
  const { error, token, user } = action.payload || {};

  switch (action.type) {
    case AUTH_TOKEN_ERROR:
    case LOGOUT:
      deleteTokenInStorage();
      deleteUserInStorage();

      return {
        ...state,
        isAuthenticated: false,
        currentUser: {
          loading: null,
          error: null,
          data: null,
        },
      };
    case REGISTER:
    case LOGIN:
      return {
        ...state,
        isAuthenticated: false,
        currentUser: {
          loading: true,
          error: false,
          data: false,
        },
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      saveTokenInStorage(token);
      saveUserInStorage(user);

      return {
        ...state,
        isAuthenticated: true,
        currentUser: {
          loading: false,
          error: false,
          data: user,
        },
      };
    case REGISTER_ERROR:
    case LOGIN_ERROR:
      deleteTokenInStorage();
      deleteUserInStorage();

      return {
        ...state,
        isAuthenticated: false,
        currentUser: {
          loading: false,
          error,
          data: false,
        },
      };
    default:
      return state;
  }
}

export default appReducer;
