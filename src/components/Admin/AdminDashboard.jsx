import { useEffect, useState, useContext, useMemo } from 'react';
import s from './Admin.module.scss';
import Context from '../../Context';
import Login from './Login';
import AdminDashboardContent from './AdminDashboardContent';
// import Logout from './Logout';
// import ViewList from './ViewList';
// import CreateViewButton from './CreateViewButton';

const AdminDashboard = () => {
  const [codeboxToken, setCodeboxToken] = useState('');

  const { loading, allViews, refetch } = useContext(Context);

  useMemo(() => allViews && console.log('allViews:', allViews), [allViews]); // *

  useEffect(() => setCodeboxToken(localStorage.getItem('codeboxToken')), []);

  return (
    <div className={s.AdminDashboard}>
      {!loading ? (
        <>
          {!codeboxToken ? (
            <Login setCodeboxToken={setCodeboxToken} />
          ) : (
            <AdminDashboardContent
              setCodeboxToken={setCodeboxToken}
              refetch={refetch}
            />
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
