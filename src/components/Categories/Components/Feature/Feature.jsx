import { withRouter } from 'react-router-dom';
import App from '../../../Markup/FeatureTemplate';
import s from './Feature.module.scss';

const Feature = ({ viewTitle, featureTitle, location }) => {
  const description = `Write a description of the ${featureTitle} here...`;

  return (
    <App
      viewTitle={viewTitle}
      featureTitle={featureTitle}
      description={description}
    >
      <div className={s.Feature}>
        <p className={s.Feature__text}>[Write your code here]</p>
      </div>
    </App>
  );
};

export default withRouter(Feature);
