import { useContext } from 'react';
import Context from '../../../../Context';

const Recursion = () => {
  console.log(0, 'Recursion');

  const { views } = useContext(Context);

  const viewStep = 1;
  let viewCount = 0;
  let featureIndex = 0;
  let arr = [];

  const iterateFeatures = () => {
    const feature = views[viewCount].links[featureIndex];

    if (featureIndex >= views[viewCount].links.length) return;

    feature.href !== '/' && arr.push(feature);

    featureIndex += 1;

    iterateFeatures();
  };

  const example = () => {
    console.log(1, 'example');

    const run = viewCount < views.length;
    const stop = viewCount >= views.length;

    featureIndex = 0;

    run && iterateFeatures();

    if (stop) return console.log('arr ------------->', arr);

    viewCount += viewStep;

    setTimeout(example, 2000);
  };
  viewCount === 0 && example();

  return <p>Open your console</p>;
};

export default Recursion;

/*

// ---

Example
console.log(1, 'Example');

let result = 0;
const step = 1;

const example = () => {
  result += step;
  console.log('result:', result);
  if (result >= 10) return result;
  setTimeout(example, 100);
};
example();

// ---

// Move block
console.log(2, 'Move block');

// let offset = 0;

const [offset, setOffset] = useState(0);

console.log('offset 1 -------->', offset);

const moveBlock = async direction => {
  if (offset > 50 || offset < -50) return;

  direction === 'right' ? setOffset(offset + 10) : setOffset(offset - 10);
};

return (
    <>
      <div style={{ left: `${offset}px` }} className={s.block}></div>
      <div>
        <button
          disabled={offset === -50}
          className={s.button}
          onClick={() => moveBlock('left')}
        >
          Left
        </button>
        <button
          disabled={offset === 50}
          className={s.button}
          onClick={() => moveBlock('right')}
        >
          Right
        </button>
      </div>
    </>
  );
*/
