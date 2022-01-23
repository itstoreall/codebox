import s from './Header.module.scss';
import logo from './logo.svg';

const Logo = () => {
  return (
    <>
      <img src={logo} className={s.Header__logoImg} alt="logo" />
      <h1 className={s.Header__logoName}>codebox</h1>
    </>
  );
};

export default Logo;
