import { withRouter } from 'react-router-dom';
import s from './Feature.module.scss';
import App from '../../../Markup/FeatureTemplate';
import ManePage from './MainPage';

const Feature = ({ viewTitle, featureTitle, location }) => {
  const description = `The Modal using Compound Components`;

  return (
    <App
      viewTitle={viewTitle}
      featureTitle={featureTitle}
      description={description}
    >
      <div className={s.Feature}>
        <ManePage />
      </div>
    </App>
  );
};

export default withRouter(Feature);
