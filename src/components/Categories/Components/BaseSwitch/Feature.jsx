import { withRouter } from 'react-router-dom';
import s from './Feature.module.scss';
import App from '../../../Markup/FeatureTemplate';
import BaseSwitchFeature from './BaseSwitchFeature';

const Feature = ({ viewTitle, featureTitle, location }) => {
  const description = `Custom Switch, use Styled Components`;

  return (
    <App
      viewTitle={viewTitle}
      featureTitle={featureTitle}
      description={description}
    >
      <div className={s.Feature}>
        <BaseSwitchFeature />
      </div>
    </App>
  );
};

export default withRouter(Feature);
