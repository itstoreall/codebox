import { useState } from 'react';
import FeatureContext from './FeatureContext';
import CategorySection from '../../../Markup/Sections/CategorySection';
import Content from './Content';
import BlockOne from './BlockOne';
import BlockTwo from './BlockTwo';
import SourcePanel from '../../../Markup/SourcePanel';

const Feature = ({ viewTitle, featureTitle }) => {
  const [contextValue, setContextValue] = useState(null);

  return (
    <CategorySection>
      <Content featureTitle={featureTitle}>
        <FeatureContext.Provider value={{ contextValue, setContextValue }}>
          <div>
            <BlockOne />
            <BlockTwo />
          </div>
        </FeatureContext.Provider>
      </Content>

      <SourcePanel viewTitle={viewTitle} featureTitle={featureTitle} />
    </CategorySection>
  );
};

export default Feature;
