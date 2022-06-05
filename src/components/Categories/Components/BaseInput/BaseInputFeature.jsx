import { useState } from 'react';
import InputContext from './hooks/InputContext';
import Input from './Input';

const BaseInputFeature = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputTwoValue, setInputTwoValue] = useState('');
  const [inputStatus, setInputStatus] = useState('input is empty');
  const [inputTwoStatus, setInputTwoStatus] = useState('input two is empty');

  return (
    <>
      <InputContext.Provider
        value={{
          inputValue,
          setInputValue,
          inputTwoValue,
          setInputTwoValue,
          inputStatus,
          setInputStatus,
          inputTwoStatus,
          setInputTwoStatus,
        }}
      >
        <Input
          type={'text'}
          subtitle={'Subtitle *'}
          name={'input_name'}
          placeholder={'Placeholder'}
          description={'Description'}
          disable={false}
        />

        <Input
          type={'number'}
          subtitle={'Subtitle two *'}
          name={'input_two_name'}
          placeholder={'Placeholder two'}
          description={'Description two'}
          disable={false}
        />
      </InputContext.Provider>

      <div style={{ marginBottom: 20 }}>
        {inputStatus === 'input is empty'
          ? 'Status: input is empty'
          : `Status: string length is ${inputStatus.length}`}
      </div>

      <div>
        {inputTwoStatus === 'input two is empty'
          ? `Status: ${inputTwoStatus}`
          : `Status: string length is ${inputTwoStatus.length}`}
      </div>
    </>
  );
};

export default BaseInputFeature;
