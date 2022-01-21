import s from './Feature.module.scss';
import sprite from '../../../../svg/sprite.svg';

const NavPanel = ({ paginatedList, currentList, paginate }) => {
  return (
    <div className={s.navPanel}>
      <button className={s.navPanel__button} onClick={() => paginate('prev')}>
        <svg width="12" height="12" fill="white">
          <use href={sprite + '#icon-arrow-left'}></use>
        </svg>
      </button>
      <span className={s.navPanel__counter}>{`${currentList} / ${
        Math.ceil(paginatedList?.length / 10) || 1
      }`}</span>
      <button className={s.navPanel__button} onClick={() => paginate('next')}>
        <svg width="12" height="12" fill="white">
          <use href={sprite + '#icon-arrow-right'}></use>
        </svg>
      </button>
    </div>
  );
};

export default NavPanel;
