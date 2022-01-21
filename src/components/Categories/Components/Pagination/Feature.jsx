import { useState, useEffect } from 'react';
import CategorySection from '../../../Markup/Sections/CategorySection';
import Content from './Content';
import List from './List';
import NavPanel from './NavPanel';
import SourcePanel from '../../../Markup/SourcePanel';
import data from './data.json';

const Feature = ({ viewTitle, featureTitle }) => {
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
    <CategorySection>
      <Content featureTitle={featureTitle}>
        <List data={data} currentRows={currentRows} />

        <NavPanel
          paginatedList={paginatedList}
          currentList={currentList}
          paginate={paginate}
        />
      </Content>

      <SourcePanel viewTitle={viewTitle} featureTitle={featureTitle} />
    </CategorySection>
  );
};

export default Feature;
