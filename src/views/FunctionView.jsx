import NavPanelRoutes from '../Routes/NavPanel/NavPanelRoutes';
import NavPanelLinks from '../Routes/NavPanel/NavPanelLinks';
import Article from '../components/Markup/Article';
import { useStyles } from './viewsStyles';

export default function FunctionsView() {
  const viewTitle = 'Functions';
  const s = useStyles();

  return (
    <Article>
      <h1 className={s.viewTitle}>{viewTitle}</h1>
      <NavPanelRoutes viewTitle={viewTitle} />
      <NavPanelLinks viewTitle={viewTitle} />
    </Article>
  );
}
