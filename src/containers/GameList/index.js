import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import dayjs from 'dayjs';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import EntityTable, { ENTITY_TYPES } from 'components/EntityTable';
import { fetchGames, deleteGame, deleteGames } from './actions';
import { columns } from './constants';

const GameList = () => {
  const dispatch = useDispatch();
  const { error, data, total } = useSelector((state) => state.gameList.games);
  const needRefresh = useSelector((state) => state.gameList.needRefresh);
  const fetchGameList = useCallback(
    (payload) => dispatch(fetchGames(payload)),
    [dispatch],
  );
  const deleteSelectedGame = useCallback(
    (payload) => dispatch(deleteGame(payload)),
    [dispatch],
  );
  const deleteSelectedGames = useCallback(
    (payload) => dispatch(deleteGames(payload)),
    [dispatch],
  );

  const dataSource = (data || []).map((gameData) => ({
    _id: gameData._id,
    players: `${gameData.player1.firstName} ${gameData.player1.lastName} : ${gameData.player2.firstName} ${gameData.player2.lastName}`,
    scores: `${gameData.player1Score} : ${gameData.player2Score}`,
    gameAt: dayjs(gameData.gameAt).format('DD/MM/YYYY HH:mm:ss'),
  }));

  return (
    <Box my={5} mx={4}>
      {error && <Alert severity="error">{error.message}</Alert>}
      <EntityTable
        entityType={ENTITY_TYPES.GAME}
        columns={columns}
        showAction
        dataSource={dataSource}
        needRefresh={needRefresh}
        totalCount={total}
        fetchData={fetchGameList}
        deleteSelectedEntity={deleteSelectedGame}
        deleteSelectedEntities={deleteSelectedGames}
      />
    </Box>
  );
};

export default GameList;
