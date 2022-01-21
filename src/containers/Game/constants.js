import { FORM_MODE } from 'components/GameForm/constants';

export const FETCH_GAME = 'Game/FETCH_GAME';
export const FETCH_GAME_SUCCESS = 'Game/FETCH_GAME_SUCCESS';
export const FETCH_GAME_ERROR = 'Game/FETCH_GAME_ERROR';

export const CREATE_GAME = 'Game/CREATE_GAME';
export const CREATE_GAME_SUCCESS = 'Game/CREATE_GAME_SUCCESS';
export const CREATE_GAME_ERROR = 'Game/CREATE_GAME_ERROR';

export const UPDATE_GAME = 'Game/UPDATE_GAME';
export const UPDATE_GAME_SUCCESS = 'Game/UPDATE_GAME_SUCCESS';
export const UPDATE_GAME_ERROR = 'Game/UPDATE_GAME_ERROR';

export const FORM_TITLE_MAP = {
  [FORM_MODE.CREATE]: 'Create Game',
  [FORM_MODE.EDIT]: 'Edit Game',
};
