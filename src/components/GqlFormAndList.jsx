import { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ALL_VIEWS, GET_ONE_VIEW } from '../graphql/query/view';
import { CREATE_VIEW } from '../graphql/mutation/view';

const GqlFormAndList = () => {
  const { data, loading, error, refetch } = useQuery(GET_ALL_VIEWS, {
    // pollInterval: 1000,
  });
  const { data: oneViewData } = useQuery(GET_ONE_VIEW, {
    variables: {
      id: 61,
    },
  });
  const [newGqlView] = useMutation(CREATE_VIEW);

  const [gqlViews, setGqlViews] = useState();
  const [gqlViewTitle, setGqlViewTitle] = useState('');
  const [gqlViewPath, setGqlViewPath] = useState('');

  loading && console.log('loading......');
  console.log('oneViewData:', oneViewData);

  useEffect(() => !loading && setGqlViews(data.getAllViews), [data]);

  const addView = async e => {
    e.preventDefault();

    try {
      const { data } = await newGqlView({
        variables: {
          input: {
            title: gqlViewTitle,
            path: gqlViewPath,
          },
        },
      });

      console.log('new view !!!', data);

      setGqlViewTitle('');
      setGqlViewPath('');
    } catch (err) {
      console.log('ERROR in GqlFormAndList > addView:', err.message);
    }
  };

  const getAll = e => {
    e.preventDefault();
    refetch();
  };

  gqlViews && console.log('gqlViews', gqlViews);

  return (
    <>
      {!loading ? (
        <>
          <div>
            <h2>Form</h2>
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
              <div key={view.path}>{view?.title}</div>
            ))}
          </div>
        </>
      ) : (
        <div>Loading Form......</div>
      )}
    </>
  );
};

export default GqlFormAndList;
