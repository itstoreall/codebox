import { useState, useContext } from 'react';
import Context from '../../Context';
import s from './Information.module.scss';
import sprite from '../../svg/sprite.svg';

const Information = () => {
  const [showInformation, setShowInformation] = useState(false);
  const { localState, setLocalState } = useContext(Context);

  console.log('Information --->', localState);

  const toggleInformation = () => setShowInformation(!showInformation);

  return (
    <div className={s.Information}>
      <button className={s.Information__btn} onClick={toggleInformation}>
        <svg width="18" height="18">
          <use href={sprite + '#icon-info'}></use>
        </svg>
      </button>

      {showInformation && (
        <div className={s.Information__listWrap}>
          <ul className={s.Information__list}>
            <li className={s.Information__item}>Info 1</li>
            <li className={s.Information__item}>Info 2</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Information;
