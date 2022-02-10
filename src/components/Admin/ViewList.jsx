const ViewList = ({ allViews }) => {
  return (
    <div>
      {allViews?.map(view => (
        <div key={view.path}>{view?.title}</div>
      ))}
    </div>
  );
};

export default ViewList;
