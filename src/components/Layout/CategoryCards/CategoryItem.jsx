import PropTypes from 'prop-types';
import s from './CategoryCards.module.scss';

const CategoryItem = ({ view }) => {
  return (
    <li className={s.CategoryItem}>
      <h2 className={s.categoryTitle}>{view.title}</h2>
      <>
        {view.links.map(link => (
          <a key={link.anchor} className={s.categoryLink} href={link.href}>
            {link.anchor}
          </a>
        ))}
      </>
    </li>
  );
};

CategoryItem.propTypes = {
  view: PropTypes.shape({
    title: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
};

export default CategoryItem;
