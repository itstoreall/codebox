import { Fragment, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uukey } from 'uuid';
import Context from '../../../Context';
import s from './Nav.module.scss';

// const { log } = console;

export default function Nav() {
  const { views, setShowNavbar } = useContext(Context);

  return (
    <nav className={s.Nav}>
      <ul className={s.Nav__list}>
        {views.map(({ title, path }) => (
          <Fragment key={path}>
            {path !== '/' && (
              <li key={uukey} className={s.Nav__item}>
                <NavLink
                  exact
                  to={path}
                  className={s.Nav__link}
                  activeClassName={s.Nav__activeLink}
                  onClick={() => setShowNavbar()}
                >
                  {title}
                </NavLink>
              </li>
            )}
          </Fragment>
        ))}
      </ul>
    </nav>
  );
}
