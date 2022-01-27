import s from './Information.module.scss';

const InformationList = ({ information }) => {
  return (
    <div className={s.Information__listWrap}>
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

      <span className={s.Information__title}>General:</span>

      <ul className={s.Information__generalList}>
        <li className={s.Information__generalItem}>
          <div className={s.Information__generalValueWrap}>
            <span className={s.Information__generalKey}>
              Views: <span className={s.Information__generalValue}>5</span>
            </span>
            <span className={s.Information__generalKey}>
              Features: <span className={s.Information__generalValue}>8</span>
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default InformationList;
