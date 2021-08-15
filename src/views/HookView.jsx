import { Fragment, useContext } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import { v4 as uukey } from 'uuid';
import Article from '../components/Markup/Article';
import UseState from '../components/Categories/Hooks/UseState';
import { useStyles } from './viewsStyles';
import Context from '../Context';

// const { log } = console;

export default function HookView() {
  const s = useStyles();
  const { views } = useContext(Context);

  return (
    <Article>
      <h1 className={s.viewTitle}>Hooks</h1>

      <Switch>
        <Route path="/hooks/usestate" component={UseState} />
      </Switch>

      <ul className={s.cateogryNavList}>
        {views.map(view => (
          <Fragment key={uukey()}>
            {view.title === 'Hooks' && (
              <li className={s.cateogryLinkItem}>
                {view.links.map(link => (
                  <NavLink
                    key={uukey()}
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
