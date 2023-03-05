import { useState } from 'react';
import s from './Feature.module.scss';

const UuidGenerator = () => {
  const [uuid, setUuid] = useState('empty string');

  const generate = () => {
    setUuid(
      'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, char => {
        const random = (Math.random() * 16) | 0;
        const value = char === 'x' ? random : (random & 0x3) | 0x8;

        return value.toString(16);
      }),
    );
  };

  return (
    <div>
      <p>{`uuid:`}</p>
      <p style={{ marginBottom: '20px' }}>{`${uuid}`}</p>
      <button className={s.Button} onClick={() => generate()}>
        Generate
      </button>
    </div>
  );
};

export default UuidGenerator;
