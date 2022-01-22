import { useStyles } from './HistoryStyles';
import sprite from '../../../svg/sprite.svg';

export const ArrowIcon = () => {
  const s = useStyles();

  return (
    <span className={s.arrowIcon}>
      <svg width="14" height="14">
        <use href={sprite + '#icon-arrow-right'}></use>
      </svg>
    </span>
  );
};

export const HomeIcon = ({ path }) => {
  const s = useStyles();

  return (
    <span className={path === '/' ? s.homeIcon : null}>
      <svg width="13" height="13">
        <use href={sprite + '#icon-home'}></use>
      </svg>
    </span>
  );
};

// export default ArrowIcon;
