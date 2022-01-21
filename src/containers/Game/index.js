import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import GameForm, { FORM_MODE } from 'components/GameForm';
import Spinner from 'components/Spinner';
import { FORM_TITLE_MAP } from './constants';
import { fetchGame, createGame, updateGame } from './actions';
import { fetchPlayers } from 'containers/PlayerList/actions';

const Game = ({ mode }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const players = useSelector((state) => state.playerList.players);
  const game = useSelector((state) => state.game.game);
  const fetchPlayerList = useCallback(
    (payload) => dispatch(fetchPlayers(payload)),
    [dispatch],
  );
  const fetchSelectedGame = useCallback(
    (payload) => dispatch(fetchGame(payload)),
    [dispatch],
  );
  const createNewGame = useCallback(
    (payload) => dispatch(createGame(payload)),
    [dispatch],
  );
  const updateSelectedGame = useCallback(
    (payload) => dispatch(updateGame(payload)),
    [dispatch],
  );

  useEffect(() => {
    fetchPlayerList();
    if (mode === FORM_MODE.EDIT) {
      fetchSelectedGame({ _id: params.id });
    }
  }, []); // eslint-disable-line

  let content = null;
  const onSubmit = mode === FORM_MODE.EDIT ? updateSelectedGame : createNewGame;

  const formTitle = FORM_TITLE_MAP[mode];

  if (mode === FORM_MODE.EDIT && !game.data) {
    if (game.error) {
      content = <Alert severity="error">{game.error.message}</Alert>;
    } else {
      content = <Spinner />;
    }
  } else {
    content = (
      <>
        <Box component={Link} to="/games" sx={{ textDecoration: 'none' }}>
          <Typography component="span" variant="subtitle1">
            &lt; Back
          </Typography>
        </Box>
        <Box mt={2}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <GameForm
                title={formTitle}
                mode={mode}
                game={game}
                players={players}
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

Game.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default Game;
