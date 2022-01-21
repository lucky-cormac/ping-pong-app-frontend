import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import EntityTableToolbar from './EntityTableToolbar';
import EntityTableHead from './EntityTableHead';
import {
  INITIAL_ORDER,
  INITIAL_PAGE,
  INITIAL_ROWS_PER_PAGE,
  ROWS_PER_PAGE_OPTIONS,
} from './constants';
import { cellAlignment, getEditEntityRoute } from './helpers';
import { tableStyles } from './styles';

export * from './constants';

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const EntityTable = ({
  entityType,
  columns,
  showAction,
  dataSource,
  needRefresh,
  totalCount,
  fetchData,
  deleteSelectedEntity,
  deleteSelectedEntities,
}) => {
  const [order, setOrder] = useState(INITIAL_ORDER);
  const [orderBy, setOrderBy] = useState(columns[0].id);
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(INITIAL_PAGE);
  const [rowsPerPage, setRowsPerPage] = useState(INITIAL_ROWS_PER_PAGE);
  const prevNeedRefresh = usePrevious(needRefresh);
  const prevOrder = usePrevious(order);
  const prevOrderBy = usePrevious(orderBy);
  const prevPage = usePrevious(page);
  const prevRowsPerPage = usePrevious(rowsPerPage);
  const fetchDataSource = () =>
    fetchData({ order, orderBy, page, limit: rowsPerPage });
  const handleRequestSort = (event, property) => {
    const newOrderBy = property;
    const newOrder = orderBy === property && order === 'desc' ? 'asc' : 'desc';

    setOrderBy(newOrderBy);
    setOrder(newOrder);
  };
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      return setSelected(
        dataSource.filter((row) => !row.isDeleteDisabled).map((row) => row._id),
      );
    }

    return setSelected([]);
  };
  const handleRowClick = (_id) => {
    const selectedIndex = selected.indexOf(_id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, _id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };
  const handlePageChange = (event, page) => setPage(page); // eslint-disable-line
  const handleRowsPerPageChange = (event) => setRowsPerPage(event.target.value);
  const isSelected = (_id) => selected.includes(_id);

  useEffect(() => {
    if (
      (!prevNeedRefresh && needRefresh) ||
      prevOrder !== order ||
      prevOrderBy !== orderBy ||
      prevPage !== page ||
      prevRowsPerPage !== rowsPerPage
    ) {
      fetchDataSource();
    }
  });

  return (
    <Box component={Paper} sx={tableStyles.root}>
      <EntityTableToolbar
        entityType={entityType}
        showAction={showAction}
        selectedIds={selected}
        deleteSelectedEntities={(...args) => {
          deleteSelectedEntities(...args);
          setSelected([]);
        }}
      />
      <Box sx={tableStyles.tableWrapper}>
        <TableContainer component={Paper}>
          <Box
            component={Table}
            sx={tableStyles.table}
            aria-labelledby="tableTitle"
          >
            <EntityTableHead
              columns={columns}
              showAction={showAction}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={dataSource.length}
            />
            <TableBody>
              {dataSource.map((row) => {
                const isSelectedRow = isSelected(row._id);
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    aria-checked={isSelectedRow}
                    tabIndex={-1}
                    key={row._id}
                    selected={isSelectedRow}
                  >
                    {showAction && (
                      <TableCell padding="checkbox">
                        <Checkbox
                          disabled={row.isDeleteDisabled}
                          checked={isSelectedRow}
                          onClick={() => handleRowClick(row._id)}
                        />
                      </TableCell>
                    )}
                    {columns.map((column) => (
                      <TableCell
                        padding={column.disablePadding ? 'none' : 'normal'}
                        key={column.id}
                        align={cellAlignment(column.numeric)}
                      >
                        <Link
                          to={getEditEntityRoute(entityType, row._id)}
                          style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                          {row[column.id]}
                        </Link>
                      </TableCell>
                    ))}
                    <TableCell padding="normal" align="right">
                      {!row.isDeleteDisabled && showAction && (
                        <Link to={getEditEntityRoute(entityType, row._id)}>
                          <IconButton aria-label="Edit">
                            <EditIcon />
                          </IconButton>
                        </Link>
                      )}
                      {!showAction && (
                        <Link to={getEditEntityRoute(entityType, row._id)}>
                          <IconButton aria-label="Edit">
                            <VisibilityIcon />
                          </IconButton>
                        </Link>
                      )}
                      {!row.isDeleteDisabled && showAction && (
                        <IconButton
                          aria-label="Delete"
                          onClick={() => {
                            deleteSelectedEntity({ _id: row._id });
                            setSelected([]);
                          }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Box>
        </TableContainer>
      </Box>
      <TablePagination
        rowsPerPageOptions={ROWS_PER_PAGE_OPTIONS}
        component="div"
        count={totalCount}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'Previous Page',
        }}
        nextIconButtonProps={{
          'aria-label': 'Next Page',
        }}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </Box>
  );
};

EntityTable.propTypes = {
  entityType: PropTypes.string.isRequired,
  columns: PropTypes.array.isRequired,
  showAction: PropTypes.bool,
  dataSource: PropTypes.array,
  needRefresh: PropTypes.bool.isRequired,
  totalCount: PropTypes.number,
  fetchData: PropTypes.func.isRequired,
  deleteSelectedEntity: PropTypes.func.isRequired,
  deleteSelectedEntities: PropTypes.func.isRequired,
};

EntityTable.defaultProps = {
  dataSource: [],
  totalCount: 0,
};

export default EntityTable;
