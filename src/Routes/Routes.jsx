import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import constants from '../constants';
import StyledComponents from '../components/Categories/Layout/StyledComponents';
import DnD from '../components/Categories/Components/DragAndDrop';
import Pagination from '../components/Categories/Components/Pagination';
import Closures from '../components/Categories/Functions/Closures';
import UseState from '../components/Categories/Hooks/UseState';
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
// const NotFoundView = lazy(() =>
//   import('../views/NotFoundView' /*webpackChunkName: 'NotFoundView'*/),
// ); // *

export const Routes = () => {
  const { layout, components, functions, hooks } = constants.path;

  return (
    <Suspense fallback={<div className={s.loadingSuspense}>Loading...</div>}>
      <Switch>
        {/* <Route component={NotFoundView} /> */}
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

export const NavPanelRoutes = ({ viewTitle }) => {
  return (
    <>
      <Switch>
        <Route
          path="/layout/styled-components"
          render={props => (
            <StyledComponents
              {...props}
              viewTitle={viewTitle}
              featureTitle={'Styled Components'}
            />
          )}
        />
        <Route
          path="/components/dnd"
          render={props => (
            <DnD
              {...props}
              viewTitle={viewTitle}
              featureTitle={'Drag and Drop'}
            />
          )}
        />
        <Route
          path="/components/pagination"
          render={props => (
            <Pagination
              {...props}
              viewTitle={viewTitle}
              featureTitle={'Pagination'}
            />
          )}
        />
        <Route
          path="/functions/closures"
          render={props => (
            <Closures
              {...props}
              viewTitle={viewTitle}
              featureTitle={'Closures'}
            />
          )}
        />
        <Route
          path="/hooks/usestate"
          render={props => <UseState {...props} viewTitle={viewTitle} />}
        />
      </Switch>
    </>
  );
};

/*

NotFoundView - just uncomment the route to display the component for any pathies

*/
