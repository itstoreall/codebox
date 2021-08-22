import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.svg';
import sprite from '../../../svg/sprite.svg';
import s from './Header.module.scss';
import Context from '../../../Context';

export default function Header() {
  const { tabletMax, showNavbar, toggleNavbar } = useContext(Context);

  return (
    <header className={s.Header}>
      <NavLink className={s.Header__logoLink} to="/">
        <img src={logo} className={s.Header__logoImg} alt="logo" />
        <h1 className={s.Header__logoName}>codebox</h1>
        {tabletMax && (
          <button
            className={s.Header__menuBtn}
            type="button"
            onClick={toggleNavbar}
          >
            {showNavbar ? (
              <svg className={s.Header__menuBtnSvg}>
                <use href={sprite + '#menu-close'}></use>
              </svg>
            ) : (
              <svg className={s.Header__menuBtnSvg}>
                <use href={sprite + '#menu-dots'}></use>
              </svg>
            )}
          </button>
        )}
      </NavLink>
    </header>
  );
}
