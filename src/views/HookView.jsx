import NavPanelRoutes from '../Routes/NavPanel/NavPanelRoutes';
import NavPanelLinks from '../Routes/NavPanel/NavPanelLinks';
import Article from '../components/Markup/Article';
import { useStyles } from './viewsStyles';

export default function HookView() {
  const viewTitle = 'Hooks';
  const s = useStyles();

  return (
    <Article>
      <h1 className={s.viewTitle}>Hooks</h1>
      <NavPanelRoutes viewTitle={viewTitle} />
      <NavPanelLinks viewTitle={viewTitle} />
    </Article>
  );
}
