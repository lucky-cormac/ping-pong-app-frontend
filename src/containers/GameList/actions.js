import { toastr } from 'react-redux-toastr';
import {
  FETCH_GAMES,
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_ERROR,
  DELETE_GAME,
  DELETE_GAME_SUCCESS,
  DELETE_GAME_ERROR,
  DELETE_GAMES,
  DELETE_GAMES_SUCCESS,
  DELETE_GAMES_ERROR,
} from './constants';

/**
 * Fetch games
 */
export function fetchGames(payload) {
  return {
    type: FETCH_GAMES,
    payload,
  };
}

export function fetchGamesSucceeded(payload) {
  return {
    type: FETCH_GAMES_SUCCESS,
    payload,
  };
}

export function fetchGamesFailed(error) {
  toastr.error('Fetch Games', error.message);

  return {
    type: FETCH_GAMES_ERROR,
    payload: { error },
  };
}

/**
 * Delete game
 */
export function deleteGame(payload) {
  return {
    type: DELETE_GAME,
    payload,
  };
}

export function deleteGameSucceeded(payload) {
  toastr.success('Delete Game', 'Game deleted successfully.');

  return {
    type: DELETE_GAME_SUCCESS,
    payload,
  };
}

export function deleteGameFailed(error) {
  toastr.error('Delete Game', error.message);

  return {
    type: DELETE_GAME_ERROR,
    payload: { error },
  };
}

/**
 * Delete games
 */
export function deleteGames(payload) {
  return {
    type: DELETE_GAMES,
    payload,
  };
}

export function deleteGamesSucceeded(payload) {
  toastr.success('Delete Games', 'Game(s) deleted successfully.');

  return {
    type: DELETE_GAMES_SUCCESS,
    payload,
  };
}

export function deleteGamesFailed(error) {
  toastr.error('Delete Games', error.message);

  return {
    type: DELETE_GAMES_ERROR,
    payload: { error },
  };
}
