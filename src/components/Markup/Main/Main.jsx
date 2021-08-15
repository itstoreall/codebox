import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Container from '../../Container';
import s from './Main.module.scss';

const HomeView = lazy(() =>
  import('../../../views/HomeView' /*webpackChunkName: 'Home'*/),
);
const LayoutView = lazy(() =>
  import('../../../views/LayoutView' /*webpackChunkName: 'Layout'*/),
);
const ComponentView = lazy(() =>
  import('../../../views/ComponentView' /*webpackChunkName: 'Component'*/),
);
const FunctionView = lazy(() =>
  import('../../../views/FunctionView' /*webpackChunkName: 'Function'*/),
);
const HookView = lazy(() =>
  import('../../../views/HookView' /*webpackChunkName: 'Hook'*/),
);

// const { log } = console;

const Main = () => {
  return (
    <main className="main">
      <Container>
        <Suspense
          fallback={<div className={s.loadingSuspense}>Loading...</div>}
        >
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route path="/layout" component={LayoutView} />
            <Route path="/components" component={ComponentView} />
            <Route path="/functions" component={FunctionView} />
            <Route path="/hooks" component={HookView} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </Container>
    </main>
  );
};

export default Main;
