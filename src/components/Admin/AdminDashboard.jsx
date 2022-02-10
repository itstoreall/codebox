import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_VIEWS, GET_ONE_VIEW } from '../../graphql/query/view';
import Login from './Login';
import Logout from './Logout';
import ViewList from './ViewList';
import CreateView from './CreateView';
import DeleteView from './DeleteView';
import UpdateView from './UpdateView';

const AdminDashboard = () => {
  const [codeboxToken, setCodeboxToken] = useState('');
  const [allViews, setAllViews] = useState();

  useEffect(() => setCodeboxToken(localStorage.getItem('codeboxToken')), []);

  const {
    data: allViewsData,
    loading,
    error,
    refetch,
  } = useQuery(GET_ALL_VIEWS, {
    // pollInterval: 1000,
  });

  const { data: oneViewData, loading: oneViewLoading } = useQuery(
    GET_ONE_VIEW,
    {
      variables: {
        id: '620134773cbe3c96e44f89d2',
        // id: 62,
      },
    },
  );

  loading && console.log('loading......');

  !oneViewLoading && console.log('oneViewData:', oneViewData?.getView.id);

  useEffect(
    () => !loading && setAllViews(allViewsData.getAllViews),
    [allViewsData],
  );

  console.log('codeboxToken -->', codeboxToken);

  allViews && console.log('allViews', allViews);

  return (
    <>
      {!loading ? (
        <>
          {!codeboxToken ? (
            <Login setCodeboxToken={setCodeboxToken} />
          ) : (
            <>
              <Logout setCodeboxToken={setCodeboxToken} />
              <ViewList allViews={allViews} />
              <CreateView refetch={refetch} />
              <DeleteView refetch={refetch} />
              <UpdateView refetch={refetch} />
            </>
          )}
        </>
      ) : (
        <div>Loading Form......</div>
      )}
    </>
  );
};

export default AdminDashboard;
