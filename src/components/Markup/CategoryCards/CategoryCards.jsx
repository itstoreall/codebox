// import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import constants from '../../../constants';
import PropTypes from 'prop-types';
// import CategoryItem from './CategoryItem';
import s from './CategoryCards.module.scss';

const CategoryCards = ({ views }) => {
  const { layout, components, functions, hooks } = constants.path;
  console.log('viewa ----->', views);

  return (
    <section className={s.CategoryCards}>
      <ul className={s.CategoryCards__container}>
        <li className={s.CategoryCards__item}>
          <NavLink className={s.CategoryCards__btn} to={layout}>
            Layout
          </NavLink>
        </li>
        <div className={s.CategoryCards__item}>
          <NavLink className={s.CategoryCards__btn} to={components}>
            Components
          </NavLink>
        </div>
        <div className={s.CategoryCards__item}>
          <NavLink className={s.CategoryCards__btn} to={functions}>
            Functions
          </NavLink>
        </div>
        <div className={s.CategoryCards__item}>
          <NavLink className={s.CategoryCards__btn} to={hooks}>
            Hooks
          </NavLink>
        </div>
      </ul>
    </section>
  );
};

CategoryCards.propTypes = {
  views: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CategoryCards;
