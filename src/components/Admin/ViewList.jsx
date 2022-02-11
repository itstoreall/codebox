import s from './Admin.module.scss';
import DeleteViewButton from './DeleteViewButton';

const ViewList = ({ allViews, refetch }) => {
  return (
    <ul className={s.ViewList__list}>
      {allViews?.map(view => (
        <li className={s.ViewList__item} key={view.path}>
          <span className={s.ViewList__title}>{view?.title}</span>
          <DeleteViewButton id={view?.id} refetch={refetch} />
        </li>
      ))}
    </ul>
  );
};

export default ViewList;
