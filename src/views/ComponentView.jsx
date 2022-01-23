import { NavPanelRoutes } from '../Routes/Routes';
import { withRouter } from 'react-router-dom';
import InfoPanel from '../components/Markup/InfoPanel';
import { useStyles } from './viewsStyles';
import Article from '../components/Markup/Article';
import NavPanel from '../components/Markup/NavPanel';

const ComponentView = () => {
  const viewTitle = 'Components';
  const s = useStyles();

  return (
    <>
      <InfoPanel />
      <Article>
        <h1 className={s.viewTitle}>{viewTitle}</h1>
        <NavPanelRoutes viewTitle={viewTitle} />
        <NavPanel viewTitle={viewTitle} />
      </Article>
    </>
  );
};

export default withRouter(ComponentView);
