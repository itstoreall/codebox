import { NavPanelRoutes } from '../Routes/Routes';
import { withRouter } from 'react-router-dom';
import History from '../components/Markup/History';
import { useStyles } from './viewsStyles';
import Article from '../components/Markup/Article';
import NavPanel from '../components/Markup/NavPanel';

const FunctionsView = () => {
  const viewTitle = 'Functions';
  const s = useStyles();

  return (
    <>
      <History />

      <Article>
        <h1 className={s.viewTitle}>{viewTitle}</h1>
        <NavPanelRoutes viewTitle={viewTitle} />
        <NavPanel viewTitle={viewTitle} />
      </Article>
    </>
  );
};

export default withRouter(FunctionsView);
