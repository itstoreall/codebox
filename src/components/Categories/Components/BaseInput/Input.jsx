import { useContext } from 'react';
import InputContext from './hooks/InputContext';
import {
  BaseInputWrap,
  BaseInput,
  BaseInputSubtitle,
  BaseInputDescription,
} from './Input.styles.js';

const Input = ({ subtitle, type, name, placeholder, disable, description }) => {
  const {
    inputValue,
    setInputValue,
    inputTwoValue,
    setInputTwoValue,
    inputStatus,
    setInputStatus,
    // inputTwoStatus,
    setInputTwoStatus,
  } = useContext(InputContext);

  console.log(`Input render (${inputStatus})`);

  const max = 30;

  const inputHandler = value => {
    // value:
    value.length <= max && name === 'input_name'
      ? setInputValue(value)
      : name === 'input_two_name' && setInputTwoValue(value);

    // status:
    name === 'input_name'
      ? setInputStatus(value)
      : name === 'input_two_name' && setInputTwoStatus(value);
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
        value={
          name === 'input_name'
            ? inputValue
            : name === 'input_two_name' && inputTwoValue
        }
        onChange={e => {
          inputHandler(e.target.value);
        }}
      />
      <BaseInputDescription>{description}</BaseInputDescription>
    </BaseInputWrap>
  );
};

export default Input;
