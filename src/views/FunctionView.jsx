import { Fragment, useContext } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import { v4 as uukey } from 'uuid';
import Article from '../components/Markup/Article';
import Closures from '../components/Categories/Functions/Closures';
import { useStyles } from './viewsStyles';
import Context from '../Context';

// const { log } = console;

export default function FunctionsView() {
  const s = useStyles();
  const { views } = useContext(Context);

  return (
    <Article>
      <h1 className={s.viewTitle}>Functions</h1>
      <Switch>
        <Route path="/functions/closures" component={Closures} />
      </Switch>

      <ul className={s.cateogryNavList}>
        {views.map(view => (
          <Fragment key={uukey()}>
            {view.title === 'Functions' && (
              <li className={s.cateogryLinkItem}>
                {view.links.map(link => (
                  <NavLink
                    key={link.href}
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
