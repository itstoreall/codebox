import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../../Container';
import Context from '../../../Context';
import s from './Nav.module.scss';

export default function Nav() {
  const { views } = useContext(Context);

  return (
    <Container>
      <nav className={s.nav}>
        {views.map(({ title, path }) => (
          <NavLink
            key={title}
            exact
            to={path}
            className={s.navLink}
            activeClassName={s.activeNavLink}
          >
            {title}
          </NavLink>
        ))}
      </nav>
    </Container>
  );
}
