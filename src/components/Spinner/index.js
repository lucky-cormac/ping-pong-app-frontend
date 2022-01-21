import React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const Spinner = () => (
  <Box component={CircularProgress} m={2} size={20} disableShrink />
);

export default Spinner;
