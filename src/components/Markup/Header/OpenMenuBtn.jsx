import { useContext } from 'react';
import s from './Header.module.scss';
import sprite from '../../../svg/sprite.svg';
import Context from '../../../Context';

const OpenMenuBtn = () => {
  const { showNavModal, toggleNavMenu } = useContext(Context);

  return (
    <>
      <button
        className={s.Header__menuBtn}
        type="button"
        onClick={toggleNavMenu}
      >
        {showNavModal ? (
          <svg className={s.Header__menuBtnSvg}>
            <use href={sprite + '#icon-close'}></use>
          </svg>
        ) : (
          <svg className={s.Header__menuBtnSvg}>
            <use href={sprite + '#menu-dots'}></use>
          </svg>
        )}
      </button>
    </>
  );
};

export default OpenMenuBtn;
