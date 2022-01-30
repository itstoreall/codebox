import { Switch, Route } from 'react-router-dom';
import StyledComponents from '../components/Categories/Layout/StyledComponents';
import DragAndDrop from '../components/Categories/Components/DragAndDrop';
import Dropdown from '../components/Categories/Components/Dropdown';
import Pagination from '../components/Categories/Components/Pagination';
import ReusedModal from '../components/Categories/Components/ReusedModal';
import Inputs from '../components/Categories/Components/Inputs';
import Feature from '../components/Categories/Components/Feature';
import Closures from '../components/Categories/Functions/Closures';
import UseContext from '../components/Categories/Hooks/UseContext';

const FeatureRoutes = ({ viewTitle }) => {
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
          path="/components/dragndrop"
          render={props => (
            <DragAndDrop
              {...props}
              viewTitle={viewTitle}
              featureTitle={'Drag and Drop'}
            />
          )}
        />
        <Route
          path="/components/dropdown"
          render={props => (
            <Dropdown
              {...props}
              viewTitle={viewTitle}
              featureTitle={'Dropdown'}
            />
          )}
        />
        <Route
          path="/components/feature"
          render={props => (
            <Feature
              {...props}
              viewTitle={viewTitle}
              featureTitle={'Feature'}
            />
          )}
        />
        <Route
          path="/components/inputs"
          render={props => (
            <Inputs {...props} viewTitle={viewTitle} featureTitle={'Inputs'} />
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
          path="/components/reused-modal"
          render={props => (
            <ReusedModal
              {...props}
              viewTitle={viewTitle}
              featureTitle={'Reused Modal'}
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
          path="/hooks/usecontext"
          render={props => (
            <UseContext
              {...props}
              viewTitle={viewTitle}
              featureTitle={'useContext'}
            />
          )}
        />
      </Switch>
    </>
  );
};

export default FeatureRoutes;
