import React, { useContext, useEffect } from 'react';
import { Wrapper, Content } from './styles';
import ModalBackdrop from './ModalBackdrop/ModalBackdrop';
import {
  Field,
  Input,
  SolidInputButton,
  OutlineButton,
  Title,
  Text,
} from './ModalComponents/ModalComponents';

const ModalContext = React.createContext({
  content: '',
  inputHandler: () => console.log('inputHandler'),
  coreFunction: () => console.log('coreFunction'),
  setIsModal: () => console.log('setIsModal'),
});

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error(
      `Modal.< Component /> components cannot be rendered outside the Modal component`,
    );
  }
  return context;
};

const Modal = ({
  content,
  state,
  contentHandler,
  setIsModal,
  inputValue,
  inputHandler,
  coreFunction,
  children,
}) => {
  useEffect(() => {
    window.addEventListener('keyup', keyUpClose);
    return () => window.removeEventListener('keyup', keyUpClose);
  }, []);

  const keyUpClose = event => {
    if (event.key === 'Escape') {
      return setIsModal(false);
    }
  };

  const context = {
    content,
    inputValue,
    contentHandler,
    setIsModal,
    inputHandler,
    coreFunction,
  };

  return (
    <ModalContext.Provider value={context}>
      <ModalBackdrop setIsModal={() => setIsModal(false)}>
        <Wrapper onClick={e => e.stopPropagation()}>
          <Content>
            <div
              style={{
                position: 'absolute',
                top: -30,
                right: 10,
                color: 'white',
                cursor: 'pointer',
              }}
              onClick={() => setIsModal(false)}
            >
              close
            </div>
            {children}
          </Content>
        </Wrapper>
      </ModalBackdrop>
    </ModalContext.Provider>
  );
};

Modal.Title = Title;
Modal.Input = Input;
Modal.Field = Field;
Modal.Text = Text;
Modal.SolidInputButton = SolidInputButton;
Modal.OutlineButton = OutlineButton;

export default Modal;
