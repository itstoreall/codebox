import s from './Feature.module.scss';
import { MODAL_CONTENT } from './Modal/constants';
import Modal from './Modal/ModalContent';

import { useState } from 'react';

const ManePage = () => {
  const [isModal, setIsModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [coreFunctionValue, setCoreFunctionValue] = useState('');

  const state = {
    amount: 100,
  };

  const modalHandler = args => {
    setIsModal(true);
    setCoreFunctionValue(args.value);
    setModalContent(args.content);
  };

  return (
    <div>
      {isModal && (
        <Modal
          content={modalContent}
          state={state}
          setIsModal={setIsModal}
          coreFunction={() => console.log(coreFunctionValue)}
        />
      )}

      <div>
        <button
          className={s.Button}
          onClick={() =>
            modalHandler({ value: 'Buy !!!', content: MODAL_CONTENT[0] })
          }
        >
          Buy
        </button>

        <button
          className={s.Button}
          onClick={() =>
            modalHandler({ value: 'Sell !!!', content: MODAL_CONTENT[1] })
          }
        >
          Sell
        </button>
      </div>
    </div>
  );
};

export default ManePage;
