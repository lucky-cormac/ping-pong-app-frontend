import { combineReducers } from 'redux';
import { createRouterReducer } from '@lagunovsky/redux-react-router';
import { reducer as toastrReducer } from 'react-redux-toastr';
import appReducer from './containers/App/reducer';
import playerListReducer from './containers/PlayerList/reducer';
import playerReducer from './containers/Player/reducer';
import gameListReducer from './containers/GameList/reducer';
import gameReducer from './containers/Game/reducer';
import rankListReducer from './containers/RankList/reducer';

export default function createRootReducer(history) {
  return combineReducers({
    router: createRouterReducer(history),
    toastr: toastrReducer,
    global: appReducer,
    playerList: playerListReducer,
    player: playerReducer,
    gameList: gameListReducer,
    game: gameReducer,
    rankList: rankListReducer,
  });
}
