import { useState } from 'react';
import { useMutation } from '@apollo/client';
import s from './Admin.module.scss';
import { CustomButton, PrimaryInput } from '../uiElements';
import { DELETE_VIEW } from '../../../graphql/mutation/view';

const DeleteView = ({ refetch }) => {
  const [deleteViewId, setDeleteViewId] = useState('');

  const [deleteGqlView] = useMutation(DELETE_VIEW, {
    variables: { id: deleteViewId },
  });

  const deleteView = async e => {
    e.preventDefault();

    try {
      const { data } = await deleteGqlView();

      console.log('deletedViewId !!!', data.deleteView);

      refetch();
      setDeleteViewId('');
    } catch (err) {
      console.log('ERROR in GqlFormAndList > deleteView:', err.message);
    }
  };

  return (
    <div>
      <h2>Delete form</h2>
      <form className={s.GetOneView__form} onSubmit={e => deleteView(e)}>
        <PrimaryInput
          className={'admin-delete-view-id-input'}
          placeholder={'id'}
          value={deleteViewId}
          onChange={e => setDeleteViewId(e.target.value)}
        />
        <CustomButton className={'admin-delete-view-btn'} type={'submit'}>
          Delete
        </CustomButton>
      </form>
    </div>
  );
};

export default DeleteView;
