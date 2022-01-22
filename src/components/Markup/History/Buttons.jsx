import { withRouter } from 'react-router-dom';
import { useStyles } from './HistoryStyles';
import { HomeIcon } from './Icons';

export const FromButton = withRouter(({ props, history }) => {
  const s = useStyles();
  const { stateFrom, fromPathname, createPathname } = props;

  return (
    <button
      type="button"
      className={s.fromButton}
      onClick={() => history.push(stateFrom)}
    >
      {createPathname(fromPathname)}
    </button>
  );
});

export const HomeButton = withRouter(({ history, location }) => {
  const s = useStyles();

  return location.pathname !== '/' ? (
    <button
      type="button"
      className={s.homeButton}
      onClick={() => history.push('/')}
    >
      <HomeIcon path={location.pathname} />
    </button>
  ) : (
    <HomeIcon path={location.pathname} />
  );
});
