import { createUseStyles } from 'react-jss';
import refs from '../../../styles/refs';

export const useStyles = createUseStyles(() => {
  return {
    History: {
      display: 'flex',
      alignItems: 'center',
      width: 'calc(100% - 50px)',
      // color: refs.primaryBlackColor50,
      // fontSize: 14,
    },

    homeButton: {
      cursor: 'pointer',
      fill: refs.primaryBlackColor50,

      '&:hover svg': {
        fill: refs.primaryBlackColor75,
      },
    },

    homeIcon: {
      fill: refs.primaryBlackColor50,
    },

    fromButton: {
      fontSize: 14,
      cursor: 'pointer',

      '& span': {
        color: refs.primaryBlackColor50,
      },

      '&:hover span': {
        color: refs.primaryBlackColor75,
      },
    },

    codebox: {
      fontSize: 14,
      color: refs.primaryBlackColor50,

      '-webkit-touch-callout': 'none',
      '-webkit-user-select': 'none',
      '-khtml-user-select': 'none',
      '-moz-user-select': 'none',
      '-ms-user-select': 'none',
      'user-select': 'none',
    },

    arrowIcon: {
      marginLeft: 10,
      marginRight: 10,
      width: 14,
      height: 15,
      fill: refs.primaryBlackColor25,

      '-webkit-touch-callout': 'none',
      '-webkit-user-select': 'none',
      '-khtml-user-select': 'none',
      '-moz-user-select': 'none',
      '-ms-user-select': 'none',
      'user-select': 'none',
    },

    currentPathname: {
      color: refs.primaryBlackColor50,
      fontSize: 14,

      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',

      '-webkit-touch-callout': 'none',
      '-webkit-user-select': 'none',
      '-khtml-user-select': 'none',
      '-moz-user-select': 'none',
      '-ms-user-select': 'none',
      'user-select': 'none',
    },
  };
});
