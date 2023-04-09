import { ModalField, ModalText, ModalTitle } from '../styles';
import ModalInput from './components/Modal.Input';
import ModalButton from './components/Modal.Button';

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

const Button = ({ children }) => {
  return <ModalButton>{children}</ModalButton>;
};

export { Title, Text, Field, Input, Button };
