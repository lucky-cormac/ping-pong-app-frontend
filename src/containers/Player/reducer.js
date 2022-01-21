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

const initialState = {
  player: {
    loading: undefined,
    error: undefined,
    data: undefined,
  },
};

function playerReducer(state = initialState, action) {
  const { error, player } = action.payload || {};

  switch (action.type) {
    case FETCH_PLAYER:
    case CREATE_PLAYER:
      return {
        ...state,
        player: {
          loading: true,
          error: false,
          data: false,
        },
      };
    case UPDATE_PLAYER:
      return {
        ...state,
        player: {
          ...state.player,
          loading: true,
          error: false,
        },
      };
    case FETCH_PLAYER_SUCCESS:
    case CREATE_PLAYER_SUCCESS:
    case UPDATE_PLAYER_SUCCESS:
      return {
        ...state,
        player: {
          loading: false,
          error: false,
          data: player,
        },
      };
    case FETCH_PLAYER_ERROR:
    case CREATE_PLAYER_ERROR:
      return {
        ...state,
        player: {
          loading: false,
          error,
          data: false,
        },
      };
    case UPDATE_PLAYER_ERROR:
      return {
        ...state,
        player: {
          ...state.player,
          loading: false,
          error,
        },
      };
    default:
      return state;
  }
}

export default playerReducer;
