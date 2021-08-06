import Article from '../components/Layout/Article';
import { useStyles } from './viewsStyles';

export default function HookView() {
  const s = useStyles();

  return (
    <Article>
      <h1 className={s.viewTitle}>Hooks</h1>
    </Article>
  );
}
