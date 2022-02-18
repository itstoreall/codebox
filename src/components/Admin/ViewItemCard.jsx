import { useState, useEffect } from 'react';
import s from './Admin.module.scss';
import UpdateViewButton from './UpdateViewButton';
import DeleteViewButton from './DeleteViewButton';
import UpdateView from './UpdateView';

const ViewItemCard = ({ view, toggleAppModal, refetch }) => {
  const [showModal, setShowModal] = useState(false);
  const [updateGqlViewTitle, setUpdateGqlViewTitle] = useState('');
  const [updateGqlViewPath, setUpdateGqlViewPath] = useState('');

  useEffect(() => {
    setUpdateGqlViewTitle(view.title);
    setUpdateGqlViewPath(view.path);
  }, []);

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
          <UpdateView
            view={view}
            updateGqlViewTitle={updateGqlViewTitle}
            updateGqlViewPath={updateGqlViewPath}
            setUpdateGqlViewTitle={setUpdateGqlViewTitle}
            setUpdateGqlViewPath={setUpdateGqlViewPath}
            toggleCardModal={toggleCardModal}
            refetch={refetch}
          />
        </div>
      )}
    </>
  );
};

export default ViewItemCard;
