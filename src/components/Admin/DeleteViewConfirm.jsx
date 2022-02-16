import { useContext } from 'react';
import { useMutation } from '@apollo/client';
import s from './Admin.module.scss';
import Context from '../../Context';
import refs from '../../styles/refs';
import { DELETE_VIEW } from '../../graphql/mutation/view';
import { CustomButton } from './uiElements';

const DeleteViewConfirm = () => {
  const {
    modalAppConfig: { id, refetch },
    toggleAppModal,
  } = useContext(Context);

  const [deleteGqlView] = useMutation(DELETE_VIEW, {
    variables: { id: id },
  });

  const confirmDeleting = async () => {
    try {
      const { data } = await deleteGqlView();

      console.log('deleted id !!!', data.deleteView.id);

      refetch();
      toggleAppModal('remove-modal');
    } catch (err) {
      console.log('ERROR in GqlFormAndList > deleteView:', err.message);
    }
  };

  const cancelDeleting = async () => toggleAppModal('remove-modal');

  return (
    <div className={s.DeleteViewConfirm}>
      <h3 className={s.DeleteViewConfirm__title}>Confirm deletion</h3>
      <div className={s.DeleteViewConfirm__btnWrap}>
        <CustomButton
          padding={'10px 20px'}
          borderRadius={'4px'}
          margin={'0 20px 0 0'}
          backgroundColor={refs.activeLinkColor}
          onClick={confirmDeleting}
        >
          Confirm
        </CustomButton>
        <CustomButton
          padding={'10px 20px'}
          borderRadius={'4px'}
          backgroundColor={'tomato'}
          onClick={cancelDeleting}
        >
          Cancel
        </CustomButton>
      </div>
    </div>
  );
};

export default DeleteViewConfirm;
