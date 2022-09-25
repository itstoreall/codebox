import { withRouter } from 'react-router-dom';
import s from './Feature.module.scss';
import App from '../../../Markup/FeatureTemplate';
import LocalDate from './LocalDate';

const Feature = ({ viewTitle, featureTitle, location }) => {
  const description = `Function for setting the current local date. Displayed in date and timestamp format.`;

  return (
    <App
      viewTitle={viewTitle}
      featureTitle={featureTitle}
      description={description}
    >
      <div className={s.Feature}>
        <LocalDate />
      </div>
    </App>
  );
};

export default withRouter(Feature);
