import { useContext } from 'react';
import FeatureContext from './FeatureContext';

const BlockTwo = () => {
  const { contextValue } = useContext(FeatureContext);

  return (
    <div>{`BlockTwo got - ${contextValue && contextValue.slice(0, -28)}`}</div>
  );
};

export default BlockTwo;
