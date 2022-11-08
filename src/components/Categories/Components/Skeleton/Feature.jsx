import { withRouter } from 'react-router-dom';
import s from './Feature.module.scss';
import App from '../../../Markup/FeatureTemplate';
import CardSkeleton from './CardSkeleton';

const Feature = ({ viewTitle, featureTitle, location }) => {
  const description = `React loader Skeleton`;

  return (
    <App
      viewTitle={viewTitle}
      featureTitle={featureTitle}
      description={description}
    >
      <div className={s.Feature}>
        <CardSkeleton />
      </div>
    </App>
  );
};

export default withRouter(Feature);
