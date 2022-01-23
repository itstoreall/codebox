import { useContext } from 'react';
import constants from '../../../constants';
import { HeaderContainer } from '../../Container/CustomContainers';
import Logo from './Logo';
import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';
import Nav from '../Nav';
import OpenMenuBtn from './OpenMenuBtn';
import Context from '../../../Context';

export default function Header() {
  const { media } = useContext(Context);
  const { home } = constants.path;

  return (
    <header className={s.Header}>
      <HeaderContainer>
        <NavLink className={s.Header__logoLink} to={home}>
          <Logo />
        </NavLink>
        {media.tabletMax || media.desktopMax ? <OpenMenuBtn /> : <Nav />}
      </HeaderContainer>
    </header>
  );
}
