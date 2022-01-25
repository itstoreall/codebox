import { useState, useEffect } from 'react';
import App from '../../../Markup/FeatureTemplate';
import s from './Feature.module.scss';
import List from './List';
import NavPanel from './NavPanel';
import data from './data.json';

const Feature = ({ viewTitle, featureTitle }) => {
  const description = `This pagination allows you to divide the list into pages of ten items.`;
  const [paginatedList, setPaginatedList] = useState([]);
  const [currentList, setCurrentList] = useState(1);
  const [perList] = useState(10);
  const lastElement = currentList * perList;
  const firstElement = lastElement - perList;
  const currentRows = paginatedList?.slice(firstElement, lastElement);

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
    <App
      viewTitle={viewTitle}
      featureTitle={featureTitle}
      description={description}
    >
      <div className={s.Feature}>
        <List data={data} currentRows={currentRows} />

        <NavPanel
          paginatedList={paginatedList}
          currentList={currentList}
          paginate={paginate}
        />
      </div>
    </App>
  );
};

export default Feature;
