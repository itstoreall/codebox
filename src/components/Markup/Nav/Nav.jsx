import { Fragment, useContext } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { v4 as uukey } from 'uuid';
import Context from '../../../Context';
import s from './Nav.module.scss';

const Nav = ({ location }) => {
  const { views, setShowNavModal } = useContext(Context);

  return (
    <nav className={s.Nav}>
      <ul className={s.Nav__list}>
        {views.map(({ title, path }) => (
          <Fragment key={path}>
            {path !== '/' && (
              <li key={uukey} className={s.Nav__item}>
                <NavLink
                  exact
                  to={{ pathname: path, state: { from: location } }}
                  className={s.Nav__link}
                  activeClassName={s.Nav__activeLink}
                  onClick={() => setShowNavModal()}
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
};

export default withRouter(Nav);
