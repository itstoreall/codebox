import s from './Information.module.scss';

const InformationList = ({ localState, information }) => {
  // console.log('InformationList --->', information.feature.title);

  return (
    <ul className={s.Information__list}>
      <li className={s.Information__item}>
        <span className={s.Information__itemKey}>{`View: `}</span>
        {/* {information.view.title !== '/' ? information.view.title : 'Home'} */}
      </li>
      {/* {information.feature.title && ( */}
      <li className={s.Information__item}>
        <span className={s.Information__itemKey}>{`Feature: `}</span>
        {/* {information.feature.title} */}
      </li>
      {/* )} */}
      <li className={s.Information__item}>
        <span className={s.Information__itemKey}>{`Viewport width: `}</span>
        {/* {localState.viewport.width} */}
      </li>
    </ul>
  );
};

export default InformationList;
