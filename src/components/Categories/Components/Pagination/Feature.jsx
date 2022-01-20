import { useState, useEffect } from 'react';
import CategorySection from '../../../Markup/Sections/CategorySection';
import Content from './Content';
import SourcePanel from '../../../Markup/SourcePanel';
import sprite from '../../../../svg/sprite.svg';
import data from './data.json';

const Feature = ({ viewTitle, featureTitle }) => {
  const [paginatedList, setPaginatedList] = useState([]);
  const [currentList, setCurrentList] = useState(1);
  const [perList] = useState(10);
  const lastElement = currentList * perList;
  const firstElement = lastElement - perList;
  const currentRows = paginatedList
    ?.reverse()
    ?.slice(firstElement, lastElement);

  useEffect(() => {
    setPaginatedList(data.users);
  }, []);

  const paginate = step => {
    firstElement !== 0 && step === 'prev' && setCurrentList(prev => prev - 1);
    firstElement + currentRows.length !== paginatedList?.length &&
      step === 'next' &&
      setCurrentList(prev => prev + 1);
  };

  return (
    <CategorySection>
      <Content featureTitle={featureTitle}>
        {/* <span>{paginatedList}</span> */}

        <div>
          <div>
            <h1>H1</h1>
            {data.users?.length > 0 ? (
              <ul>
                {currentRows.map(el => (
                  <li key={el}>{el}</li>
                ))}
              </ul>
            ) : (
              <div>{/* <Spinner /> */}</div>
              // <ZeroItem />
            )}

            <div>
              <button onClick={() => paginate('prev')}>
                <svg width="14" height="14" fill="white">
                  <use href={sprite + '#icon-arrow-left'}></use>
                </svg>
              </button>
              <span>{`${currentList} / ${
                Math.ceil(paginatedList?.length / 10) || 1
              }`}</span>
              <button onClick={() => paginate('next')}>
                <svg width="14" height="14" fill="white">
                  <use href={sprite + '#icon-arrow-right'}></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Content>

      <SourcePanel viewTitle={viewTitle} featureTitle={featureTitle} />
    </CategorySection>
  );
};

export default Feature;
