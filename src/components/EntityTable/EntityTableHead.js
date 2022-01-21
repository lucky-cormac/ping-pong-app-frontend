import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Checkbox from '@mui/material/Checkbox';
import Tooltip from '@mui/material/Tooltip';

const EntityTableHead = ({
  columns,
  showAction,
  numSelected,
  order,
  orderBy,
  onSelectAllClick,
  onRequestSort,
  rowCount,
}) => {
  const createSortHandler = (property) => (event) =>
    onRequestSort(event, property);

  return (
    <TableHead>
      <TableRow>
        {showAction && (
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
            />
          </TableCell>
        )}
        {columns.map((column) => (
          <TableCell
            key={column.id}
            align={column.numeric ? 'right' : 'left'}
            padding={column.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === column.id ? order : false}
          >
            <Tooltip
              title="Sort"
              placement={column.numeric ? 'bottom-end' : 'bottom-start'}
              enterDelay={300}
            >
              <TableSortLabel
                active={orderBy === column.id}
                direction={order}
                onClick={createSortHandler(column.id)}
              >
                {column.label}
              </TableSortLabel>
            </Tooltip>
          </TableCell>
        ))}
        <TableCell padding="default" />
      </TableRow>
    </TableHead>
  );
};

EntityTableHead.propTypes = {
  columns: PropTypes.array.isRequired,
  showAction: PropTypes.bool,
  numSelected: PropTypes.number.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default EntityTableHead;
