import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import EntityTable, { ENTITY_TYPES } from 'components/EntityTable';
import { fetchRanks } from './actions';
import { columns } from './constants';

const RankList = () => {
  const dispatch = useDispatch();
  const { error, data, total } = useSelector((state) => state.rankList.ranks);
  const needRefresh = useSelector((state) => state.rankList.needRefresh);
  const fetchRankList = useCallback(
    (payload) => dispatch(fetchRanks(payload)),
    [dispatch],
  );

  const dataSource = data || [];

  return (
    <Box my={5} mx={4}>
      {error && <Alert severity="error">{error.message}</Alert>}
      <EntityTable
        entityType={ENTITY_TYPES.RANK}
        columns={columns}
        showAction={false}
        dataSource={dataSource}
        needRefresh={needRefresh}
        totalCount={total}
        fetchData={fetchRankList}
        deleteSelectedEntity={() => null}
        deleteSelectedEntities={() => null}
      />
    </Box>
  );
};

export default RankList;
