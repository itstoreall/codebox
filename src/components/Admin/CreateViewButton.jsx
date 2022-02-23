import { useContext } from 'react';
import Context from '../../Context';
import { CustomButton } from './uiElements';
import sprite from '../../svg/sprite.svg';

const CreateViewButton = () => {
  const { toggleAppModal } = useContext(Context);

  return (
    <CustomButton
      className={'admin-create-view-btn'}
      padding={'13px'}
      margin={'0 20px 0 0'}
      borderRadius={'50%'}
      transform={'rotate(45deg)'}
      type={'button'}
      onClick={() => toggleAppModal({ content: 'create-view-btn' })}
    >
      <svg width="12" height="12" fill="white">
        <use href={sprite + '#icon-close'}></use>
      </svg>
    </CustomButton>
  );
};

export default CreateViewButton;
