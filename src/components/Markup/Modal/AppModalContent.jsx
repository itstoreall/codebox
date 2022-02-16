import { ModalContent } from './AppModal.styles';
import CreateView from '../../Admin/CreateView';

const AppModalContent = ({ content }) => (
  <ModalContent className={'app-modal-content'}>
    {content === 'create-view-btn' && <CreateView />}
  </ModalContent>
);

export default AppModalContent;
