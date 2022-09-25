import sortDataByKey from './sortDataByKey';

const SortData = () => {
  const incomingArray = [{ id: 2 }, { id: 4 }, { id: 5 }, { id: 3 }, { id: 1 }];

  // Sort function ==============================================

  const sortedArray = sortDataByKey.reverse(incomingArray, 'id');

  console.log('sortedArray -->', sortedArray);

  // ============================================================

  // Fake demonstration arrays:
  return (
    <div>
      <p style={{ marginBottom: '10px', color: 'tomato' }}>
        <span style={{ display: 'inline-block', width: '130px' }}>
          Incoming array:
        </span>
        {`[{id: 2}, {id: 4}, {id: 5}, {id: 3}, {id: 1}]`}
      </p>
      <p style={{ marginBottom: '10px', color: 'tomato' }}>
        <span style={{ display: 'inline-block', width: '130px' }}>
          Normally sorted:
        </span>
        {`[{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}]`}
      </p>
      <p style={{ color: 'tomato' }}>
        <span style={{ display: 'inline-block', width: '130px' }}>
          Reversely sorted:
        </span>
        {`[{id: 5}, {id: 4}, {id: 3}, {id: 2}, {id: 1}]`}
      </p>
    </div>
  );
};

export default SortData;
