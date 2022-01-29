import { useState } from 'react';
import s from './Feature.module.scss';

const Input = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputStatus, setInputStatus] = useState('input is empty');

  const max = 8;

  const statusHandler = value => {
    value.length <= max && value.length > 0 && !Number(value.slice(-1))
      ? setInputStatus('numbers only')
      : value.length > 0 && value.length < max
      ? setInputStatus('must be eight characters...')
      : value.length === max && Number(value.slice(-1))
      ? setInputStatus('successful')
      : value.length > max
      ? setInputStatus('it is done')
      : setInputStatus('enter something...');
  };

  const inputHandler = value => {
    const isDot = value.slice(-1) === '.';

    value.length <= max && Number.isInteger(+value) && !isDot
      ? setInputValue(value)
      : setInputValue(inputValue === null ? '' : inputValue);

    statusHandler(value);
  };

  return (
    <>
      <p className={s.inputTitle}>
        The input in which only numbers can be entered:
      </p>

      <input
        className={s.Input}
        type="text"
        placeholder="0"
        value={inputValue}
        onChange={e => {
          inputHandler(e.target.value);
        }}
      />

      <div className={s.Input__status} error>
        <span
          className={
            inputStatus === 'numbers only'
              ? s.Input__error
              : inputStatus === 'successful'
              ? s.Input__successful
              : inputStatus === 'it is done' && s.Input__done
          }
        >
          {inputStatus}
        </span>
      </div>
    </>
  );
};

export default Input;
