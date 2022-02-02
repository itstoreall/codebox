import { useState, useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
// import { useQuery, useMutation } from '@apollo/client';
import InfoPanel from '../components/Markup/InfoPanel';
import { useStyles } from './viewsStyles';
import Article from '../components/Markup/Article';
import CategoryCard from '../components/Markup/CategoryCards';
import Context from '../Context';
// import { GET_ALL_VIEWS, GET_ONE_VIEW } from '../graphql/query/view';
// import { CREATE_VIEW } from '../graphql/mutation/view';

const Home = () => {
  const viewTitle = 'Categories';
  const { views } = useContext(Context);
  const s = useStyles();

  /*
  const { data, loading, error, refetch } = useQuery(GET_ALL_VIEWS, {
    // pollInterval: 1000,
  });
  const { data: oneViewData, loading: oneViewLoading } = useQuery(
    GET_ONE_VIEW,
    {
      variables: {
        id: 'v3',
      },
    },
  );
  const [newGqlView] = useMutation(CREATE_VIEW);
  const [gqlViews, setGqlViews] = useState();
  const [gqlViewTitle, setGqlViewTitle] = useState('');
  const [gqlViewPath, setGqlViewPath] = useState('');

  loading && console.log('loading......');
  console.log('oneViewData:', oneViewData);

  useEffect(() => !loading && setGqlViews(data.getAllViews), [data]);

  const addView = e => {
    e.preventDefault();

    console.log('!!!!!');

    newGqlView({
      variables: {
        input: {
          title: gqlViewTitle,
          path: gqlViewPath,
        },
      },
    }).then(({ data }) => {
      console.log('data --->', data);

      setGqlViewTitle('');
      setGqlViewPath('');
    });
  };

  const getAll = e => {
    e.preventDefault();
    refetch();
  };

  gqlViews && console.log('gqlViews', gqlViews);

  */

  return (
    <>
      <InfoPanel />
      <Article>
        <h1 className={s.viewTitle}>{viewTitle}</h1>
        <CategoryCard key={views.title} views={views} />

        {/* <div>
          <form>
            <input
              type="text"
              value={gqlViewTitle}
              onChange={e => setGqlViewTitle(e.target.value)}
            />
            <input
              type="text"
              value={gqlViewPath}
              onChange={e => setGqlViewPath(e.target.value)}
            />
            <button type="button" onClick={e => addView(e)}>
              Create view
            </button>
            <button type="button" onClick={e => getAll(e)}>
              Get view
            </button>
          </form>
        </div>

        <div>
          {gqlViews?.map(view => (
            <div>{view?.title}</div>
          ))}
        </div> */}
      </Article>
    </>
  );
};

export default withRouter(Home);
