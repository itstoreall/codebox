import { useState } from 'react';
import InputContext from './hooks/InputContext';
import Input from './Input';

const BaseInputFeature = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputStatus, setInputStatus] = useState('input is empty');

  return (
    <>
      <InputContext.Provider
        value={{
          inputValue,
          setInputValue,
          inputStatus,
          setInputStatus,
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
      </InputContext.Provider>

      <div>
        {inputStatus === 'input is empty'
          ? 'Status: input is empty'
          : `Status: string length is ${inputStatus.length}`}
      </div>
    </>
  );
};

export default BaseInputFeature;
