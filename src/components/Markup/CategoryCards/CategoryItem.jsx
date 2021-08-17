import PropTypes from 'prop-types';
import { Fragment } from 'react';
import s from './CategoryCards.module.scss';

const CategoryItem = ({ view }) => {
  return (
    <li className={s.CategoryItem}>
      <h2 className={s.CategoryItem__title}>{view.title}</h2>
      <>
        {view.links.map(link => (
          <Fragment key={link.href}>
            {link.href !== '/' && (
              <a
                key={link.href}
                className={s.CategoryItem__link}
                href={link.href}
              >
                {link.anchor}
              </a>
            )}
          </Fragment>
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
