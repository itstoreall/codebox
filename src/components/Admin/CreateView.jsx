import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_VIEW } from '../../graphql/mutation/view';

const CreateView = ({ refetch }) => {
  const [gqlViewTitle, setGqlViewTitle] = useState('');
  const [gqlViewPath, setGqlViewPath] = useState('');

  const [newGqlView] = useMutation(CREATE_VIEW);

  const getAll = e => {
    e.preventDefault();
    refetch();
  };

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
      <form>
        <input
          type="text"
          value={gqlViewTitle}
          onChange={e => setGqlViewTitle(e.target.value)}
        />
        <input
          type="text"
          value={gqlViewPath}
          onChange={e => setGqlViewPath(e.target.value)}
        />
        <button type="button" onClick={e => addView(e)}>
          Create view
        </button>
        <button type="button" onClick={e => getAll(e)}>
          Get view
        </button>
      </form>
    </div>
  );
};

export default CreateView;
