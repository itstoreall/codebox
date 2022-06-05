import { useContext } from 'react';
import InputContext from './hooks/InputContext';
import {
  BaseInputWrap,
  BaseInput,
  BaseInputSubtitle,
  BaseInputDescription,
} from './Input.styles.js';

const Input = ({ subtitle, type, name, placeholder, disable, description }) => {
  const { inputValue, setInputValue, inputStatus, setInputStatus } =
    useContext(InputContext);

  console.log(`Input render (${inputStatus})`);

  const max = 30;

  const inputHandler = value => {
    value.length <= max && name === 'input_name'
      ? setInputValue(value)
      : setInputValue(value);

    setInputStatus(value);
  };

  return (
    <BaseInputWrap>
      <BaseInputSubtitle>{subtitle}</BaseInputSubtitle>
      <BaseInput
        type={type}
        name={name}
        placeholder={placeholder}
        disabled={disable}
        autoComplete="off"
        value={name === 'input_name' ? inputValue : inputValue}
        onChange={e => {
          inputHandler(e.target.value);
        }}
      />
      <BaseInputDescription>{description}</BaseInputDescription>
    </BaseInputWrap>
  );
};

export default Input;
