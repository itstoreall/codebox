import getCurrentLocalDate from './getCurrentLocalDate';

const DisplayDate = () => {
  const currentDate = getCurrentLocalDate();
  return (
    <div>
      <p style={{ marginBottom: '10px', color: 'tomato' }}>
        <span style={{ display: 'inline-block', width: '100px' }}>
          Date format:
        </span>
        {currentDate.date}
      </p>
      <p style={{ color: 'tomato' }}>
        <span style={{ display: 'inline-block', width: '100px' }}>
          Timestamp:
        </span>
        {currentDate.timestamp}
      </p>
    </div>
  );
};

export default DisplayDate;
