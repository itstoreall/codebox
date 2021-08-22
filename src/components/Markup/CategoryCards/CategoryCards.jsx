import { Fragment } from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';
import s from './CategoryCards.module.scss';

const CategoryCards = ({ views }) => (
  <section className={s.CategoryCards}>
    <ul className={[s.list, s.CategoryList].join(' ')}>
      {views.map(view => (
        <Fragment key={view.v_id}>
          {view.path !== '/' && <CategoryItem view={view} />}
        </Fragment>
      ))}
    </ul>
  </section>
);

CategoryCards.propTypes = {
  views: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CategoryCards;
