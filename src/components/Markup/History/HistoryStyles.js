import { createUseStyles } from 'react-jss';
import refs from '../../../styles/refs';

export const useStyles = createUseStyles(() => {
  return {
    historyButtonWrap: {
      display: 'flex',
      alignItems: 'center',
      // display: 'none',
      width: 'calc(100% - 50px)',

      // [`@media screen and (min-width: ${refs.tablet}px)`]: {
      // padding: '10px 0 10px 15px',
      // display: 'flex',
      // alignItems: 'center',
      // },
    },

    homeButton: {
      cursor: 'pointer',
      fill: refs.primaryBlackColor25,

      '&:hover svg': {
        fill: refs.primaryBlackColor50,
      },
    },

    homeIcon: {
      fill: refs.primaryBlackColor25,
    },

    fromButton: {
      fontSize: 14,
      cursor: 'pointer',

      '& span': {
        color: refs.primaryBlackColor25,
      },

      '&:hover span': {
        color: refs.primaryBlackColor50,
      },
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
      color: refs.primaryBlackColor25,
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
