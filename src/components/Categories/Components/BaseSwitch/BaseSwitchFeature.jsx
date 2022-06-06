import { useState } from 'react';
import InputContext from './hooks/InputContext';
import Switch from './Switch';

const BaseSwitchFeature = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <InputContext.Provider
      value={{
        isChecked,
        setIsChecked,
      }}
    >
      <Switch
        name="base_switch"
        text={'Switch it'}
        description={'Switch description'}
      />
    </InputContext.Provider>
  );
};

export default BaseSwitchFeature;
