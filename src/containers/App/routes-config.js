import { FORM_MODE as PLAYER_FORM_MODE } from 'components/PlayerForm';
import { FORM_MODE as GAME_FORM_MODE } from 'components/GameForm';
import Register from 'containers/Register';
import Login from 'containers/Login';
import PlayerList from 'containers/PlayerList';
import Player from 'containers/Player';
import GameList from 'containers/GameList';
import Game from 'containers/Game';
import RankList from 'containers/RankList';
import NotFound from 'containers/NotFound';

export default [
  {
    exact: true,
    path: '/',
    redirectTo: '/login',
  },
  {
    controlled: true,
    path: '/register',
    redirectTo: '/players',
    component: Register,
    shouldNotBeAuthenticated: true,
  },
  {
    controlled: true,
    path: '/login',
    redirectTo: '/players',
    component: Login,
    shouldNotBeAuthenticated: true,
  },
  {
    controlled: true,
    exact: true,
    path: '/players',
    redirectTo: '/login',
    component: PlayerList,
    shouldBeAuthenticated: true,
  },
  {
    controlled: true,
    exact: true,
    path: '/players/new',
    mode: PLAYER_FORM_MODE.CREATE,
    redirectTo: '/login',
    component: Player,
    shouldBeAuthenticated: true,
  },
  {
    controlled: true,
    path: '/players/:id',
    mode: PLAYER_FORM_MODE.EDIT,
    redirectTo: '/login',
    component: Player,
    shouldBeAuthenticated: true,
  },
  {
    controlled: true,
    exact: true,
    path: '/games',
    redirectTo: '/login',
    component: GameList,
    shouldBeAuthenticated: true,
  },
  {
    controlled: true,
    exact: true,
    path: '/games/new',
    mode: GAME_FORM_MODE.CREATE,
    redirectTo: '/login',
    component: Game,
    shouldBeAuthenticated: true,
  },
  {
    controlled: true,
    path: '/games/:id',
    mode: GAME_FORM_MODE.EDIT,
    redirectTo: '/login',
    component: Game,
    shouldBeAuthenticated: true,
  },
  {
    controlled: true,
    exact: true,
    path: '/ranks',
    redirectTo: '/login',
    component: RankList,
    shouldBeAuthenticated: true,
  },
  {
    component: NotFound,
  },
];
