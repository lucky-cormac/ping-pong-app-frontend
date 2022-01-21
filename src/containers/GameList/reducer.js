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

export const initialState = {
  needRefresh: false,
  games: {
    loading: undefined,
    error: undefined,
    data: undefined,
    total: 0,
  },
};

function gameListReducer(state = initialState, action) {
  const { error, deletedId, deletedIds, result = {} } = action.payload || {};
  let newData = null;
  let newTotal = null;

  switch (action.type) {
    case FETCH_GAMES:
      return {
        ...state,
        games: {
          loading: true,
          error: false,
          data: [],
          total: 0,
        },
      };
    case FETCH_GAMES_SUCCESS:
      return {
        needRefresh: false,
        games: {
          loading: false,
          error: false,
          data: result.games,
          total: result.total,
        },
      };
    case FETCH_GAMES_ERROR:
      return {
        needRefresh: false,
        games: {
          loading: false,
          error,
          data: [],
          total: 0,
        },
      };
    case DELETE_GAME:
      return {
        ...state,
        games: {
          ...state.games,
          loading: true,
          error: false,
        },
      };
    case DELETE_GAME_SUCCESS:
      newData = state.games.data.filter((item) => item._id !== deletedId);
      newTotal = state.games.total - 1;

      return {
        needRefresh: true,
        games: {
          loading: false,
          error: false,
          data: newData,
          total: newTotal,
        },
      };
    case DELETE_GAME_ERROR:
      return {
        needRefresh: true,
        games: {
          ...state.games,
          loading: false,
          error,
        },
      };
    case DELETE_GAMES:
      return {
        ...state,
        games: {
          ...state.games,
          loading: true,
          error: false,
        },
      };
    case DELETE_GAMES_SUCCESS:
      newData = state.games.data.filter(
        (item) => deletedIds.includes(item._id) === false,
      );
      newTotal = state.games.total - deletedIds.length;

      return {
        needRefresh: true,
        games: {
          loading: false,
          error: false,
          data: newData,
          total: newTotal,
        },
      };
    case DELETE_GAMES_ERROR:
      return {
        needRefresh: true,
        games: {
          ...state.games,
          loading: false,
          error,
        },
      };
    default:
      return state;
  }
}

export default gameListReducer;
