import { useContext } from 'react';
import Nav from '../Nav';
import s from './NavModal.module.scss';
import Context from '../../../Context';

const NavModal = () => {
  const { media } = useContext(Context);

  return (
    <>
      {media.tabletMax && (
        <div className={s.navbar__backdrop}>
          <div className={s.navbar}>
            <Nav />
          </div>
        </div>
      )}
    </>
  );
};

export default NavModal;
