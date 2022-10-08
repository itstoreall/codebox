import { useMemo } from 'react';
import getUrl from './encrypt';
import decryptUrlParamsHandler from './decryptUrlParamsHandler';

// let url = ''
// '111701162d00595142090116070c050a102d00595542011c140d1605100d0b0a200510015955525354575750565c564210100859555252515452575c5c56';

const Main = () => {
  let url = '';
  const hi = '★(◔.◔)★';
  useMemo(() => console.log(hi), []);

  const ec = () => {
    const result = getUrl();
    url = result;
    console.log('ec url:', url);
  };

  useMemo(() => ec(), []);

  const dc = string => {
    const result = decryptUrlParamsHandler({ params: string });
    console.log('dc result:', result);
  };

  useMemo(() => dc(url), [url]);

  return (
    <div>
      <p>{hi}</p>
    </div>
  );
};

export default Main;
