import { useState } from 'react';
import s from './Feature.module.scss';
import FeatureContext from './FeatureContext';
import App from '../../../Markup/FeatureTemplate';
import BlockOne from './BlockOne';
import BlockTwo from './BlockTwo';

const Feature = ({ viewTitle, featureTitle }) => {
  const description = `An example of using the useContext react hook.`;
  const [contextValue, setContextValue] = useState(null);

  return (
    <App
      viewTitle={viewTitle}
      featureTitle={featureTitle}
      description={description}
    >
      <div className={s.Feature}>
        <FeatureContext.Provider value={{ contextValue, setContextValue }}>
          <div className={s.Feature__blockWrap}>
            <BlockOne />
            <BlockTwo />
          </div>
        </FeatureContext.Provider>
      </div>
    </App>
  );
};

export default Feature;
