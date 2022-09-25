import { withRouter } from 'react-router-dom';
import s from './Feature.module.scss';
import App from '../../../Markup/FeatureTemplate';

const Feature = ({ viewTitle, featureTitle, location }) => {
  const description = `[write a description of the ${featureTitle} here...]`;

  return (
    <App
      viewTitle={viewTitle}
      featureTitle={featureTitle}
      description={description}
    >
      <div className={s.Feature}>
        <p className={s.Feature__text}>[write your code here]</p>
      </div>
    </App>
  );
};

export default withRouter(Feature);
