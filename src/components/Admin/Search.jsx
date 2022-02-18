import { useEffect } from 'react';
import { useState } from 'react';
import refs from '../../styles/refs';
import { CustomInput } from './uiElements';

const Search = ({ allViews, setSearchResult }) => {
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => resultHandler(searchValue), [allViews]);

  const resultHandler = value =>
    setSearchResult(allViews?.filter(view => view.id.includes(value)));

  const searchValueHandler = e => {
    setSearchValue(e.target.value);
    resultHandler(e.target.value);
  };

  return (
    <CustomInput
      padding={'10px 10px'}
      border={`1px solid ${refs.primaryTextColor}`}
      borderRadius={'4px'}
      margin={'0 0 10px 0'}
      value={searchValue}
      onChange={e => searchValueHandler(e)}
    />
  );
};

export default Search;
