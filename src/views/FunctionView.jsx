import { NavPanelRoutes } from '../Routes/Routes';
import NavPanel from '../components/Markup/NavPanel';
import Article from '../components/Markup/Article';
import { useStyles } from './viewsStyles';

export default function FunctionsView() {
  const viewTitle = 'Functions';
  const s = useStyles();

  return (
    <Article>
      <h1 className={s.viewTitle}>{viewTitle}</h1>
      <NavPanelRoutes viewTitle={viewTitle} />
      <NavPanel viewTitle={viewTitle} />
    </Article>
  );
}
