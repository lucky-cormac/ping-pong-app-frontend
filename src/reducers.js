import { combineReducers } from 'redux';
import { createRouterReducer } from '@lagunovsky/redux-react-router';
import appReducer from './containers/App/reducer';
import playerListReducer from './containers/PlayerList/reducer';
import playerReducer from './containers/Player/reducer';

export default function createRootReducer(history) {
  return combineReducers({
    router: createRouterReducer(history),
    global: appReducer,
    playerList: playerListReducer,
    player: playerReducer,
  });
}
