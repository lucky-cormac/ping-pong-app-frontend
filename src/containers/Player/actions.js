import { toastr } from 'react-redux-toastr';
import {
  FETCH_PLAYER,
  FETCH_PLAYER_SUCCESS,
  FETCH_PLAYER_ERROR,
  CREATE_PLAYER,
  CREATE_PLAYER_SUCCESS,
  CREATE_PLAYER_ERROR,
  UPDATE_PLAYER,
  UPDATE_PLAYER_SUCCESS,
  UPDATE_PLAYER_ERROR,
} from './constants';

/**
 * Fetch player
 */
export function fetchPlayer(payload) {
  return {
    type: FETCH_PLAYER,
    payload,
  };
}

export function fetchPlayerSucceeded(payload) {
  return {
    type: FETCH_PLAYER_SUCCESS,
    payload,
  };
}

export function fetchPlayerFailed(error) {
  toastr.error('Fetch Player', error.message);

  return {
    type: FETCH_PLAYER_ERROR,
    payload: { error },
  };
}

/**
 * Create player
 */
export function createPlayer(payload) {
  return {
    type: CREATE_PLAYER,
    payload,
  };
}

export function createPlayerSucceeded(payload) {
  toastr.success('Create Player', 'Player created successfully.');

  return {
    type: CREATE_PLAYER_SUCCESS,
    payload,
  };
}

export function createPlayerFailed(error) {
  toastr.error('Create Player', error.message);

  return {
    type: CREATE_PLAYER_ERROR,
    payload: { error },
  };
}

/**
 * Update player
 */
export function updatePlayer(payload) {
  return {
    type: UPDATE_PLAYER,
    payload,
  };
}

export function updatePlayerSucceeded(payload) {
  toastr.success('Update Player', 'Player updated successfully.');

  return {
    type: UPDATE_PLAYER_SUCCESS,
    payload,
  };
}

export function updatePlayerFailed(error) {
  toastr.error('Update Player', error.message);

  return {
    type: UPDATE_PLAYER_ERROR,
    payload: { error },
  };
}
