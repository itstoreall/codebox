import { Fragment, useContext } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { useStyles } from './NavPanelStyles';
import Context from '../../../Context';

const NavPanel = ({ viewTitle, location }) => {
  const s = useStyles();
  const { views } = useContext(Context);

  const getLinks = view => {
    return view.links.map(link => (
      <li key={link.href} className={s.navPanelItem}>
        <NavLink
          key={link.l_id}
          exact
          to={{ pathname: link.href, state: { from: location } }}
          className={s.categoryLink}
          activeClassName={s.activeCategoryLink}
        >
          {link.anchor}
        </NavLink>
      </li>
    ));
  };

  return (
    <ul className={s.navPanelList}>
      {views.map(view => (
        <Fragment key={view.title}>
          {view.title === viewTitle && getLinks(view)}
        </Fragment>
      ))}
    </ul>
  );
};

export default withRouter(NavPanel);
