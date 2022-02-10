import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { DELETE_VIEW } from '../../graphql/mutation/view';

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
      <form>
        <input
          type="text"
          value={deleteViewId}
          onChange={e => setDeleteViewId(e.target.value)}
        />
        <button type="button" onClick={e => deleteView(e)}>
          Delete view
        </button>
      </form>
    </div>
  );
};

export default DeleteView;
