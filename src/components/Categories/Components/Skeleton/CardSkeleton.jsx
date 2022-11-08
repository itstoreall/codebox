import { useEffect } from 'react';
import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import reactLogo from '../../../../images/react_logo.png';

const CardSkeleton = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setTimeout(
      () =>
        setData({
          title: 'Skeleton',
          description:
            'React loader Skeleton automatically adapt to your beautiful app',
          img: reactLogo,
        }),
      5000,
    );
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: '30px' }}>
        <div style={{ width: '60px', height: '60px', borderRudius: '50%' }}>
          {(data?.img && (
            <img src={data?.img} width={60} height={60} alt="React logo" />
          )) || <Skeleton width={60} height={60} circle={true} />}
        </div>
      </div>
      <div>
        <div style={{ display: 'block', width: '200px' }}>
          <h2 style={{ marginBottom: '10px' }}>
            {data?.title || <Skeleton />}
          </h2>
          <p>{data?.description || <Skeleton count={3} />}</p>
        </div>
      </div>
      <Skeleton count={5} />
    </div>
  );
};

export default CardSkeleton;
