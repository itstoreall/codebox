import { Fragment, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uukey } from 'uuid';
import Container from '../../Container';
import Context from '../../../Context';
import s from './Nav.module.scss';

// const { log } = console;

export default function Nav() {
  const { views } = useContext(Context);

  return (
    <Container>
      <nav className={s.nav}>
        <ul className={s.nav__list}>
          {views.map(({ title, path }) => (
            <Fragment key={path}>
              {path !== '/' && (
                <li key={uukey} className={s.nav__item}>
                  <NavLink
                    exact
                    to={path}
                    className={s.nav__link}
                    activeClassName={s.nav__activeLink}
                  >
                    {title}
                  </NavLink>
                </li>
              )}
            </Fragment>
          ))}
        </ul>
      </nav>
    </Container>
  );
}
