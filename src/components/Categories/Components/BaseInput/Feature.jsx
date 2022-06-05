import { withRouter } from 'react-router-dom';
import s from './Feature.module.scss';
import App from '../../../Markup/FeatureTemplate';
import FeatureApp from './BaseInputFeature';

const Feature = ({ viewTitle, featureTitle, location }) => {
  const description = `Just base input, use Styled Components`;

  return (
    <App
      viewTitle={viewTitle}
      featureTitle={featureTitle}
      description={description}
    >
      <div className={s.Feature}>
        <FeatureApp />
      </div>
    </App>
  );
};

export default withRouter(Feature);
