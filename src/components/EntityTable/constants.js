export const ENTITY_TYPES = {
  PLAYER: 'player',
  GAME: 'game',
  RANK: 'rank',
};

export const ENTITY_LIST_ROUTE_MAP = {
  [ENTITY_TYPES.PLAYER]: '/players',
  [ENTITY_TYPES.GAME]: '/games',
  [ENTITY_TYPES.RANK]: '/ranks',
};

export const ENTITY_TABLE_TITLE_MAP = {
  [ENTITY_TYPES.PLAYER]: 'Player List',
  [ENTITY_TYPES.GAME]: 'Game List',
  [ENTITY_TYPES.RANK]: 'Rank List',
};

export const ENTITY_TABLE_ADD_LABEL_MAP = {
  [ENTITY_TYPES.PLAYER]: 'Add Player',
  [ENTITY_TYPES.GAME]: 'Add Game',
};

export const ENTITY_TABLE_DELETE_LABEL_MAP = {
  [ENTITY_TYPES.PLAYER]: 'Delete Players',
  [ENTITY_TYPES.GAME]: 'Delete Games',
};

export const INITIAL_ORDER = 'asc';
export const INITIAL_PAGE = 0;
export const INITIAL_ROWS_PER_PAGE = 5;
export const ROWS_PER_PAGE_OPTIONS = [5, 10, 25];
