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

export const initialState = {
  needRefresh: false,
  players: {
    loading: undefined,
    error: undefined,
    data: undefined,
    total: 0,
  },
};

function playerListReducer(state = initialState, action) {
  const { error, deletedId, deletedIds, result = {} } = action.payload || {};
  let newData = null;
  let newTotal = null;

  switch (action.type) {
    case FETCH_PLAYERS:
      return {
        ...state,
        players: {
          loading: true,
          error: false,
          data: [],
          total: 0,
        },
      };
    case FETCH_PLAYERS_SUCCESS:
      return {
        needRefresh: false,
        players: {
          loading: false,
          error: false,
          data: result.players,
          total: result.total,
        },
      };
    case FETCH_PLAYERS_ERROR:
      return {
        needRefresh: false,
        players: {
          loading: false,
          error,
          data: [],
          total: 0,
        },
      };
    case DELETE_PLAYER:
      return {
        ...state,
        players: {
          ...state.players,
          loading: true,
          error: false,
        },
      };
    case DELETE_PLAYER_SUCCESS:
      newData = state.players.data.filter((item) => item._id !== deletedId);
      newTotal = state.players.total - 1;

      return {
        needRefresh: true,
        players: {
          loading: false,
          error: false,
          data: newData,
          total: newTotal,
        },
      };
    case DELETE_PLAYER_ERROR:
      return {
        needRefresh: true,
        players: {
          ...state.players,
          loading: false,
          error,
        },
      };
    case DELETE_PLAYERS:
      return {
        ...state,
        players: {
          ...state.players,
          loading: true,
          error: false,
        },
      };
    case DELETE_PLAYERS_SUCCESS:
      newData = state.players.data.filter(
        (item) => deletedIds.includes(item._id) === false,
      );
      newTotal = state.players.total - deletedIds.length;

      return {
        needRefresh: true,
        players: {
          loading: false,
          error: false,
          data: newData,
          total: newTotal,
        },
      };
    case DELETE_PLAYERS_ERROR:
      return {
        needRefresh: true,
        players: {
          ...state.players,
          loading: false,
          error,
        },
      };
    default:
      return state;
  }
}

export default playerListReducer;
