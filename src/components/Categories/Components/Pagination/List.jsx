import s from './Feature.module.scss';

const List = ({ data, currentRows }) => {
  return (
    <>
      {data.users?.length > 0 ? (
        <ul className={s.list}>
          {currentRows.map(el => (
            <li className={s.list__item} key={el}>
              <span className={s.list__itemText}>Number of user: </span>
              <span className={s.list__itemElement}>{el}</span>
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
