import { useContext } from 'react';
import Nav from '../Nav';
import s from './Navbar.module.scss';
import Context from '../../../Context';

const Navbar = () => {
  const { tabletMax } = useContext(Context);

  return (
    <>
      {tabletMax && (
        <div className={s.navbar__backdrop}>
          <div className={s.navbar}>
            <Nav />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
