import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_VIEW } from '../../graphql/mutation/view';

const UpdateView = ({ refetch }) => {
  const [updateViewId, setUpdateViewId] = useState('');
  const [updateGqlViewTitle, setUpdateGqlViewTitle] = useState('');
  const [updateGqlViewPath, setUpdateGqlViewPath] = useState('');

  const [updateGqlView] = useMutation(UPDATE_VIEW, {
    variables: {
      id: updateViewId,
      input: { title: updateGqlViewTitle, path: updateGqlViewPath },
    },
  });

  const updateView = async e => {
    e.preventDefault();

    try {
      const { data } = await updateGqlView();

      console.log('updateView !!!', data.updateView);

      refetch();
      setUpdateViewId('');
      setUpdateGqlViewTitle('');
      setUpdateGqlViewPath('');
    } catch (err) {
      console.log('ERROR in GqlFormAndList > updateView:', err.message);
    }
  };

  return (
    <div>
      <h2>Update form</h2>
      <form>
        <input
          type="text"
          value={updateViewId}
          onChange={e => setUpdateViewId(e.target.value)}
        />
        <input
          type="text"
          value={updateGqlViewTitle}
          onChange={e => setUpdateGqlViewTitle(e.target.value)}
        />
        <input
          type="text"
          value={updateGqlViewPath}
          onChange={e => setUpdateGqlViewPath(e.target.value)}
        />
        <button type="button" onClick={e => updateView(e)}>
          Update view
        </button>
      </form>
    </div>
  );
};

export default UpdateView;
