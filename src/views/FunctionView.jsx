import Article from '../components/Layout/Article';
import { useStyles } from './viewsStyles';

export default function FunctionView() {
  const s = useStyles();

  return (
    <Article>
      <h1 className={s.viewTitle}>Functions</h1>
    </Article>
  );
}
