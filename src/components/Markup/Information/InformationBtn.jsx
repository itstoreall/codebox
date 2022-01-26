import s from './Information.module.scss';
import sprite from '../../../svg/sprite.svg';

const InformationBtn = ({ toggleInformationModal }) => {
  return (
    <button className={s.Information__btn} onClick={toggleInformationModal}>
      <svg width="18" height="18">
        <use href={sprite + '#icon-info'}></use>
      </svg>
    </button>
  );
};

export default InformationBtn;
