import CategorySection from '../../../Markup/Sections/CategorySection';
import Content from './Content';
import SourcePanel from '../../../Markup/SourcePanel';

const Feature = ({ viewTitle, featureTitle }) => {
  return (
    <CategorySection>
      <Content featureTitle={featureTitle}>
        <p>{`The ${featureTitle} content will be here...`}</p>
      </Content>

      <SourcePanel viewTitle={viewTitle} featureTitle={featureTitle} />
    </CategorySection>
  );
};

export default Feature;
