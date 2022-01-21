import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import styles from './styles';

const TopAppBar = ({ isAuthenticated, currentUserData, logout }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleAccountMenuClick = (event) => setAnchorEl(event.currentTarget);
  const handleAccountMenuClose = () => setAnchorEl(null);
  const logoutUser = () => {
    handleAccountMenuClose();
    logout();
  };
  const getAuthenticatedMenuItems = () => {
    const { email } = currentUserData;
    const mainMenuItemsConfig = [
      {
        to: '/players',
        label: 'Players',
      },
      {
        to: '/games',
        label: 'Games',
      },
      {
        to: '/ranks',
        label: 'Ranks',
      },
    ];
    const mainMenuItems = mainMenuItemsConfig.map((itemConfig) => (
      <Box
        component={Link}
        key={itemConfig.to}
        to={itemConfig.to}
        sx={styles.menuItem}
      >
        <Typography variant="h6" color="inherit">
          {itemConfig.label}
        </Typography>
      </Box>
    ));
    const accountMenuItems = [
      <>
        <Box
          component={Button}
          aria-owns={anchorEl ? 'account-menu-items' : undefined}
          aria-haspopup="true"
          onClick={handleAccountMenuClick}
          sx={styles.menuButton}
        >
          <Box component="span" sx={styles.menuButtonEmail}>
            {email}
          </Box>
        </Box>
        <Menu
          id="account-menu-items"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleAccountMenuClose}
        >
          <MenuItem onClick={logoutUser}>Logout</MenuItem>
        </Menu>
      </>,
    ];

    return { mainMenuItems, accountMenuItems };
  };

  let mainMenuItems = [];
  let accountMenuItems = [
    <Box component={Link} key="register" to="/register" sx={styles.menuItem}>
      Register
    </Box>,
    <Box component={Link} key="login" to="/login" sx={styles.menuItem}>
      Login
    </Box>,
  ];

  if (isAuthenticated) {
    mainMenuItems = getAuthenticatedMenuItems().mainMenuItems;
    accountMenuItems = getAuthenticatedMenuItems().accountMenuItems;
  }

  return (
    <Box sx={styles.root}>
      <AppBar position="static">
        <Box component={Toolbar} sx={styles.toolbar}>
          <Box>
            <Box component={Link} to="/" sx={styles.brandText}>
              Ping-pong App
            </Box>
          </Box>
          <Box sx={styles.mainMenu}>{mainMenuItems}</Box>
          <Box>{accountMenuItems}</Box>
        </Box>
      </AppBar>
    </Box>
  );
};

TopAppBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  currentUserData: PropTypes.any,
  logout: PropTypes.func.isRequired,
};

TopAppBar.defaultProps = {
  currentUserData: null,
};

export default TopAppBar;
