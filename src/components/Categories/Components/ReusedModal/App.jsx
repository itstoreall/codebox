import { useState } from 'react';
import ReuseModalContext from './context/ReuseModalContext';
import ReusedModal from './ReusedModal';
import Buttons from './Buttons';
import ReusedModalContent from './ReusedModalContent';
import Spinner from './Spinner';

const App = featureTitle => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const toggleModal = value => {
    setModalContent(value);
    value !== 'remove-modal' && setShowModal(!showModal);
    value === 'remove-modal' && setShowModal(false);
  };

  const contentHandler = content => (
    <ReusedModalContent
      backgroundColor={
        content === 'app-open-pink'
          ? 'pink'
          : content === 'app-open-skyblue'
          ? 'skyblue'
          : content === 'app-open-yellowgreen' && 'yellowgreen'
      }
    >
      <Spinner size={'45px'} strokeWidth={2} />
    </ReusedModalContent>
  );

  return (
    <ReuseModalContext.Provider
      value={{ showModal, toggleModal, modalContent }}
    >
      <Buttons toggleModal={toggleModal} />

      {showModal && <ReusedModal>{contentHandler(modalContent)}</ReusedModal>}
    </ReuseModalContext.Provider>
  );
};

export default App;
