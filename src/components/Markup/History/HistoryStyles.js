import { createUseStyles } from 'react-jss';
import refs from '../../../styles/refs';

export const useStyles = createUseStyles(() => {
  return {
    historyButtonWrap: {
      display: 'none',

      [`@media screen and (min-width: ${refs.tablet}px)`]: {
        padding: '10px 0 10px 15px',
        display: 'flex',
        alignItems: 'center',
        borderBottom: `1px solid ${refs.primaryBorderColor}`,
      },
    },

    homeButton: {
      cursor: 'pointer',
      fill: refs.linkColor,

      '&:hover svg': {
        fill: refs.activeLinkColor,
      },
    },

    homeIcon: {
      fill: refs.activeLinkColor,
    },

    fromButton: {
      fontSize: 14,
      cursor: 'pointer',

      '& span': {
        color: refs.linkColor,
      },

      '&:hover span': {
        color: refs.activeLinkColor,
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
      color: refs.activeLinkColor,
      fontSize: 14,

      '-webkit-touch-callout': 'none',
      '-webkit-user-select': 'none',
      '-khtml-user-select': 'none',
      '-moz-user-select': 'none',
      '-ms-user-select': 'none',
      'user-select': 'none',
    },
  };
});
