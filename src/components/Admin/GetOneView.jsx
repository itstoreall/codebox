import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { PrimaryButton, PrimaryInput } from './uiElements';
import { GET_ONE_VIEW } from '../../graphql/query/view';

const GetOneView = () => {
  const [gqlViewId, setGqlViewId] = useState('');
  const [gqlView, setGqlView] = useState('');

  const { data: oneViewData, loading: oneViewLoading } = useQuery(
    GET_ONE_VIEW,
    {
      variables: {
        id: gqlViewId,
      },
    },
  );

  const getOneView = e => {
    e.preventDefault();

    !oneViewLoading && setGqlView(oneViewData?.getView.title);

    setGqlViewId('');
  };

  gqlView && console.log('gqlView:', gqlView);

  return (
    <div>
      <h2>One view form</h2>

      {gqlView && <span>Get view: {gqlView}</span>}

      <form onSubmit={e => getOneView(e)}>
        <PrimaryInput
          className={'admin-get-one-view-id-input'}
          placeholder={'id'}
          value={gqlViewId}
          onChange={e => setGqlViewId(e.target.value)}
        />
        <PrimaryButton className={'admin-get-one-view-btn'} type={'submit'}>
          Get one
        </PrimaryButton>
      </form>
    </div>
  );
};

export default GetOneView;
