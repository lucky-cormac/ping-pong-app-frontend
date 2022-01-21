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

const initialState = {
  game: {
    loading: undefined,
    error: undefined,
    data: undefined,
  },
};

function gameReducer(state = initialState, action) {
  const { error, game } = action.payload || {};

  switch (action.type) {
    case FETCH_GAME:
    case CREATE_GAME:
      return {
        ...state,
        game: {
          loading: true,
          error: false,
          data: false,
        },
      };
    case UPDATE_GAME:
      return {
        ...state,
        game: {
          ...state.game,
          loading: true,
          error: false,
        },
      };
    case FETCH_GAME_SUCCESS:
    case CREATE_GAME_SUCCESS:
    case UPDATE_GAME_SUCCESS:
      return {
        ...state,
        game: {
          loading: false,
          error: false,
          data: game,
        },
      };
    case FETCH_GAME_ERROR:
    case CREATE_GAME_ERROR:
      return {
        ...state,
        game: {
          loading: false,
          error,
          data: false,
        },
      };
    case UPDATE_GAME_ERROR:
      return {
        ...state,
        game: {
          ...state.game,
          loading: false,
          error,
        },
      };
    default:
      return state;
  }
}

export default gameReducer;
