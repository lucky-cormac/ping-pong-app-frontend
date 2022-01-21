import { all } from 'redux-saga/effects';
import registerMainSaga from './containers/Register/saga';
import loginMainSaga from './containers/Login/saga';
import playerListMainSaga from './containers/PlayerList/saga';
import playerMainSaga from './containers/Player/saga';
import gameListMainSaga from './containers/GameList/saga';
import gameMainSaga from './containers/Game/saga';
import rankListMainSaga from './containers/RankList/saga';

export default function* rootSaga() {
  yield all([
    registerMainSaga(),
    loginMainSaga(),
    playerListMainSaga(),
    playerMainSaga(),
    gameListMainSaga(),
    gameMainSaga(),
    rankListMainSaga(),
  ]);
}
