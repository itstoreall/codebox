import logo from './logo.svg';
import s from './Header.module.scss';

export default function Header() {
  return (
    <header className={s.Header}>
      <div className={s.HeaderLogoWrap}>
        <img src={logo} className={s.HeaderLogo} alt="logo" />
        <h1 className={s.HeaderLogoName}>codebox</h1>
      </div>
    </header>
  );
}
