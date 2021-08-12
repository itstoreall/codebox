import { NavLink } from 'react-router-dom';
import logo from './logo.svg';
import s from './Header.module.scss';

export default function Header() {
  return (
    <header className={s.Header}>
      <NavLink className={s.Header__logoLink} to="/">
        <img src={logo} className={s.Header__logoImg} alt="logo" />
        <h1 className={s.Header__logoName}>codebox</h1>
      </NavLink>
    </header>
  );
}
