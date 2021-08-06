import s from './Article.module.scss';

const Article = ({ children }) => (
  <article className={s.Article}>{children}</article>
);

export default Article;
