import { CustomButton } from './uiElements';
import sprite from '../../svg/sprite.svg';

const UpdateViewButton = ({ toggleModal }) => (
  <CustomButton
    className={'admin-delete-view-button-btn'}
    margin={'0 0 10px 0'}
    width={'20px'}
    height={'20px'}
    borderRadius={'4px'}
    onClick={() => toggleModal(true)}
  >
    <svg width="9" height="9" fill="white">
      <use href={sprite + '#icon-edit'}></use>
    </svg>
  </CustomButton>
);

export default UpdateViewButton;
