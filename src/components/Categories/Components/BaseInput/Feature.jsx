import { withRouter } from 'react-router-dom';
import s from './Feature.module.scss';
import App from '../../../Markup/FeatureTemplate';
import BaseInputFeature from './BaseInputFeature';

const Feature = ({ viewTitle, featureTitle, location }) => {
  const description = `Just base input, use Styled Components, &:checked, &::after`;

  return (
    <App
      viewTitle={viewTitle}
      featureTitle={featureTitle}
      description={description}
    >
      <div className={s.Feature}>
        <BaseInputFeature />
      </div>
    </App>
  );
};

export default withRouter(Feature);
