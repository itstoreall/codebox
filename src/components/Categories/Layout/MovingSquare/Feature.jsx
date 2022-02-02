import { withRouter } from 'react-router-dom';
import s from './Feature.module.scss';
import App from '../../../Markup/FeatureTemplate';
import MovingSquare from './MovingSquare';

const Feature = ({ viewTitle, featureTitle, location }) => {
  const description = `Just a square and two buttons to move it`;

  return (
    <App
      viewTitle={viewTitle}
      featureTitle={featureTitle}
      description={description}
    >
      <div className={s.Feature}>
        <MovingSquare />
      </div>
    </App>
  );
};

export default withRouter(Feature);
