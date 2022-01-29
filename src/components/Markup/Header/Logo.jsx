import s from './Header.module.scss';
import logo from '../../../svg/header_react_logo.svg';

const Logo = () => {
  return (
    <>
      <img src={logo} className={s.Header__logoImg} alt="react logo" />
      <h1 className={s.Header__logoName}>codebox</h1>
    </>
  );
};

export default Logo;
