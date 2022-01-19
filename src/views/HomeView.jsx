import { useContext } from 'react';
import Article from '../components/Markup/Article';
import CategoryCard from '../components/Markup/CategoryCards';
import Context from '../Context';
import { useStyles } from './viewsStyles';

export default function Home() {
  const viewTitle = 'Categories';
  const { views } = useContext(Context);
  const s = useStyles();

  return (
    <Article>
      <h1 className={s.viewTitle}>{viewTitle}</h1>
      <CategoryCard key={views.title} views={views} />
    </Article>
  );
}
