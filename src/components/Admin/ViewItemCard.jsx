import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import s from './Admin.module.scss';
import { CardModalInput, CustomButton } from './uiElements';
import UpdateViewButton from './UpdateViewButton';
import DeleteViewButton from './DeleteViewButton';
import { UPDATE_VIEW } from '../../graphql/mutation/view';
import refs from '../../styles/refs';

const ViewItemCard = ({ view, toggleAppModal, refetch }) => {
  const [showModal, setShowModal] = useState(false);
  const [updateGqlViewTitle, setUpdateGqlViewTitle] = useState('');
  const [updateGqlViewPath, setUpdateGqlViewPath] = useState('');

  useEffect(() => {
    setUpdateGqlViewTitle(view.title);
    setUpdateGqlViewPath(view.path);
  }, []);

  const [updateGqlView] = useMutation(UPDATE_VIEW, {
    variables: {
      id: view.id,
      input: { title: updateGqlViewTitle, path: updateGqlViewPath },
    },
  });

  const updateView = async e => {
    e.preventDefault();
    console.log('id:', view.id);

    try {
      const { data } = await updateGqlView();

      console.log('updateView !!!', data.updateView);

      refetch();
      toggleCardModal(false);
    } catch (err) {
      console.log('ERROR in GqlFormAndList > updateView:', err.message);
    }
  };

  const toggleCardModal = value => setShowModal(value);

  return (
    <>
      {!showModal ? (
        <>
          <div className={s.ViewList__card}>
            <div className={s.card__contentRow}>id: {view?.id}</div>
            <div className={s.card__contentRow}>title: {view?.title}</div>
            <div className={s.card__contentRow}>path: {view?.path}</div>
          </div>

          <div className={s.ViewList__btnWrap}>
            <UpdateViewButton toggleModal={toggleCardModal} />
            <DeleteViewButton id={view?.id} toggleAppModal={toggleAppModal} />
          </div>
        </>
      ) : (
        <div className={s.ViewList__cardModal}>
          <form className={s.GetOneView__form} onSubmit={e => updateView(e)}>
            <div className={s.cardModal__contentRow}>id: {view.id}</div>
            <div className={s.cardModal__contentRow}>
              {`title: `}
              {
                <CardModalInput
                  className={'admin-update-view-title-btn'}
                  padding={0}
                  width={'250px'}
                  color={refs.activeLinkColor}
                  backgroundColor={'transparent'}
                  border={'none'}
                  outline={'none'}
                  placeholder={'Title'}
                  value={updateGqlViewTitle}
                  onChange={e => setUpdateGqlViewTitle(e.target.value)}
                />
              }
            </div>
            <div className={s.cardModal__contentRow}>
              {`path: `}
              {
                <CardModalInput
                  className={'admin-update-view-path-btn'}
                  padding={0}
                  width={'250px'}
                  color={refs.activeLinkColor}
                  border={'none'}
                  outline={'none'}
                  backgroundColor={'transparent'}
                  placeholder={'path'}
                  value={updateGqlViewPath}
                  onChange={e => setUpdateGqlViewPath(e.target.value)}
                />
              }
            </div>

            <div className={s.cardModal__btnWrap}>
              <CustomButton
                className={'admin-update-view-btn'}
                display={'block'}
                padding={'3px 30px'}
                margin={'0 10px 0 0'}
                borderRadius={'2px'}
                fontSize={'12px'}
                type={'submit'}
                onClick={e => updateView(e)}
              >
                Update
              </CustomButton>
              <CustomButton
                className={'admin-update-view-close-btn'}
                padding={'3px 30px'}
                borderRadius={'2px'}
                fontSize={'12px'}
                type={'submit'}
                onClick={() => toggleCardModal(false)}
              >
                Cancel
              </CustomButton>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ViewItemCard;
