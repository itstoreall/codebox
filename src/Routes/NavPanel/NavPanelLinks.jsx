import { Fragment, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useStyles } from './NavPanelStyles';
import Context from '../../Context';

const NavPanelLinks = ({ viewTitle }) => {
  const s = useStyles();
  const { views } = useContext(Context);

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
                  to={link.href}
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

export default NavPanelLinks;
