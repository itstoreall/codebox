import { withRouter } from 'react-router-dom';
import s from './Feature.module.scss';
import App from '../../../Markup/FeatureTemplate';
import BackToTopButton from './BackToTopButton';

const Feature = ({ viewTitle, featureTitle, location }) => {
  const description = `Using: window.scroll, behavior: 'smooth', styled-components`;

  return (
    <App
      viewTitle={viewTitle}
      featureTitle={featureTitle}
      description={description}
    >
      <div className={s.Feature}>
        <BackToTopButton />
        <p className={s.Feature__text}>[BackToTopContainer is here]</p>
      </div>
    </App>
  );
};

export default withRouter(Feature);
