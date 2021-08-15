import { createUseStyles } from 'react-jss';
import refs from '../styles/refs';

export const useStyles = createUseStyles({
  viewTitle: {
    marginBottom: 35,
    fontSize: 24,
    color: refs.primeryBlackColor,
  },

  // LinkList
  cateogryNavList: {
    margin: 0,
    padding: 20,
    listStyle: 'none',
    backgroundColor: refs.BG__Light,
    border: `1px solid ${refs.primaryBorderColor}`,
    borderRadius: 4,
  },

  // Links
  categoryLink: {
    display: 'block',
    fontSize: 14,

    '&:not(:last-child)': {
      marginBottom: 5,
    },
  },

  activeCategoryLink: {
    color: refs.activelinkColor,
    cursor: 'default',

    '&:hover': {
      textDecoration: 'none',
    },
  },
});
