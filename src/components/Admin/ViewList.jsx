import { useContext } from 'react';
import s from './Admin.module.scss';
import Context from '../../Context';
import ViewItemCard from './ViewItemCard';

const ViewList = () => {
  const { allViews: views, refetch } = useContext(Context);

  return (
    <div className={s.ViewList__wrap}>
      <ul className={s.ViewList__list}>
        {views?.map(view => (
          <li className={s.ViewList__item} key={view.path}>
            <ViewItemCard view={view} refetch={refetch} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewList;
