import { useContext } from 'react';
import ReuseModalContext from './context/ReuseModalContext';
import { OpenModalBtn } from './ReusedModal.styles';

const Buttons = () => {
  const { toggleModal } = useContext(ReuseModalContext);

  return (
    <div>
      <OpenModalBtn
        type="button"
        style={{ backgroundColor: 'pink' }}
        onClick={() => toggleModal('app-open-pink')}
      >
        Pink
      </OpenModalBtn>
      <OpenModalBtn
        type="button"
        style={{ backgroundColor: 'skyblue' }}
        onClick={() => toggleModal('app-open-skyblue')}
      >
        Skyblue
      </OpenModalBtn>
      <OpenModalBtn
        type="button"
        style={{ backgroundColor: 'yellowgreen' }}
        onClick={() => toggleModal('app-open-yellowgreen')}
      >
        Yellowgreen
      </OpenModalBtn>
    </div>
  );
};

export default Buttons;
