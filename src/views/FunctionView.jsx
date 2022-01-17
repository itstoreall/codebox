import { Fragment, useContext } from 'react';
import NavPanelRoutes from '../Routes/NavPanelRoutes';
import { NavLink } from 'react-router-dom';
import Article from '../components/Markup/Article';
import { useStyles } from './viewsStyles';
import Context from '../Context';

export default function FunctionsView() {
  const s = useStyles();
  const { views } = useContext(Context);

  return (
    <Article>
      <h1 className={s.viewTitle}>Functions</h1>

      {NavPanelRoutes()}

      <ul className={s.navPanel}>
        {views.map(view => (
          <Fragment key={view.v_id}>
            {view.title === 'Functions' && (
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
    </Article>
  );
}
