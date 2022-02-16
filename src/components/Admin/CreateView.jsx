import { useState, useContext } from 'react';
import { useMutation } from '@apollo/client';
import s from './Admin.module.scss';
import refs from '../../styles/refs';
import Context from '../../Context';
import { CustomButton, CustomInput } from './uiElements';
import { CREATE_VIEW } from '../../graphql/mutation/view';

const CreateView = () => {
  const [gqlViewTitle, setGqlViewTitle] = useState('');
  const [gqlViewPath, setGqlViewPath] = useState('');

  const { toggleAppModal, refetch } = useContext(Context);

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
      toggleAppModal(false);
    } catch (err) {
      console.log('ERROR in GqlFormAndList > addView:', err.message);
    }
  };

  return (
    <form className={s.CreateView__form} onSubmit={e => addView(e)}>
      <CustomInput
        className={'admin-create-view-title-input'}
        padding={'15px'}
        border={`1px solid ${refs.primaryTextColor}`}
        borderRadius={'4px'}
        outline={'none'}
        placeholder={'Title'}
        value={gqlViewTitle}
        onChange={e => setGqlViewTitle(e.target.value)}
      />
      <CustomInput
        className={'admin-create-view-path-input'}
        padding={'15px'}
        border={`1px solid ${refs.primaryTextColor}`}
        borderRadius={'4px'}
        outline={'none'}
        placeholder={'path'}
        value={gqlViewPath}
        onChange={e => setGqlViewPath(e.target.value)}
      />
      <CustomButton
        className={'admin-create-view-btn'}
        padding={'15px 25px'}
        borderRadius={'4px'}
        type={'sybmit'}
      >
        Create
      </CustomButton>
    </form>
  );
};

export default CreateView;
