import { toastr } from 'react-redux-toastr';
import {
  FETCH_RANKS,
  FETCH_RANKS_SUCCESS,
  FETCH_RANKS_ERROR,
} from './constants';

/**
 * Fetch ranks
 */
export function fetchRanks(payload) {
  return {
    type: FETCH_RANKS,
    payload,
  };
}

export function fetchRanksSucceeded(payload) {
  return {
    type: FETCH_RANKS_SUCCESS,
    payload,
  };
}

export function fetchRanksFailed(error) {
  toastr.error('Fetch Ranks', error.message);

  return {
    type: FETCH_RANKS_ERROR,
    payload: { error },
  };
}
