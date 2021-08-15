import { Fragment, useContext } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import { v4 as uukey } from 'uuid';
import Article from '../components/Markup/Article';
import DnD from '../components/Categories/Components/DnD';
import Free from '../components/Categories/Components/Free';
import { useStyles } from './viewsStyles';
import Context from '../Context';

// const { log } = console;

export default function ComponentView() {
  const s = useStyles();
  const { views } = useContext(Context);

  return (
    <Article>
      <h1 className={s.viewTitle}>Components</h1>
      <Switch>
        <Route path="/components/dnd" component={DnD} />
      </Switch>
      <Switch>
        <Route path="/components/free" component={Free} />
      </Switch>

      <ul className={s.cateogryNavList}>
        {views.map(view => (
          <Fragment key={uukey()}>
            {view.title === 'Components' && (
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
