// import { useState, useContext } from 'react';
import React from 'react';
// import Context from '../../../../Context';

const Recursion = ({ views, tree, setTree }) => {
  console.log(0, 'Recursion');
  // const [tree, setTree] = useState(null);

  // const { views } = useContext(Context);

  const viewStep = 1;
  let viewCount = 0;
  let featureIndex = 0;
  let arr = [];

  // useEffect(() => {
  //   setTree(arr);
  // }, [arr]);

  const iterateFeatures = () => {
    const featureStop = featureIndex >= views[viewCount].links.length;
    const feature = views[viewCount].links[featureIndex];

    if (featureStop) return;

    feature.href !== '/' && arr.push(feature);

    featureIndex += 1;

    iterateFeatures();
  };

  const iterateViews = () => {
    console.log(1, 'iterateViews');

    const viewRun = viewCount < views.length;
    const viewStop = viewCount >= views.length;

    featureIndex = 0;

    viewRun && iterateFeatures();

    viewStop && tree.length === 0 && setTree(arr);

    if (viewStop) return;

    viewCount += viewStep;

    setTimeout(iterateViews, 500);
  };

  tree.length === 0 && iterateViews();

  console.log('tree', tree);
  return <p>{`${tree.length}`}</p>;
};

export default React.memo(Recursion);

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
