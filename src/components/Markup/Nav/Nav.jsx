import { Fragment, useContext } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { v4 as uukey } from 'uuid';
import Context from '../../../Context';
import s from './Nav.module.scss';

// const { log } = console;

const Nav = ({ location }) => {
  const { views, setShowNavbar } = useContext(Context);

  // console.log('Nav location.state.from: --->', location?.state?.from);

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
                  // to={path}
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
};

export default withRouter(Nav);
