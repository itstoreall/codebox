import s from './Admin.module.scss';
import ViewItemCard from './ViewItemCard';

const ViewList = ({ allViews, refetch }) => {
  return (
    <ul className={s.ViewList__list}>
      {allViews?.map(view => (
        <li className={s.ViewList__item} key={view.path}>
          <ViewItemCard view={view} refetch={refetch} />
        </li>
      ))}
    </ul>
  );
};

export default ViewList;
