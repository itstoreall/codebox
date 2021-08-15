import { Fragment, useContext } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import { v4 as uukey } from 'uuid';
import Article from '../components/Markup/Article';
import Flex from '../components/Categories/Layout/Flex/';
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
        <Route path="/markup/flex" component={Flex} />
      </Switch>

      <ul className={s.cateogryNavList}>
        {views.map(view => (
          <Fragment key={uukey()}>
            {view.title === 'Markup' && (
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
