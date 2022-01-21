import {
  FETCH_RANKS,
  FETCH_RANKS_SUCCESS,
  FETCH_RANKS_ERROR,
} from './constants';

export const initialState = {
  needRefresh: false,
  ranks: {
    loading: undefined,
    error: undefined,
    data: undefined,
    total: 0,
  },
};

function rankListReducer(state = initialState, action) {
  const { error, result = {} } = action.payload || {};

  switch (action.type) {
    case FETCH_RANKS:
      return {
        ...state,
        ranks: {
          loading: true,
          error: false,
          data: [],
          total: 0,
        },
      };
    case FETCH_RANKS_SUCCESS:
      return {
        needRefresh: false,
        ranks: {
          loading: false,
          error: false,
          data: result.ranks,
          total: result.total,
        },
      };
    case FETCH_RANKS_ERROR:
      return {
        needRefresh: false,
        ranks: {
          loading: false,
          error,
          data: [],
          total: 0,
        },
      };
    default:
      return state;
  }
}

export default rankListReducer;
