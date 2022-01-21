import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import PlayerForm, { FORM_MODE } from 'components/PlayerForm';
import Spinner from 'components/Spinner';
import { FORM_TITLE_MAP } from './constants';
import { fetchPlayer, createPlayer, updatePlayer } from './actions';

const Player = ({ mode }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const player = useSelector((state) => state.player.player);
  const fetchSelectedPlayer = useCallback(
    (payload) => dispatch(fetchPlayer(payload)),
    [dispatch],
  );
  const createNewPlayer = useCallback(
    (payload) => dispatch(createPlayer(payload)),
    [dispatch],
  );
  const updateSelectedPlayer = useCallback(
    (payload) => dispatch(updatePlayer(payload)),
    [dispatch],
  );

  useEffect(() => {
    if (mode === FORM_MODE.EDIT) {
      fetchSelectedPlayer({ _id: params.id });
    }
  }, []); // eslint-disable-line

  let content = null;
  const onSubmit =
    mode === FORM_MODE.EDIT ? updateSelectedPlayer : createNewPlayer;

  const formTitle = FORM_TITLE_MAP[mode];

  if (mode === FORM_MODE.EDIT && !player.data) {
    if (player.error) {
      content = <Alert severity="error">{player.error.message}</Alert>;
    } else {
      content = <Spinner />;
    }
  } else {
    content = (
      <>
        <Box component={Link} to="/players" sx={{ textDecoration: 'none' }}>
          <Typography component="span" variant="subtitle1">
            &lt; Back
          </Typography>
        </Box>
        <Box mt={2}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <PlayerForm
                title={formTitle}
                mode={mode}
                player={player}
                onSubmit={onSubmit}
              />
            </Grid>
          </Grid>
        </Box>
      </>
    );
  }

  return (
    <Box width={540} my={5} mx="auto">
      {content}
    </Box>
  );
};

Player.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default Player;
