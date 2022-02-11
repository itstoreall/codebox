import { useState, useEffect } from 'react';
import ViewList from './ViewList';
// import { PrimaryButton } from './uiElements';

const GetAllViews = ({ views, loading, refetch }) => {
  const [allViews, setAllViews] = useState();

  useEffect(() => !loading && setAllViews(views.getAllViews), [views]);

  loading && console.log('loading......');
  allViews && console.log('allViews', allViews);

  // const getAll = e => {
  //   e.preventDefault();
  //   refetch();
  // }; // *

  return (
    <>
      <ViewList allViews={allViews} refetch={refetch} />

      {/* <PrimaryButton
        className={'admin-get-all-views-btn'}
        type="button"
        onClick={e => getAll(e)}
      >
        Get all
      </PrimaryButton> */}
    </>
  );
};

export default GetAllViews;
