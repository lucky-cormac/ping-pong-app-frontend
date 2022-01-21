import { call, fork, takeLatest } from 'redux-saga/effects';
import { pickBy, isNil } from 'lodash';
import { makeUrlQueryParams, makeJsonRequestOptions } from 'utils/request';
import appApiSaga from 'containers/App/saga';
import { FETCH_GAMES, DELETE_GAME, DELETE_GAMES } from './constants';
import {
  fetchGamesSucceeded,
  fetchGamesFailed,
  deleteGameSucceeded,
  deleteGameFailed,
  deleteGamesSucceeded,
  deleteGamesFailed,
} from './actions';

/**
 * FETCH_GAMES saga
 */
export function* fetchGames(action) {
  const urlQueryParams = makeUrlQueryParams(
    pickBy(action.payload, (value) => !isNil(value)),
  );
  const options = makeJsonRequestOptions({
    method: 'GET',
    requestUrlPath: `games${urlQueryParams}`,
  });

  yield call(appApiSaga, options, [fetchGamesSucceeded], fetchGamesFailed);
}

export function* fetchGamesWatcher() {
  yield takeLatest(FETCH_GAMES, fetchGames);
}

/**
 * DELETE_GAME saga
 */
export function* deleteGame(action) {
  const { _id } = action.payload;
  const options = makeJsonRequestOptions({
    method: 'DELETE',
    requestUrlPath: `games/${_id}`,
  });

  yield call(appApiSaga, options, [deleteGameSucceeded], deleteGameFailed);
}

export function* deleteGameWatcher() {
  yield takeLatest(DELETE_GAME, deleteGame);
}

/**
 * DELETE_GAMES saga
 */
export function* deleteGames(action) {
  const options = makeJsonRequestOptions({
    method: 'POST',
    requestUrlPath: `games/deleteBatch`,
    data: action.payload,
  });

  yield call(appApiSaga, options, [deleteGamesSucceeded], deleteGamesFailed);
}

export function* deleteGamesWatcher() {
  yield takeLatest(DELETE_GAMES, deleteGames);
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* gameListMainSaga() {
  yield fork(fetchGamesWatcher);
  yield fork(deleteGameWatcher);
  yield fork(deleteGamesWatcher);
}
