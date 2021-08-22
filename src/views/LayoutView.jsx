import { Fragment, useContext } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import Article from '../components/Markup/Article';
import StyledComponents from '../components/Categories/Layout/StyledComponents';
import { useStyles } from './viewsStyles';
import Context from '../Context';

// const { log } = console;

export default function LayoutView() {
  const s = useStyles();
  const { views } = useContext(Context);

  return (
    <Article>
      <h1 className={s.viewTitle}>Layout</h1>

      <Switch>
        <Route path="/layout/styled-components" component={StyledComponents} />
      </Switch>

      <ul className={s.cateogryNavList}>
        {views.map(view => (
          <Fragment key={view.v_id}>
            {view.title === 'Layout' && (
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
