import { toastr } from 'react-redux-toastr';
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

/**
 * Register
 */
export function register(payload) {
  return {
    type: REGISTER,
    payload,
  };
}

export function registerSucceeded(payload) {
  toastr.success('Register', 'User registered successfully.');

  return {
    type: REGISTER_SUCCESS,
    payload,
  };
}

export function registerFailed(error) {
  toastr.error('Register', error.message);

  return {
    type: REGISTER_ERROR,
    payload: { error },
  };
}

/**
 * Login
 */
export function login(payload) {
  return {
    type: LOGIN,
    payload,
  };
}

export function loginSucceeded(payload) {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
}

export function loginFailed(error) {
  toastr.error('Login', error.message);

  return {
    type: LOGIN_ERROR,
    payload: { error },
  };
}

/**
 * Logout
 */
export function logout() {
  return {
    type: LOGOUT,
    payload: {},
  };
}

/**
 * Auth Token Error
 */
export function authTokenFailed() {
  return {
    type: AUTH_TOKEN_ERROR,
    payload: {},
  };
}
