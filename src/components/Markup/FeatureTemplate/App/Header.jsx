import s from './App.module.scss';

const Header = ({ featureTitle, description }) => {
  return (
    <div className={s.App__header}>
      <h1 className={s.App__title}>{featureTitle}</h1>
      <p className={s.App__description}>{description}</p>
    </div>
  );
};

export default Header;
