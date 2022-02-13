import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import s from './Admin.module.scss';
import { GET_ALL_VIEWS } from '../../graphql/query/view';
import Display from './Display';
import Controls from './Controls';
import Login from './Login';
import Logout from './Logout';
import GetOneView from './GetOneView';
import GetAllViews from './GetAllViews';
import CreateView from './CreateView';
import DeleteView from './DeleteView';
import UpdateView from './UpdateView';

const AdminDashboard = () => {
  const [codeboxToken, setCodeboxToken] = useState('');

  const { data, loading, error, refetch } = useQuery(GET_ALL_VIEWS);

  useEffect(() => setCodeboxToken(localStorage.getItem('codeboxToken')), []);

  return (
    <div className={s.AdminDashboard}>
      {!loading ? (
        <>
          {!codeboxToken ? (
            <Login setCodeboxToken={setCodeboxToken} />
          ) : (
            <div className={s.AdminDashboard__contentWrap}>
              <Logout setCodeboxToken={setCodeboxToken} />

              <Display>
                <GetAllViews views={data} loading={loading} refetch={refetch} />
              </Display>

              <Controls>
                <GetOneView />
                <CreateView refetch={refetch} />
                <DeleteView refetch={refetch} />
                <UpdateView refetch={refetch} />
              </Controls>
            </div>
          )}
        </>
      ) : (
        <div className={s.AdminDashboard__loadingWrap}>
          <span>{`Heroku server: zzz.. ☆(◡.◔)★ ...`}</span>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
