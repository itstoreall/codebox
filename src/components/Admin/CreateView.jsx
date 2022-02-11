import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { PrimaryButton, PrimaryInput } from './uiElements';
import { CREATE_VIEW } from '../../graphql/mutation/view';

const CreateView = ({ refetch }) => {
  const [gqlViewTitle, setGqlViewTitle] = useState('');
  const [gqlViewPath, setGqlViewPath] = useState('');

  const [newGqlView] = useMutation(CREATE_VIEW);

  const addView = async e => {
    e.preventDefault();

    try {
      const { data } = await newGqlView({
        variables: {
          input: {
            title: gqlViewTitle,
            path: gqlViewPath,
          },
        },
      });

      console.log('new view !!!', data.createView);

      refetch();
      setGqlViewTitle('');
      setGqlViewPath('');
    } catch (err) {
      console.log('ERROR in GqlFormAndList > addView:', err.message);
    }
  };

  return (
    <div>
      <h2>Create form</h2>
      <form onSubmit={e => addView(e)}>
        <PrimaryInput
          className={'admin-create-view-title-input'}
          placeholder={'Title'}
          value={gqlViewTitle}
          onChange={e => setGqlViewTitle(e.target.value)}
        />
        <PrimaryInput
          className={'admin-create-view-path-input'}
          placeholder={'path'}
          value={gqlViewPath}
          onChange={e => setGqlViewPath(e.target.value)}
        />
        <PrimaryButton className={'admin-create-view-btn'} type={'sybmit'}>
          Create
        </PrimaryButton>
      </form>
    </div>
  );
};

export default CreateView;
