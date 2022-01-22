import CategorySection from '../../../Markup/Sections/CategorySection';
import Content from './Content';
import App from './App';
import SourcePanel from '../../../Markup/SourcePanel';

const Feature = ({ viewTitle, featureTitle }) => {
  return (
    <CategorySection>
      <Content featureTitle={featureTitle}>
        <App />
      </Content>
      <SourcePanel viewTitle={viewTitle} featureTitle={featureTitle} />
    </CategorySection>
  );
};

export default Feature;
