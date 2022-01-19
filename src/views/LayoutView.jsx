import NavPanelRoutes from '../Routes/NavPanel/NavPanelRoutes';
import NavPanelLinks from '../Routes/NavPanel/NavPanelLinks';
import Article from '../components/Markup/Article';
import { useStyles } from './viewsStyles';

export default function LayoutView() {
  const viewTitle = 'Layout';
  const s = useStyles();

  return (
    <Article>
      <h1 className={s.viewTitle}>{viewTitle}</h1>
      <NavPanelRoutes viewTitle={viewTitle} />
      <NavPanelLinks viewTitle={viewTitle} />
    </Article>
  );
}
