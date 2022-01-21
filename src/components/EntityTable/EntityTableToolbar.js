import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import {
  ENTITY_TABLE_TITLE_MAP,
  ENTITY_TABLE_ADD_LABEL_MAP,
  ENTITY_TABLE_DELETE_LABEL_MAP,
} from './constants';
import { getCreateEntityRoute } from './helpers';
import { toolbarStyles } from './styles';

const EntityTableToolbar = ({
  showAction,
  entityType,
  selectedIds,
  deleteSelectedEntities,
}) => (
  <Box py={2}>
    <Toolbar>
      <Box sx={toolbarStyles.title}>
        <Typography variant="h6" id="tableTitle">
          {ENTITY_TABLE_TITLE_MAP[entityType]}
        </Typography>
        {selectedIds.length > 0 && (
          <Typography color="inherit" variant="subtitle1">
            {selectedIds.length} selected
          </Typography>
        )}
      </Box>
      <Box sx={toolbarStyles.spacer} />
      {showAction && (
        <Box sx={toolbarStyles.actions}>
          {selectedIds.length > 0 ? (
            <Button
              color="secondary"
              variant="contained"
              aria-label="Add"
              onClick={() => deleteSelectedEntities({ selectedIds })}
            >
              {ENTITY_TABLE_DELETE_LABEL_MAP[entityType]}
            </Button>
          ) : (
            <Tooltip title="Add">
              <Link
                to={getCreateEntityRoute(entityType)}
                style={{ textDecoration: 'none' }}
              >
                <Button color="primary" variant="contained" aria-label="Add">
                  {ENTITY_TABLE_ADD_LABEL_MAP[entityType]}
                </Button>
              </Link>
            </Tooltip>
          )}
        </Box>
      )}
    </Toolbar>
  </Box>
);

EntityTableToolbar.propTypes = {
  showAction: PropTypes.bool,
  entityType: PropTypes.string.isRequired,
  selectedIds: PropTypes.array.isRequired,
  deleteSelectedEntities: PropTypes.func.isRequired,
};

export default EntityTableToolbar;
