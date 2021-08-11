import { createUseStyles } from 'react-jss';
import refs from '../styles/refs';

export const useStyles = createUseStyles({
  viewTitle: {
    marginBottom: 40,
    color: refs.primeryBlackColor,
  },

  // LinkList
  cateogryLinkList: {
    margin: 0,
    padding: 20,
    listStyle: 'none',
    border: `1px solid ${refs.primaryBlackColor25}`,
    borderRadius: 4,
  },

  // Links
  categoryLink: {
    display: 'block',
    fontSize: 14,
  },

  activeCategoryLink: {
    color: refs.activelinkColor,
    cursor: 'default',

    '&:hover': {
      textDecoration: 'none',
    },
  },
});
