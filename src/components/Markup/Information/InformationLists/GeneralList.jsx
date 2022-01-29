import { useContext } from 'react';
import s from '../Information.module.scss';
import Context from '../../../../Context';

const GeneralList = () => {
  const { localState } = useContext(Context);

  return (
    <>
      <span className={s.Information__title}>General:</span>

      <ul className={s.Information__generalList}>
        <li className={s.Information__generalItem}>
          <div className={s.Information__generalValueWrap}>
            <span className={s.Information__generalKey}>
              Views:{' '}
              <span className={s.Information__generalValue}>
                {localState.quantity.views}
              </span>
            </span>
            <span className={s.Information__generalKey}>
              Features:{' '}
              <span className={s.Information__generalValue}>
                {localState.quantity.features}
              </span>
            </span>
          </div>
        </li>
      </ul>
    </>
  );
};

export default GeneralList;
