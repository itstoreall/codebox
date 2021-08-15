import PropTypes from 'prop-types';
import { v4 as uukey } from 'uuid';
import CategoryItem from './CategoryItem';
import s from './CategoryCards.module.scss';

const CategoryCards = ({ views }) => (
  <section className={s.CategoryCards}>
    <ul className={[s.list, s.CategoryList].join(' ')}>
      {views.map(view => (
        <CategoryItem key={uukey} view={view} />
      ))}
    </ul>
  </section>
);

CategoryCards.propTypes = {
  views: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CategoryCards;
