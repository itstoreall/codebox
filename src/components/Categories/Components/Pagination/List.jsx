import s from './Feature.module.scss';

const List = ({ data, currentRows }) => {
  return (
    <>
      {data.users?.length > 0 ? (
        <ul className={s.list}>
          {currentRows.map(el => (
            <li className={s.list__item} key={el}>
              <spam className={s.list__itemText}>Number of user: </spam>
              <spam className={s.list__itemElement}>{el}</spam>
            </li>
          ))}
        </ul>
      ) : (
        <div>{'Loading...'}</div>
      )}
    </>
  );
};

export default List;
