import s from './Container.module.scss';

const { log } = console;

log(s);

export default function Container({ children }) {
  return <div className={s.Container}>{children}</div>;
}
