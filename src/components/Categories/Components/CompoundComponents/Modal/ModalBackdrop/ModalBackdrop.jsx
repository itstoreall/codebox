import { Wrapper } from './styles';

const ModalBackdrop = ({ children, setIsModal }) => {
  return <Wrapper onClick={() => setIsModal(false)}>{children}</Wrapper>;
};

export default ModalBackdrop;
