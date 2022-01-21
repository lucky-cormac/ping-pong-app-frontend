import HttpStatus from 'http-status';
import { put, call } from 'redux-saga/effects';
import { authTokenFailed } from './actions';
import { getAuthHeader } from 'utils/auth';
import request from 'utils/request';

/**
 * Base saga
 */
export default function* appApiSaga(options, successHandlers, errorHandler) {
  try {
    options.headers = {
      ...options.headers,
      ...getAuthHeader(),
    };
    const response = yield call(request, options);
    for (let i = 0; i < successHandlers.length; i++) {
      yield put(successHandlers[i](response.data));
    }
  } catch (err) {
    const { response: errResponse } = err;

    if (errResponse && errResponse.status === HttpStatus.UNAUTHORIZED) {
      yield put(authTokenFailed());
    }
    if (errResponse) {
      yield put(errorHandler(errResponse.data));
    } else {
      yield put(errorHandler(new Error('Unknown Error')));
    }
  }
}
