import { Fragment, useContext } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import { v4 as uukey } from 'uuid';
import Article from '../components/Layout/Article';
import Flex from '../components/Categories/Markup/Flex/';
import { useStyles } from './viewsStyles';
import Context from '../Context';

// const { log } = console;

export default function MarkupView() {
  const s = useStyles();
  const { views } = useContext(Context);

  return (
    <Article>
      <h1 className={s.viewTitle}>Markup</h1>

      <Switch>
        <Route path="/markup/flex" component={Flex} />
      </Switch>

      <ul className={s.cateogryLinkList}>
        {views.map(view => (
          <Fragment key={uukey()}>
            {view.title === 'Markup' && (
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
