import { FORM_MODE as PLAYER_FORM_MODE } from 'components/PlayerForm';
import Register from 'containers/Register';
import Login from 'containers/Login';
import PlayerList from 'containers/PlayerList';
import Player from 'containers/Player';
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
    component: NotFound,
  },
];
