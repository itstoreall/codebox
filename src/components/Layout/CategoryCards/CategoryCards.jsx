import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';
import s from './CategoryCards.module.scss';

const CategoryCards = ({ views }) => (
  <section className={s.CategoryCards}>
    <ul className={[s.list, s.CategoryList].join(' ')}>
      {views.map(view => (
        <CategoryItem key={view.title} view={view} />
      ))}
    </ul>
  </section>
);

CategoryCards.propTypes = {
  views: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CategoryCards;
