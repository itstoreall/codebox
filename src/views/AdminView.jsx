import { withRouter } from 'react-router-dom';
import InfoPanel from '../components/Markup/InfoPanel';
import { useStyles } from './viewsStyles';
import Article from '../components/Markup/Article';
import AdminDashboard from '../components/Admin';

const ComponentView = () => {
  const viewTitle = 'Admin';
  const s = useStyles();

  return (
    <>
      <InfoPanel />
      <Article>
        <h1 className={s.viewTitle}>{viewTitle}</h1>
        <AdminDashboard />
      </Article>
    </>
  );
};

export default withRouter(ComponentView);
