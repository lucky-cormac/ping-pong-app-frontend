import { call, fork, takeLatest } from 'redux-saga/effects';
import { makeJsonRequestOptions } from 'utils/request';
import appApiSaga from 'containers/App/saga';
import { FETCH_GAME, CREATE_GAME, UPDATE_GAME } from './constants';
import {
  fetchGameSucceeded,
  fetchGameFailed,
  createGameSucceeded,
  createGameFailed,
  updateGameSucceeded,
  updateGameFailed,
} from './actions';

/**
 * FETCH_GAME saga
 */
export function* fetchGame(action) {
  const { _id } = action.payload;
  const options = makeJsonRequestOptions({
    method: 'GET',
    requestUrlPath: `games/${_id}`,
  });

  yield call(appApiSaga, options, [fetchGameSucceeded], fetchGameFailed);
}

export function* fetchGameWatcher() {
  yield takeLatest(FETCH_GAME, fetchGame);
}

/**
 * CREATE_GAME saga
 */
export function* createGame(action) {
  const options = makeJsonRequestOptions({
    method: 'POST',
    requestUrlPath: 'games',
    data: action.payload,
  });

  yield call(appApiSaga, options, [createGameSucceeded], createGameFailed);
}

export function* createGameWatcher() {
  yield takeLatest(CREATE_GAME, createGame);
}

/**
 * UPDATE_GAME saga
 */
export function* updateGame(action) {
  const { _id, ...data } = action.payload;
  const options = makeJsonRequestOptions({
    method: 'PUT',
    requestUrlPath: `games/${_id}`,
    data,
  });

  yield call(appApiSaga, options, [updateGameSucceeded], updateGameFailed);
}

export function* updateGameWatcher() {
  yield takeLatest(UPDATE_GAME, updateGame);
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* gameMainSaga() {
  yield fork(fetchGameWatcher);
  yield fork(createGameWatcher);
  yield fork(updateGameWatcher);
}
