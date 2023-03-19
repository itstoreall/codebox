import { ModalField, ModalText, ModalTitle } from '../styles';
import s from '../../Feature.module.scss';
import { useModalContext } from '../Modal';
import ModalInput from './components/Modal.Input';
import ModalSolidInputButton from './components/Modal.SolidInputButton';

const Title = ({ children }) => {
  return <ModalTitle>{children}</ModalTitle>;
};

const Text = ({ children }) => {
  return <ModalText>{children}</ModalText>;
};

const Field = ({ children, gap }) => {
  return <ModalField gap={gap}>{children}</ModalField>;
};

const Input = () => {
  return <ModalInput />;
};

const SolidInputButton = ({ children }) => {
  return <ModalSolidInputButton>{children}</ModalSolidInputButton>;
};

const OutlineButton = ({ children }) => {
  const { setIsModal } = useModalContext();

  return (
    <button className={s.Button} onClick={() => setIsModal(false)}>
      {children}
    </button>
  );
};

export { Title, Text, Field, Input, SolidInputButton, OutlineButton };
