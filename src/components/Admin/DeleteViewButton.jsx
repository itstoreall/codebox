import { useMutation } from '@apollo/client';
import { RoundButton } from './uiElements';
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
    <RoundButton
      className={'admin-delete-view-button-btn'}
      onClick={e => deleteView(e)}
    >
      <svg width="7" height="7" fill="white">
        <use href={sprite + '#icon-close'}></use>
      </svg>
    </RoundButton>
  );
};

export default DeleteViewButton;
