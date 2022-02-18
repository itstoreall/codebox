import { useMutation } from '@apollo/client';
import { UPDATE_VIEW } from '../../graphql/mutation/view';
import UpdateViewCardModal from './UpdateViewCardModal';

const UpdateView = ({
  view,
  updateGqlViewTitle,
  updateGqlViewPath,
  setUpdateGqlViewTitle,
  setUpdateGqlViewPath,
  toggleCardModal,
  refetch,
}) => {
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

  return (
    <UpdateViewCardModal
      view={view}
      updateGqlViewTitle={updateGqlViewTitle}
      updateGqlViewPath={updateGqlViewPath}
      setUpdateGqlViewTitle={setUpdateGqlViewTitle}
      setUpdateGqlViewPath={setUpdateGqlViewPath}
      updateView={updateView}
      toggleCardModal={toggleCardModal}
    />
  );
};

export default UpdateView;
