export const FETCH_RANKS = 'RankList/FETCH_RANKS';
export const FETCH_RANKS_SUCCESS = 'RankList/FETCH_RANKS_SUCCESS';
export const FETCH_RANKS_ERROR = 'RankList/FETCH_RANKS_ERROR';

export const columns = [
  {
    id: 'rank',
    numeric: true,
    disablePadding: false,
    label: 'Rank',
  },
  {
    id: 'firstName',
    numeric: false,
    disablePadding: false,
    label: 'First Name',
  },
  {
    id: 'lastName',
    numeric: false,
    disablePadding: false,
    label: 'Last Name',
  },
  {
    id: 'age',
    numeric: true,
    disablePadding: false,
    label: 'Age',
  },
  {
    id: 'score',
    numeric: true,
    disablePadding: false,
    label: 'Score',
  },
];
