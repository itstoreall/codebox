import { Switch, Route } from 'react-router-dom';
import StyledComponents from '../components/Categories/Layout/StyledComponents';
import MovingSquare from '../components/Categories/Layout/MovingSquare';

import DragAndDrop from '../components/Categories/Components/DragAndDrop';
import Dropdown from '../components/Categories/Components/Dropdown';
import Pagination from '../components/Categories/Components/Pagination';
import ReusedModal from '../components/Categories/Components/ReusedModal';
import BaseInput from '../components/Categories/Components/BaseInput';
import BaseSelect from '../components/Categories/Components/BaseSelect';
import BaseSwitch from '../components/Categories/Components/BaseSwitch';
import Inputs from '../components/Categories/Components/Inputs';
import Feature from '../components/Categories/Components/Feature';
import BackToTopButton from '../components/Categories/Components/BackToTopButton';
import Skeleton from '../components/Categories/Components/Skeleton';
import CompoundComponents from '../components/Categories/Components/CompoundComponents';

import Closures from '../components/Categories/Functions/Closures';
import Recursion from '../components/Categories/Functions/Recursion';
import LocalDate from '../components/Categories/Functions/LocalDate';
import SortData from '../components/Categories/Functions/SortData';
import Encryption from '../components/Categories/Functions/Encryption';
import UuidGenerator from '../components/Categories/Functions/UuidGenerator';

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
          path="/layout/moving-square"
          render={props => (
            <MovingSquare
              {...props}
              viewTitle={viewTitle}
              featureTitle={'Moving square'}
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
          path="/components/base-input"
          render={props => (
            <BaseInput
              {...props}
              viewTitle={viewTitle}
              featureTitle={'Base input'}
            />
          )}
        />
        <Route
          path="/components/base-select"
          render={props => (
            <BaseSelect
              {...props}
              viewTitle={viewTitle}
              featureTitle={'Base select'}
            />
          )}
        />
        <Route
          path="/components/base-switch"
          render={props => (
            <BaseSwitch
              {...props}
              viewTitle={viewTitle}
              featureTitle={'Base switch'}
            />
          )}
        />
        <Route
          path="/components/back-to-top"
          render={props => (
            <BackToTopButton
              {...props}
              viewTitle={viewTitle}
              featureTitle={'Back to top button'}
            />
          )}
        />
        <Route
          path="/components/skeleton"
          render={props => (
            <Skeleton
              {...props}
              viewTitle={viewTitle}
              featureTitle={'Skeleton'}
            />
          )}
        />
        <Route
          path="/components/compound-components"
          render={props => (
            <CompoundComponents
              {...props}
              viewTitle={viewTitle}
              featureTitle={'Compound Components'}
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
          path="/functions/recursion"
          render={props => (
            <Recursion
              {...props}
              viewTitle={viewTitle}
              featureTitle={'Recursion'}
            />
          )}
        />
        <Route
          path="/functions/local-date"
          render={props => (
            <LocalDate
              {...props}
              viewTitle={viewTitle}
              featureTitle={'Current local date'}
            />
          )}
        />
        <Route
          path="/functions/sort-data"
          render={props => (
            <SortData
              {...props}
              viewTitle={viewTitle}
              featureTitle={'Sort data'}
            />
          )}
        />
        <Route
          path="/functions/encryption"
          render={props => (
            <Encryption
              {...props}
              viewTitle={viewTitle}
              featureTitle={'Encryption and decryption'}
            />
          )}
        />
        <Route
          path="/functions/uuid-generator"
          render={props => (
            <UuidGenerator
              {...props}
              viewTitle={viewTitle}
              featureTitle={'uuid generator'}
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
