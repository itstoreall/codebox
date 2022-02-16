import { CustomButton } from './uiElements';
import sprite from '../../svg/sprite.svg';

const DeleteViewButton = ({ id, toggleAppModal }) => {
  const deleteView = async () =>
    toggleAppModal({ content: 'delete-view-btn', id });

  return (
    <CustomButton
      className={'admin-delete-view-button-btn'}
      width={'20px'}
      height={'20px'}
      borderRadius={'4px'}
      onClick={deleteView}
    >
      <svg width="10" height="10" fill="white">
        <use href={sprite + '#icon-close'}></use>
      </svg>
    </CustomButton>
  );
};

export default DeleteViewButton;
