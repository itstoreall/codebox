import s from './CategorySection.module.scss';

const CategorySection = ({ children }) => {
  return (
    <section className={s.CategorySection}>
      <h2 className={s.CategorySection__title}>Category section</h2>
      {children}
    </section>
  );
};

export default CategorySection;
