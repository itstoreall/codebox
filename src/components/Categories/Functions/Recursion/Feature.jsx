import { withRouter } from 'react-router-dom';
import s from './Feature.module.scss';
import App from '../../../Markup/FeatureTemplate';
import Recursion from './Recursion';

const Feature = ({ viewTitle, featureTitle, location }) => {
  const description = `See in the console how recursion works`;

  return (
    <App
      viewTitle={viewTitle}
      featureTitle={featureTitle}
      description={description}
    >
      <div className={s.Feature}>
        <Recursion />
      </div>
    </App>
  );
};

export default withRouter(Feature);
