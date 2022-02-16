import { ModalContent } from './AppModal.styles';
import CreateView from '../../Admin/CreateView';
import DeleteViewConfirm from '../../Admin/DeleteViewConfirm';

const AppModalContent = ({ config }) => (
  <ModalContent className={'app-modal-content'}>
    {config.content === 'create-view-btn' && <CreateView />}
    {config.content === 'delete-view-btn' && <DeleteViewConfirm />}
  </ModalContent>
);

export default AppModalContent;
