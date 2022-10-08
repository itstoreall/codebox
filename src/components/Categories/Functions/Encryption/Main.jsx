import { useState, useMemo } from 'react';
import s from './Feature.module.scss';
import getUrl from './encryptUrlParams';
import decryptUrlParamsHandler from './decryptUrlParams';

const Main = () => {
  const [url, setUrl] = useState('');
  const [str, setStr] = useState('');

  const encryptParams = () => {
    const result = getUrl();
    setUrl(result.url);
    setStr(result.encryptedLink);
  };

  useMemo(() => console.log('encrypted url:', url), [url]);

  const decryptParams = string => {
    if (string === '') return console.log('no encrypted string');
    const result = decryptUrlParamsHandler({ params: string });
    console.log('decrypted result:', result);
  };

  return (
    <div>
      <button className={s.Button} onClick={() => encryptParams()}>
        Encrypt
      </button>

      <button className={s.Button} onClick={() => decryptParams(str)}>
        Decrypt
      </button>

      {url?.length !== 0 && (
        <p style={{ paddingTop: '20px' }}>
          {'to view result, open the console'}
        </p>
      )}
    </div>
  );
};

export default Main;
