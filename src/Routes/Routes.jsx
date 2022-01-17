import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import constants from '../constants';
import s from './Routes.module.scss';

const HomeView = lazy(() =>
  import('../views/HomeView' /*webpackChunkName: 'Home'*/),
);
const LayoutView = lazy(() =>
  import('../views/LayoutView' /*webpackChunkName: 'Layout'*/),
);
const ComponentView = lazy(() =>
  import('../views/ComponentView' /*webpackChunkName: 'Component'*/),
);
const FunctionView = lazy(() =>
  import('../views/FunctionView' /*webpackChunkName: 'Function'*/),
);
const HookView = lazy(() =>
  import('../views/HookView' /*webpackChunkName: 'Hook'*/),
);

const Routes = () => {
  const { layout, components, functions, hooks } = constants.path;

  return (
    <Suspense fallback={<div className={s.loadingSuspense}>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path={layout} component={LayoutView} />
        <Route path={components} component={ComponentView} />
        <Route path={functions} component={FunctionView} />
        <Route path={hooks} component={HookView} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  );
};

export default Routes;
