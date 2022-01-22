import { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import History from '../components/Markup/History';
import { useStyles } from './viewsStyles';
import Article from '../components/Markup/Article';
import CategoryCard from '../components/Markup/CategoryCards';
import Context from '../Context';

const Home = () => {
  const viewTitle = 'Categories';
  const { views } = useContext(Context);
  const s = useStyles();

  return (
    <>
      <History />

      <Article>
        <h1 className={s.viewTitle}>{viewTitle}</h1>
        <CategoryCard key={views.title} views={views} />
      </Article>
    </>
  );
};

export default withRouter(Home);
