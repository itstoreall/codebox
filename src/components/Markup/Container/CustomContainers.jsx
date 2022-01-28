import s from './Container.module.scss';

export const HeaderContainer = ({ children }) => {
  return <div className={s.HeaderContainer}>{children}</div>;
};

export const FooterContainer = ({ children }) => {
  return <div className={s.FooterContainer}>{children}</div>;
};
