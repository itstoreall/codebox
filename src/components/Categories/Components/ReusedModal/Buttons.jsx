import { useContext } from 'react';
import ReuseModalContext from './context/ReuseModalContext';
import { OpenModalBtn } from './ReusedModal.styles';

const Buttons = () => {
  const { toggleModal } = useContext(ReuseModalContext);

  return (
    <div>
      <OpenModalBtn
        type="button"
        bgColor="pink"
        onClick={() => toggleModal('app-open-pink')}
      >
        Pink
      </OpenModalBtn>
      <OpenModalBtn
        type="button"
        bgColor="skyblue"
        onClick={() => toggleModal('app-open-skyblue')}
      >
        Skyblue
      </OpenModalBtn>
      <OpenModalBtn
        type="button"
        bgColor="yellowgreen"
        onClick={() => toggleModal('app-open-yellowgreen')}
      >
        Yellowgreen
      </OpenModalBtn>
    </div>
  );
};

export default Buttons;
