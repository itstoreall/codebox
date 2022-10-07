import { withRouter } from 'react-router-dom';
import s from './Feature.module.scss';
import App from '../../../Markup/FeatureTemplate';
import Handler from './Handler';

const Feature = ({ viewTitle, featureTitle, location }) => {
  const description = `Encrypt and decrypt url parameters (useMemo)`;

  return (
    <App
      viewTitle={viewTitle}
      featureTitle={featureTitle}
      description={description}
    >
      <div className={s.Feature}>
        <Handler />
      </div>
    </App>
  );
};

export default withRouter(Feature);
