import { toastr } from 'react-redux-toastr';
import {
  FETCH_GAME,
  FETCH_GAME_SUCCESS,
  FETCH_GAME_ERROR,
  CREATE_GAME,
  CREATE_GAME_SUCCESS,
  CREATE_GAME_ERROR,
  UPDATE_GAME,
  UPDATE_GAME_SUCCESS,
  UPDATE_GAME_ERROR,
} from './constants';

/**
 * Fetch game
 */
export function fetchGame(payload) {
  return {
    type: FETCH_GAME,
    payload,
  };
}

export function fetchGameSucceeded(payload) {
  return {
    type: FETCH_GAME_SUCCESS,
    payload,
  };
}

export function fetchGameFailed(error) {
  toastr.error('Fetch Game', error.message);

  return {
    type: FETCH_GAME_ERROR,
    payload: { error },
  };
}

/**
 * Create game
 */
export function createGame(payload) {
  return {
    type: CREATE_GAME,
    payload,
  };
}

export function createGameSucceeded(payload) {
  toastr.success('Create Game', 'Game created successfully.');

  return {
    type: CREATE_GAME_SUCCESS,
    payload,
  };
}

export function createGameFailed(error) {
  toastr.error('Create Game', error.message);

  return {
    type: CREATE_GAME_ERROR,
    payload: { error },
  };
}

/**
 * Update game
 */
export function updateGame(payload) {
  return {
    type: UPDATE_GAME,
    payload,
  };
}

export function updateGameSucceeded(payload) {
  toastr.success('Update Game', 'Game updated successfully.');

  return {
    type: UPDATE_GAME_SUCCESS,
    payload,
  };
}

export function updateGameFailed(error) {
  toastr.error('Update Game', error.message);

  return {
    type: UPDATE_GAME_ERROR,
    payload: { error },
  };
}
