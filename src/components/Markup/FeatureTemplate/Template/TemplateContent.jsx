import s from './Template.module.scss';
import App from '../App';

const TemplateContent = ({ featureTitle, description, children }) => (
  <div className={s.Template__content}>
    <App featureTitle={featureTitle} description={description}>
      {children}
    </App>
  </div>
);

export default TemplateContent;
