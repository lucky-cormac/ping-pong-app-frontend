import {
  FETCH_PLAYERS,
  FETCH_PLAYERS_SUCCESS,
  FETCH_PLAYERS_ERROR,
  DELETE_PLAYER,
  DELETE_PLAYER_SUCCESS,
  DELETE_PLAYER_ERROR,
  DELETE_PLAYERS,
  DELETE_PLAYERS_SUCCESS,
  DELETE_PLAYERS_ERROR,
} from './constants';

/**
 * Fetch players
 */
export function fetchPlayers(payload) {
  return {
    type: FETCH_PLAYERS,
    payload,
  };
}

export function fetchPlayersSucceeded(payload) {
  return {
    type: FETCH_PLAYERS_SUCCESS,
    payload,
  };
}

export function fetchPlayersFailed(error) {
  console.error('Fetch Players: ' + error.message);

  return {
    type: FETCH_PLAYERS_ERROR,
    payload: { error },
  };
}

/**
 * Delete player
 */
export function deletePlayer(payload) {
  return {
    type: DELETE_PLAYER,
    payload,
  };
}

export function deletePlayerSucceeded(payload) {
  console.log('Delete Player: Player deleted successfully.');

  return {
    type: DELETE_PLAYER_SUCCESS,
    payload,
  };
}

export function deletePlayerFailed(error) {
  console.error('Delete Player: ' + error.message);

  return {
    type: DELETE_PLAYER_ERROR,
    payload: { error },
  };
}

/**
 * Delete players
 */
export function deletePlayers(payload) {
  return {
    type: DELETE_PLAYERS,
    payload,
  };
}

export function deletePlayersSucceeded(payload) {
  console.log('Delete Players: Player(s) deleted successfully.');

  return {
    type: DELETE_PLAYERS_SUCCESS,
    payload,
  };
}

export function deletePlayersFailed(error) {
  console.error('Delete Players: ' + error.message);

  return {
    type: DELETE_PLAYERS_ERROR,
    payload: { error },
  };
}
