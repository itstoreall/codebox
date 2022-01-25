// import { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { useStyles } from './HistoryStyles';
// import Context from '../../../Context';
// import sprite from '../../../svg/sprite.svg';
import { ArrowIcon } from './Icons';
import { HomeButton, FromButton } from './Buttons';

const History = ({ history, location }) => {
  console.log('History location --->', location);

  const s = useStyles();
  // const { views } = useContext(Context);
  const stateFrom = location.state?.from;
  const fromPathname = location.state?.from.pathname.substr(1);
  const currentPathname = location.pathname.substr(1);

  // console.log('views --->', views);

  const createPathname = pathname => {
    return (
      pathname && (
        <span
          className={
            pathname === currentPathname
              ? s.currentPathname
              : pathname === fromPathname && null
          }
        >
          {pathname?.includes('/') ? pathname?.split('/')[1] : pathname}
        </span>
      )
    );
  };

  return (
    <div className={s.History}>
      <HomeButton />
      {/* {location.pathname !== '/' && <ArrowIcon />} */}
      <ArrowIcon />
      {location.pathname !== '/' ? (
        <FromButton props={{ stateFrom, fromPathname, createPathname }} />
      ) : (
        <span className={s.codebox}>{'codebox'}</span>
      )}
      {fromPathname && <ArrowIcon />}
      {createPathname(currentPathname)}
    </div>
  );
};

export default withRouter(History);
