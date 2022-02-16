import { useEffect, useContext } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, Modal, CloseBtn } from './AppModal.styles';
import Context from '../../../Context';
import sprite from '../../../svg/sprite.svg';

const AppModal = ({ children }) => {
  const { toggleAppModal } = useContext(Context);

  useEffect(() => {
    document.addEventListener('keydown', closeByEsc);
    return () => document.removeEventListener('keydown', closeByEsc);
  });

  const closeByBackdrop = e =>
    e.currentTarget === e.target && toggleAppModal('backdrop');
  const closeByEsc = e => e.code === 'Escape' && toggleAppModal('esc');

  return createPortal(
    <Backdrop onClick={closeByBackdrop}>
      <Modal>
        <CloseBtn onClick={() => toggleAppModal('close')}>
          <svg width="14" height="14">
            <use href={sprite + '#icon-close'}></use>
          </svg>
        </CloseBtn>
        {children}
      </Modal>
    </Backdrop>,
    document.body,
  );
};

export default AppModal;
