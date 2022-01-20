import s from './Feature.module.scss';

const Content = ({ featureTitle, children }) => (
  <>
    <h2 className={s.feature__title}>{`${featureTitle} feature`}</h2>
    <div className={s.feature__content}>{children}</div>
  </>
);

export default Content;
