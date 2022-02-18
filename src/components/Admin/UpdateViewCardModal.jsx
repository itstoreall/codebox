import s from './Admin.module.scss';
import { CardModalInput, CustomButton } from './uiElements';
import refs from '../../styles/refs';

const UpdateViewCardModal = ({
  view,
  updateGqlViewTitle,
  updateGqlViewPath,
  setUpdateGqlViewTitle,
  setUpdateGqlViewPath,
  updateView,
  toggleCardModal,
}) => {
  return (
    <form className={'admin-update-view-form'} onSubmit={e => updateView(e)}>
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
  );
};

export default UpdateViewCardModal;
