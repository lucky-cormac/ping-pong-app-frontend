export const FETCH_GAMES = 'GameList/FETCH_GAMES';
export const FETCH_GAMES_SUCCESS = 'GameList/FETCH_GAMES_SUCCESS';
export const FETCH_GAMES_ERROR = 'GameList/FETCH_GAMES_ERROR';

export const DELETE_GAME = 'GameList/DELETE_GAME';
export const DELETE_GAME_SUCCESS = 'GameList/DELETE_GAME_SUCCESS';
export const DELETE_GAME_ERROR = 'GameList/DELETE_GAME_ERROR';

export const DELETE_GAMES = 'GameList/DELETE_GAMES';
export const DELETE_GAMES_SUCCESS = 'GameList/DELETE_GAMES_SUCCESS';
export const DELETE_GAMES_ERROR = 'GameList/DELETE_GAMES_ERROR';

export const columns = [
  {
    id: 'players',
    numeric: false,
    disablePadding: false,
    label: 'Players',
  },
  {
    id: 'scores',
    numeric: false,
    disablePadding: false,
    label: 'Scores',
  },
  {
    id: 'gameAt',
    numeric: false,
    disablePadding: false,
    label: 'Date Time',
  },
];
