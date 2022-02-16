import s from './Admin.module.scss';
import Logout from './Logout';
import ViewList from './ViewList';
import CreateViewButton from './CreateViewButton';

const AdminDashboardContent = ({ setCodeboxToken, refetch }) => {
  return (
    <div className={s.AdminDashboard__contentWrap}>
      <>
        <CreateViewButton refetch={refetch} />
        <Logout setCodeboxToken={setCodeboxToken} />
      </>

      <ViewList />
    </div>
  );
};

export default AdminDashboardContent;
