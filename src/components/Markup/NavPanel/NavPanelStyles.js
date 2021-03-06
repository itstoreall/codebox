import { createUseStyles } from 'react-jss';
import refs from '../../../styles/refs';

export const useStyles = createUseStyles({
  navPanelList: {
    margin: 0,
    padding: 20,
    listStyle: 'none',
    backgroundColor: refs.BG__Light,
    border: `1px solid ${refs.primaryBorderColor}`,
    borderRadius: 4,
  },

  navPanelItem: {
    display: 'flex',

    '&:not(:last-child)': {
      marginBottom: 10,
    },

    [`@media (min-width: ${refs.tablet}px)`]: {
      '&:not(:last-child)': {
        marginBottom: 7,
      },
    },
  },

  categoryLink: {
    display: 'block',
    fontSize: 14,

    '&:not(:last-child)': {
      marginBottom: 7,
    },

    '&:hover': {
      color: refs.activeLinkColor,
    },
  },

  activeCategoryLink: {
    color: refs.activeLinkColor,
    cursor: 'default',

    '&:hover': {
      textDecoration: 'none',
    },
  },
});
