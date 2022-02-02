import { useState } from 'react';
import s from './Feature.module.scss';
import sprite from '../../../../svg/sprite.svg';

const MovingSquare = () => {
  const [offset, setOffset] = useState(0);

  const limit = 50;
  const step = 10;

  const moveBlock = async direction => {
    if (offset > limit || offset < -limit) return;
    direction === 'right' ? setOffset(offset + step) : setOffset(offset - step);

    console.log(
      `moved to the ${direction}`,
      direction === 'right' ? offset + step : offset - step,
    );
  };

  return (
    <>
      <div style={{ left: `${offset}px` }} className={s.block}></div>
      <div className={s.buttonWrap}>
        <button
          disabled={offset === -limit}
          className={s.button}
          onClick={() => moveBlock('left')}
        >
          <svg width="18" height="18" fill="white">
            <use href={sprite + '#icon-arrow-left'}></use>
          </svg>
        </button>

        <button
          disabled={offset === limit}
          className={s.button}
          onClick={() => moveBlock('right')}
        >
          <svg width="18" height="18" fill="white">
            <use href={sprite + '#icon-arrow-right'}></use>
          </svg>
        </button>
      </div>
    </>
  );
};

export default MovingSquare;
