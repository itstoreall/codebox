import s from '../Information.module.scss';

const CurrentList = ({ information }) => {
  return (
    <ul className={s.Information__currentlist}>
      <li className={s.Information__item}>
        <span className={s.Information__itemKey}>{`View: `}</span>
        {information.nesting !== 0 ? information?.view?.title : 'Home'}
      </li>
      {information.nesting === 2 && (
        <li className={s.Information__item}>
          <span className={s.Information__itemKey}>{`Feature: `}</span>
          {information.feature.title}
        </li>
      )}
    </ul>
  );
};

export default CurrentList;
