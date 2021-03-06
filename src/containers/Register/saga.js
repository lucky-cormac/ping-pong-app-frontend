import { call, fork, takeLatest } from 'redux-saga/effects';
import { makeJsonRequestOptions } from 'utils/request';
import appApiSaga from 'containers/App/saga';
import { REGISTER } from 'containers/App/constants';
import { registerSucceeded, registerFailed } from 'containers/App/actions';

/**
 * REGISTER saga
 */
export function* register(action) {
  const options = makeJsonRequestOptions({
    method: 'POST',
    requestUrlPath: 'auth/register',
    data: action.payload,
  });

  yield call(appApiSaga, options, [registerSucceeded], registerFailed);
}

export function* registerWatcher() {
  yield takeLatest(REGISTER, register);
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* registerMainSaga() {
  yield fork(registerWatcher);
}
