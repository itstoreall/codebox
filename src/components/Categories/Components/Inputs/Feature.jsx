import { withRouter } from 'react-router-dom';
import s from './Feature.module.scss';
import App from '../../../Markup/FeatureTemplate';
import Input from './Input';

const Feature = ({ viewTitle, featureTitle, location }) => {
  const description = `Different settings for using the input tag`;

  return (
    <App
      viewTitle={viewTitle}
      featureTitle={featureTitle}
      description={description}
    >
      <div className={s.Feature}>
        <Input />
      </div>
    </App>
  );
};

export default withRouter(Feature);
