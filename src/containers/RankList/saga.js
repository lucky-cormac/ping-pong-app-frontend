import { call, fork, takeLatest } from 'redux-saga/effects';
import { pickBy, isNil } from 'lodash';
import { makeUrlQueryParams, makeJsonRequestOptions } from 'utils/request';
import appApiSaga from 'containers/App/saga';
import { FETCH_RANKS } from './constants';
import { fetchRanksSucceeded, fetchRanksFailed } from './actions';

/**
 * FETCH_RANKS saga
 */
export function* fetchRanks(action) {
  const urlQueryParams = makeUrlQueryParams(
    pickBy(action.payload, (value) => !isNil(value)),
  );
  const options = makeJsonRequestOptions({
    method: 'GET',
    requestUrlPath: `ranks${urlQueryParams}`,
  });

  yield call(appApiSaga, options, [fetchRanksSucceeded], fetchRanksFailed);
}

export function* fetchRanksWatcher() {
  yield takeLatest(FETCH_RANKS, fetchRanks);
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* rankListMainSaga() {
  yield fork(fetchRanksWatcher);
}
