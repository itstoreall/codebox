import { useState } from 'react';
import s from './Feature.module.scss';

const Input = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputStatus, setInputStatus] = useState('input is empty');

  const handleChange = value => {
    const isDot = value.slice(-1) === '.';

    // !Number(value.slice(-1)) && console.log('000', value.slice(-1));

    console.log('value, inputValue', value.slice(-1), inputValue);

    value.length <= 8 && Number.isInteger(+value) && !isDot
      ? setInputValue(value)
      : setInputValue(inputValue === null ? '' : inputValue);

    value && !Number(value.slice(-1))
      ? setInputStatus('numbers only')
      : value.length > 0 && value.length < 8
      ? setInputStatus('must be eight characters...')
      : value.length === 8
      ? setInputStatus('successful')
      : value.length > 8
      ? setInputStatus('it is done')
      : setInputStatus('enter something...');
  };

  const statusHandler = () => (
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
  );

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
          handleChange(e.target.value);
        }}
      />

      {statusHandler()}
    </>
  );
};

export default Input;
