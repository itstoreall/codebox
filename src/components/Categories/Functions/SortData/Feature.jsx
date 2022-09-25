import { withRouter } from 'react-router-dom';
import s from './Feature.module.scss';
import App from '../../../Markup/FeatureTemplate';
import SortData from './SortData';

const Feature = ({ viewTitle, featureTitle, location }) => {
  const description = `Function for normal and reverse sorting of data`;

  return (
    <App
      viewTitle={viewTitle}
      featureTitle={featureTitle}
      description={description}
    >
      <div className={s.Feature}>
        <SortData />
      </div>
    </App>
  );
};

export default withRouter(Feature);
