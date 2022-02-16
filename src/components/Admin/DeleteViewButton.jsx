import { useMutation } from '@apollo/client';
import { CustomButton } from './uiElements';
import { DELETE_VIEW } from '../../graphql/mutation/view';
import sprite from '../../svg/sprite.svg';

const DeleteViewButton = ({ id, refetch }) => {
  const [deleteGqlView] = useMutation(DELETE_VIEW, {
    variables: { id: id },
  });

  const deleteView = async e => {
    e.preventDefault();

    try {
      const { data } = await deleteGqlView();

      console.log('deleted id !!!', data.deleteView);

      refetch();
    } catch (err) {
      console.log('ERROR in GqlFormAndList > deleteView:', err.message);
    }
  };

  return (
    <CustomButton
      className={'admin-delete-view-button-btn'}
      width={'20px'}
      height={'20px'}
      borderRadius={'4px'}
      onClick={e => deleteView(e)}
    >
      <svg width="9" height="9" fill="white">
        <use href={sprite + '#icon-close'}></use>
      </svg>
    </CustomButton>
  );
};

export default DeleteViewButton;
