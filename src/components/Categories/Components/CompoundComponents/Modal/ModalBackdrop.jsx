import { Backdrop } from './styles';

const ModalBackdrop = ({ children, setIsModal }) => (
  <Backdrop onClick={() => setIsModal(false)}>{children}</Backdrop>
);

export default ModalBackdrop;
