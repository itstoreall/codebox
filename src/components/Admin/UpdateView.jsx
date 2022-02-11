import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { PrimaryButton, PrimaryInput } from './uiElements';
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
      <form onSubmit={e => updateView(e)}>
        <PrimaryInput
          className={'admin-update-view-id-btn'}
          placeholder={'id'}
          value={updateViewId}
          onChange={e => setUpdateViewId(e.target.value)}
        />
        <PrimaryInput
          className={'admin-update-view-title-btn'}
          placeholder={'Title'}
          value={updateGqlViewTitle}
          onChange={e => setUpdateGqlViewTitle(e.target.value)}
        />
        <PrimaryInput
          className={'admin-update-view-path-btn'}
          placeholder={'path'}
          value={updateGqlViewPath}
          onChange={e => setUpdateGqlViewPath(e.target.value)}
        />
        <PrimaryButton className={'admin-update-view-btn'} type={'submit'}>
          Update
        </PrimaryButton>
      </form>
    </div>
  );
};

export default UpdateView;
