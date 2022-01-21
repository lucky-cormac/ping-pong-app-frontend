import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import EntityTable, { ENTITY_TYPES } from 'components/EntityTable';
import { fetchPlayers, deletePlayer, deletePlayers } from './actions';
import { columns } from './constants';

const PlayerList = () => {
  const dispatch = useDispatch();
  const { error, data, total } = useSelector(
    (state) => state.playerList.players,
  );
  const needRefresh = useSelector((state) => state.playerList.needRefresh);
  const fetchPlayerList = useCallback(
    (payload) => dispatch(fetchPlayers(payload)),
    [dispatch],
  );
  const deleteSelectedPlayer = useCallback(
    (payload) => dispatch(deletePlayer(payload)),
    [dispatch],
  );
  const deleteSelectedPlayers = useCallback(
    (payload) => dispatch(deletePlayers(payload)),
    [dispatch],
  );

  const dataSource = data || [];

  return (
    <Box my={5} mx={4}>
      {error && <Alert severity="error">{error.message}</Alert>}
      <EntityTable
        entityType={ENTITY_TYPES.PLAYER}
        sortable
        columns={columns}
        showAction
        dataSource={dataSource}
        needRefresh={needRefresh}
        totalCount={total}
        fetchData={fetchPlayerList}
        deleteSelectedEntity={deleteSelectedPlayer}
        deleteSelectedEntities={deleteSelectedPlayers}
      />
    </Box>
  );
};

export default PlayerList;
