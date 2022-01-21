import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from 'components/AppBar';
import Routes from './Routes';
import { logout } from './actions';

const theme = createTheme({});

const App = () => {
  const dispatch = useDispatch();
  const logoutUser = useCallback(() => dispatch(logout()), [dispatch]);
  const isAuthenticated = useSelector((state) => state.global.isAuthenticated);
  const currentUser = useSelector((state) => state.global.currentUser);
  const { data: currentUserData } = currentUser;

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Helmet>
          <meta name="description" content="Ping-pong App" />
          <title>Ping-pong App</title>
        </Helmet>
        <AppBar
          isAuthenticated={isAuthenticated}
          currentUserData={currentUserData}
          logout={logoutUser}
        />
        <Routes isAuthenticated={isAuthenticated} />
      </div>
    </ThemeProvider>
  );
};

export default withRouter(App);
