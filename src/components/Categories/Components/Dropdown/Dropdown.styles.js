import { createUseStyles } from 'react-jss';
import refs from '../../../../styles/refs';

export default createUseStyles({
  dropdown: {
    textAlign: 'center',
    backgroundColor: refs.primaryTitleColor,
  },

  dropdownButton: {
    padding: {
      top: 10,
      left: 20,
      right: 20,
      bottom: 10,
    },

    margin: 30,
    minWidth: 200,
    fontSize: 16,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: refs.$primaryWhiteColor,
    backgroundColor: refs.linkColor,
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
    outline: 'none',

    '&:hover': {
      color: refs.primaryTitleColor,
      backgroundColor: refs.activeLinkColor,
    },
  },

  dropdownMenu: {
    padding: 38,
    letterSpacing: 1,
    backgroundColor: refs.activeLinkColor,
  },
});
