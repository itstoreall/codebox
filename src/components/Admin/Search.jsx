import { useEffect } from 'react';
import { useState } from 'react';
import s from './Admin.module.scss';
import sprite from '../../svg/sprite.svg';
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
    <div className={s.Search__wrap}>
      <CustomInput
        padding={'10px 10px 10px 35px'}
        width={'100%'}
        border={`1px solid ${refs.primaryTextColor}`}
        borderRadius={'4px'}
        placeholder={'enter view id'}
        value={searchValue}
        onChange={e => searchValueHandler(e)}
      />

      <div className={s.Search__iconWrap}>
        <svg width="14" height="14" fill={refs.primaryTextColor}>
          <use href={sprite + '#icon-search'}></use>
        </svg>
      </div>
    </div>
  );
};

export default Search;
