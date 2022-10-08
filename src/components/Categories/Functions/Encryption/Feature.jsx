import { withRouter } from 'react-router-dom';
import s from './Feature.module.scss';
import App from '../../../Markup/FeatureTemplate';
import Main from './Main';

const Feature = ({ viewTitle, featureTitle, location }) => {
  const description = `Encrypt and decrypt url parameters (useMemo, useState, only numbers uuid)`;

  return (
    <App
      viewTitle={viewTitle}
      featureTitle={featureTitle}
      description={description}
    >
      <div className={s.Feature}>
        <Main />
      </div>
    </App>
  );
};

export default withRouter(Feature);
