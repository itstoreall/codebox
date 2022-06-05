import { withRouter } from 'react-router-dom';
import s from './Feature.module.scss';
import App from '../../../Markup/FeatureTemplate';
import BaseSelectFeature from './BaseSelectFeature';

const Feature = ({ viewTitle, featureTitle, location }) => {
  const description = `Custom drop down Select, use Styled Components`;

  return (
    <App
      viewTitle={viewTitle}
      featureTitle={featureTitle}
      description={description}
    >
      <div className={s.Feature}>
        <BaseSelectFeature />
      </div>
    </App>
  );
};

export default withRouter(Feature);
