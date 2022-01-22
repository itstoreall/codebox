import { createUseStyles } from 'react-jss';
import refs from '../styles/refs';

export const useStyles = createUseStyles(() => {
  return {
    viewTitle: {
      marginBottom: 35,
      fontSize: 24,
      color: refs.primeryBlackColor,
    },
  };
});
