import { call, fork, takeLatest } from 'redux-saga/effects';
import { makeJsonRequestOptions } from 'utils/request';
import appApiSaga from 'containers/App/saga';
import { FETCH_PLAYER, CREATE_PLAYER, UPDATE_PLAYER } from './constants';
import {
  fetchPlayerSucceeded,
  fetchPlayerFailed,
  createPlayerSucceeded,
  createPlayerFailed,
  updatePlayerSucceeded,
  updatePlayerFailed,
} from './actions';

/**
 * FETCH_PLAYER saga
 */
export function* fetchPlayer(action) {
  const { _id } = action.payload;
  const options = makeJsonRequestOptions({
    method: 'GET',
    requestUrlPath: `players/${_id}`,
  });

  yield call(appApiSaga, options, [fetchPlayerSucceeded], fetchPlayerFailed);
}

export function* fetchPlayerWatcher() {
  yield takeLatest(FETCH_PLAYER, fetchPlayer);
}

/**
 * CREATE_PLAYER saga
 */
export function* createPlayer(action) {
  const options = makeJsonRequestOptions({
    method: 'POST',
    requestUrlPath: 'players',
    data: action.payload,
  });

  yield call(appApiSaga, options, [createPlayerSucceeded], createPlayerFailed);
}

export function* createPlayerWatcher() {
  yield takeLatest(CREATE_PLAYER, createPlayer);
}

/**
 * UPDATE_PLAYER saga
 */
export function* updatePlayer(action) {
  const { _id, ...data } = action.payload;
  const options = makeJsonRequestOptions({
    method: 'PUT',
    requestUrlPath: `players/${_id}`,
    data,
  });

  yield call(appApiSaga, options, [updatePlayerSucceeded], updatePlayerFailed);
}

export function* updatePlayerWatcher() {
  yield takeLatest(UPDATE_PLAYER, updatePlayer);
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* playerMainSaga() {
  yield fork(fetchPlayerWatcher);
  yield fork(createPlayerWatcher);
  yield fork(updatePlayerWatcher);
}
