import s from './Feature.module.scss';
import { MODAL_CONTENT } from './Modal/constants';
import Modal from './Modal/ModalContent';

import { useState } from 'react';

const ManePage = () => {
  const [isModal, setIsModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const state = {
    amount: 100,
  };

  const coreFunction = value => console.log('Result:', value);

  const modalHandler = content => {
    setIsModal(true);
    setModalContent(content);
  };

  return (
    <div>
      {isModal && (
        <Modal
          content={modalContent}
          state={state}
          setIsModal={setIsModal}
          coreFunction={value => coreFunction(value)}
        />
      )}

      <div>
        <button
          style={{ margin: '0 10px 10px 0' }}
          className={s.Button}
          onClick={() => modalHandler(MODAL_CONTENT[0])}
        >
          Buy
        </button>

        <button
          className={s.Button}
          onClick={() => modalHandler(MODAL_CONTENT[1])}
        >
          Sell
        </button>
      </div>
    </div>
  );
};

export default ManePage;
