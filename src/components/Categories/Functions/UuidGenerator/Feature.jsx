import { withRouter } from 'react-router-dom';
import s from './Feature.module.scss';
import App from '../../../Markup/FeatureTemplate';
import UuidGenerator from './UuidGenerator';

const Feature = ({ viewTitle, featureTitle, location }) => {
  const description = `A simple uuid generator`;

  return (
    <App
      viewTitle={viewTitle}
      featureTitle={featureTitle}
      description={description}
    >
      <div className={s.Feature}>
        <UuidGenerator />
      </div>
    </App>
  );
};

export default withRouter(Feature);
