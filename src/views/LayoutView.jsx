import Article from '../components/Layout/Article';
import { useStyles } from './viewsStyles';

export default function MarkupView() {
  const s = useStyles();

  return (
    <Article>
      <h1 className={s.viewTitle}>Markup</h1>
    </Article>
  );
}
