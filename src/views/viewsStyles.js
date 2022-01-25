import { createUseStyles } from 'react-jss';
import refs from '../styles/refs';

export const useStyles = createUseStyles(() => {
  return {
    viewTitle: {
      marginBottom: 30,
      fontSize: 24,
      color: refs.primeryBlackColor,
    },
  };
});
