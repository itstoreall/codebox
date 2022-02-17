import { useEffect, useState, useContext } from 'react';
import s from './Admin.module.scss';
import Context from '../../Context';
import ViewItemCard from './ViewItemCard';

const ViewList = ({ searchResult }) => {
  const [data, setData] = useState(null);

  const { allViews, toggleAppModal, refetch } = useContext(Context);

  useEffect(
    () => (!searchResult ? setData(allViews) : setData(searchResult)),
    [allViews, searchResult],
  );

  return (
    <div className={s.ViewList__wrap}>
      <ul className={s.ViewList__list}>
        {data?.map(view => (
          <li className={s.ViewList__item} key={view.path}>
            <ViewItemCard
              view={view}
              toggleAppModal={toggleAppModal}
              refetch={refetch}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewList;
