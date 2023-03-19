import { useState } from 'react';
import { MODAL_CONTENT } from './constants';
import Modal from './Modal';
import { ButtonWrap } from './styles';
import modalFieldConfigHandler from './ModalComponents/utils/modalFieldConfigHandler';

const ModalContent = ({ content, setIsModal, state, coreFunction }) => {
  const [inputValue, setInputValue] = useState('');

  const contentHandler = (buy, sell) => {
    if (content === MODAL_CONTENT[0]) return buy;
    if (content === MODAL_CONTENT[1]) return sell;

    throw new Error(
      `in contentHandler (ModalContent) content: ${content}, buy: ${buy}, sell: ${sell}.`,
    );
  };

  const fieldHandler = () => {
    const fields = modalFieldConfigHandler({
      inputValue,
      state,
      contentHandler,
    });

    return (
      <>
        {fields &&
          fields.map(field => (
            <Modal.Field key={field.name}>
              <Modal.Text>{field.name}</Modal.Text>
              <Modal.Text>{field.value}</Modal.Text>
            </Modal.Field>
          ))}
      </>
    );
  };

  return (
    <Modal
      content={content}
      contentHandler={contentHandler}
      setIsModal={setIsModal}
      inputValue={inputValue}
      inputHandler={setInputValue}
      state={state}
      coreFunction={coreFunction}
    >
      <Modal.Title>{contentHandler('Buy', 'Sell')}</Modal.Title>
      <Modal.Input />
      {fieldHandler()}
      <ButtonWrap>
        <Modal.SolidInputButton>
          {contentHandler('Buy', 'Sell')}
        </Modal.SolidInputButton>
        <Modal.OutlineButton>Cancel</Modal.OutlineButton>
      </ButtonWrap>
    </Modal>
  );
};

export default ModalContent;
