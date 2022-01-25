import s from './Feature.module.scss';
import TemplateApp from '../../../Markup/FeatureTemplate';
import App from './App';

const Feature = ({ viewTitle, featureTitle }) => {
  const description = `You can use one reused modal for several features in a project.`;

  return (
    <TemplateApp
      viewTitle={viewTitle}
      featureTitle={featureTitle}
      description={description}
    >
      <div className={s.Feature}>
        <App />
      </div>
    </TemplateApp>
  );
};

export default Feature;
