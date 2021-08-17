import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { v4 as uukey } from 'uuid';
import CategoryItem from './CategoryItem';
import s from './CategoryCards.module.scss';

const CategoryCards = ({ views }) => (
  <section className={s.CategoryCards}>
    <ul className={[s.list, s.CategoryList].join(' ')}>
      {views.map(view => (
        <Fragment key={view.path}>
          {view.path !== '/' && <CategoryItem key={uukey()} view={view} />}
        </Fragment>
      ))}
    </ul>
  </section>
);

CategoryCards.propTypes = {
  views: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CategoryCards;
