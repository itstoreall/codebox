import { useContext } from 'react';
import Context from '../../Context';
import { CustomButton } from './uiElements';
import sprite from '../../svg/sprite.svg';

const CreateViewButton = () => {
  const { toggleAppModal } = useContext(Context);

  return (
    <CustomButton
      className={'admin-create-view-btn'}
      position={'absolute'}
      top={'-62px'}
      right={'100px'}
      padding={'10px'}
      borderRadius={'50%'}
      transform={'rotate(45deg)'}
      type={'button'}
      onClick={() => toggleAppModal('create-view-btn')}
    >
      <svg width="9" height="9" fill="white">
        <use href={sprite + '#icon-close'}></use>
      </svg>
    </CustomButton>
  );
};

export default CreateViewButton;
