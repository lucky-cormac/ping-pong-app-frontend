export const FETCH_PLAYERS = 'PlayerList/FETCH_PLAYERS';
export const FETCH_PLAYERS_SUCCESS = 'PlayerList/FETCH_PLAYERS_SUCCESS';
export const FETCH_PLAYERS_ERROR = 'PlayerList/FETCH_PLAYERS_ERROR';

export const DELETE_PLAYER = 'PlayerList/DELETE_PLAYER';
export const DELETE_PLAYER_SUCCESS = 'PlayerList/DELETE_PLAYER_SUCCESS';
export const DELETE_PLAYER_ERROR = 'PlayerList/DELETE_PLAYER_ERROR';

export const DELETE_PLAYERS = 'PlayerList/DELETE_PLAYERS';
export const DELETE_PLAYERS_SUCCESS = 'PlayerList/DELETE_PLAYERS_SUCCESS';
export const DELETE_PLAYERS_ERROR = 'PlayerList/DELETE_PLAYERS_ERROR';

export const columns = [
  {
    id: 'firstName',
    numeric: false,
    disablePadding: false,
    label: 'First Name',
  },
  {
    id: 'lastName',
    numeric: false,
    disablePadding: false,
    label: 'Last Name',
  },
  {
    id: 'age',
    numeric: true,
    disablePadding: false,
    label: 'Age',
  },
];
