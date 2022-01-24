import s from './Information.module.scss';

const InformationList = ({ localState }) => {
  console.log('localState -->', localState);

  return (
    <ul className={s.Information__list}>
      <li className={s.Information__item}>
        <span className={s.Information__itemKey}>{`Current age: `}</span>
        {localState.page}
      </li>
      <li className={s.Information__item}>
        <span className={s.Information__itemKey}>{`Width: `}</span>
        {localState.viewport.width}
      </li>
    </ul>
  );
};

export default InformationList;
