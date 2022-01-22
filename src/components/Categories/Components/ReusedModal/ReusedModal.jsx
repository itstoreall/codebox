import { useEffect, useContext } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, Modal, CloseBtn } from './ReusedModal.styles';
import ReuseModalContext from './context/ReuseModalContext';
import sprite from '../../../../svg/sprite.svg';

const ReusedModal = ({ children }) => {
  const { toggleModal, modalContent } = useContext(ReuseModalContext);

  useEffect(() => {
    document.addEventListener('keydown', closeByEsc);
    return () => document.removeEventListener('keydown', closeByEsc);
  });

  const closeByBackdrop = e =>
    e.currentTarget === e.target && toggleModal('backdrop');
  const closeByEsc = e => e.code === 'Escape' && toggleModal('esc');

  return createPortal(
    <Backdrop onClick={closeByBackdrop}>
      <Modal>
        {modalContent !== 'swap-modal-btn' && (
          <CloseBtn onClick={() => toggleModal('close')}>
            <svg width="17" height="17">
              <use href={sprite + '#menu-close'}></use>
            </svg>
          </CloseBtn>
        )}
        {children}
      </Modal>
    </Backdrop>,
    document.body,
  );
};

export default ReusedModal;
