import { useMemo } from 'react';

const Handler = () => {
  const hi = '★(◔.◔)★';

  useMemo(() => console.log(hi), [hi]);

  return (
    <div>
      <p>{hi}</p>
    </div>
  );
};

export default Handler;
