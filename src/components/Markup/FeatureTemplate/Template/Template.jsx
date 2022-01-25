import CategorySection from '../../Sections/CategorySection';
import TemplateContent from './TemplateContent';
import SourcePanel from '../../SourcePanel';

const Template = ({ viewTitle, featureTitle, description, children }) => {
  return (
    <CategorySection>
      <TemplateContent
        viewTitle={viewTitle}
        featureTitle={featureTitle}
        description={description}
      >
        {children}
      </TemplateContent>
      <SourcePanel viewTitle={viewTitle} featureTitle={featureTitle} />
    </CategorySection>
  );
};

export default Template;
