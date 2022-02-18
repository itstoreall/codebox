import { useState } from 'react';
import s from './Admin.module.scss';
import Logout from './Logout';
import ViewList from './ViewList';
import Search from './Search';
import CreateViewButton from './CreateViewButton';

const AdminDashboardContent = ({ allViews, setCodeboxToken, refetch }) => {
  const [searchResult, setSearchResult] = useState(allViews);

  return (
    <div className={s.AdminDashboard__contentWrap}>
      <div className={s.content__btnWrap}>
        <CreateViewButton refetch={refetch} />
        <Logout setCodeboxToken={setCodeboxToken} />
      </div>
      <Search allViews={allViews} setSearchResult={setSearchResult} />
      <ViewList searchResult={searchResult} />
    </div>
  );
};

export default AdminDashboardContent;
