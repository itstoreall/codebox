import { Fragment, useContext } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { useStyles } from './NavPanelStyles';
import Context from '../../../Context';

const NavPanel = ({ viewTitle, location }) => {
  const s = useStyles();
  const { views } = useContext(Context);

  // console.log('NavPanel location --->', location);

  return (
    <ul className={s.navPanel}>
      {views.map(view => (
        <Fragment key={view.v_id}>
          {view.title === viewTitle && (
            <li className={s.cateogryLinkItem}>
              {view.links.map(link => (
                <NavLink
                  key={link.l_id}
                  exact
                  to={{ pathname: link.href, state: { from: location } }}
                  className={s.categoryLink}
                  activeClassName={s.activeCategoryLink}
                >
                  {link.anchor}
                </NavLink>
              ))}
            </li>
          )}
        </Fragment>
      ))}
    </ul>
  );
};

export default withRouter(NavPanel);
