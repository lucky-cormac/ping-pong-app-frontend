export default {
  root: {
    flexGrow: 1,
  },
  toolbar: {
    justifyContent: 'space-between',
    paddingTop: 1,
    paddingBottom: 1,
  },
  brandText: {
    fontSize: (theme) => theme.typography.h4.fontSize,
    textDecoration: 'none',
    color: (theme) => theme.palette.common.white,
  },
  mainMenu: {
    display: 'flex',
  },
  menuItem: {
    marginLeft: 2,
    marginRight: 2,
    textDecoration: 'none',
    color: (theme) => theme.palette.common.white,
  },
  menuButton: {
    marginLeft: -1,
    marginRight: 2,
    color: (theme) => theme.palette.common.white,
  },
  menuButtonEmail: {
    textTransform: 'none',
  },
  menuButtonName: {
    textTransform: 'capitalize',
  },
};
