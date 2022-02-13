import { useMutation } from '@apollo/client';
import { CardButton } from './uiElements';
import { DELETE_VIEW } from '../../graphql/mutation/view';
import sprite from '../../svg/sprite.svg';

const DeleteViewButton = ({ id, refetch }) => {
  const [deleteGqlView] = useMutation(DELETE_VIEW, {
    variables: { id: id },
  });

  const deleteView = async e => {
    e.preventDefault();

    console.log('id:', id);

    try {
      const { data } = await deleteGqlView();

      console.log('deleted id !!!', data.deleteView);

      refetch();
    } catch (err) {
      console.log('ERROR in GqlFormAndList > deleteView:', err.message);
    }
  };

  return (
    <CardButton
      className={'admin-delete-view-button-btn'}
      borderRadius={'4px'}
      onClick={e => deleteView(e)}
    >
      <svg width="9" height="9" fill="white">
        <use href={sprite + '#icon-close'}></use>
      </svg>
    </CardButton>
  );
};

export default DeleteViewButton;
