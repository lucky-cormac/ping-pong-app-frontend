import { call, fork, takeLatest } from 'redux-saga/effects';
import { pickBy, isNil } from 'lodash';
import { makeUrlQueryParams, makeJsonRequestOptions } from 'utils/request';
import appApiSaga from 'containers/App/saga';
import { FETCH_PLAYERS, DELETE_PLAYER, DELETE_PLAYERS } from './constants';
import {
  fetchPlayersSucceeded,
  fetchPlayersFailed,
  deletePlayerSucceeded,
  deletePlayerFailed,
  deletePlayersSucceeded,
  deletePlayersFailed,
} from './actions';

/**
 * FETCH_PLAYERS saga
 */
export function* fetchPlayers(action) {
  const urlQueryParams = makeUrlQueryParams(
    pickBy(action.payload, (value) => !isNil(value)),
  );
  const options = makeJsonRequestOptions({
    method: 'GET',
    requestUrlPath: `players${urlQueryParams}`,
  });

  yield call(appApiSaga, options, [fetchPlayersSucceeded], fetchPlayersFailed);
}

export function* fetchPlayersWatcher() {
  yield takeLatest(FETCH_PLAYERS, fetchPlayers);
}

/**
 * DELETE_PLAYER saga
 */
export function* deletePlayer(action) {
  const { _id } = action.payload;
  const options = makeJsonRequestOptions({
    method: 'DELETE',
    requestUrlPath: `players/${_id}`,
  });

  yield call(appApiSaga, options, [deletePlayerSucceeded], deletePlayerFailed);
}

export function* deletePlayerWatcher() {
  yield takeLatest(DELETE_PLAYER, deletePlayer);
}

/**
 * DELETE_PLAYERS saga
 */
export function* deletePlayers(action) {
  const options = makeJsonRequestOptions({
    method: 'POST',
    requestUrlPath: `players/deleteBatch`,
    data: action.payload,
  });

  yield call(
    appApiSaga,
    options,
    [deletePlayersSucceeded],
    deletePlayersFailed,
  );
}

export function* deletePlayersWatcher() {
  yield takeLatest(DELETE_PLAYERS, deletePlayers);
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* playerListMainSaga() {
  yield fork(fetchPlayersWatcher);
  yield fork(deletePlayerWatcher);
  yield fork(deletePlayersWatcher);
}
