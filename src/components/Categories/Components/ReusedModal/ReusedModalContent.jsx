import { ModalContent } from './ReusedModal.styles';
import Spinner from './Spinner';

const ReusedModalContent = ({ backgroundColor }) => (
  <ModalContent backgroundColor={backgroundColor} className="reused-modal">
    <Spinner size={'45px'} strokeWidth={2} />
  </ModalContent>
);

export default ReusedModalContent;
