import { FORM_MODE } from 'components/PlayerForm/constants';

export const FETCH_PLAYER = 'Player/FETCH_PLAYER';
export const FETCH_PLAYER_SUCCESS = 'Player/FETCH_PLAYER_SUCCESS';
export const FETCH_PLAYER_ERROR = 'Player/FETCH_PLAYER_ERROR';

export const CREATE_PLAYER = 'Player/CREATE_PLAYER';
export const CREATE_PLAYER_SUCCESS = 'Player/CREATE_PLAYER_SUCCESS';
export const CREATE_PLAYER_ERROR = 'Player/CREATE_PLAYER_ERROR';

export const UPDATE_PLAYER = 'Player/UPDATE_PLAYER';
export const UPDATE_PLAYER_SUCCESS = 'Player/UPDATE_PLAYER_SUCCESS';
export const UPDATE_PLAYER_ERROR = 'Player/UPDATE_PLAYER_ERROR';

export const FORM_TITLE_MAP = {
  [FORM_MODE.CREATE]: 'Create Player',
  [FORM_MODE.EDIT]: 'Edit Player',
};
