import { useContext, useEffect } from 'react';
import FeatureContext from './FeatureContext';
import { v4 as uuid } from 'uuid';

const BlockOne = () => {
  const { contextValue, setContextValue } = useContext(FeatureContext);

  useEffect(() => setContextValue(uuid()), []);

  return (
    <div>{`BlockOne sent: ${contextValue && contextValue.slice(0, -28)}`}</div>
  );
};

export default BlockOne;
