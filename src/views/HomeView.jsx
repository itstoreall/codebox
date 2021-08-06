import { useContext } from 'react';
import Article from '../components/Layout/Article';
import CategoryCard from '../components/Layout/CategoryCards';
import Context from '../Context';
import { useStyles } from './viewsStyles';

// const { log } = console;

export default function Home() {
  const { views } = useContext(Context);
  const s = useStyles();

  return (
    <Article>
      <h1 className={s.viewTitle}>Categories</h1>
      <CategoryCard key={views.title} views={views} />
    </Article>
  );
}
