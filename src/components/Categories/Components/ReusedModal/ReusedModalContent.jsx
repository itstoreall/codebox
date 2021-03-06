import { ModalContent } from './ReusedModal.styles';
import Spinner from './Spinner';

const ReusedModalContent = ({ backgroundColor }) => (
  <ModalContent backgroundColor={backgroundColor} className="reused-modal">
    <Spinner size={'46px'} stroke={'#fff'} strokeWidth={1} />
  </ModalContent>
);

export default ReusedModalContent;
