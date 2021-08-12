import { Fragment, useContext } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import { v4 as uukey } from 'uuid';
import Article from '../components/Layout/Article';
import Closures from '../components/Categories/Functions/Closures';
import DnD from '../components/Categories/Functions/DnD';
import { useStyles } from './viewsStyles';
import Context from '../Context';

// const { log } = console;

export default function FunctionView() {
  const s = useStyles();
  const { views } = useContext(Context);

  return (
    <Article>
      <h1 className={s.viewTitle}>Functions</h1>
      <Switch>
        <Route path="/functions/closures" component={Closures} />
      </Switch>
      <Switch>
        <Route path="/functions/dnd" component={DnD} />
      </Switch>

      <ul className={s.cateogryLinkList}>
        {views.map(view => (
          <Fragment key={uukey()}>
            {view.title === 'Functions' && (
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
