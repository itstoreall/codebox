import Select from './Select';

const BaseSelectFeature = () => {
  return (
    <>
      <Select
        subtitle={'Phone brand *'}
        options={['Apple', 'Samsung', 'Nokia']}
        description={'Choose your Phone.'}
      />

      <hr size="1" color="pink" />

      <Select
        subtitle={'Discount *'}
        options={['5%', '20%', '35%']}
        description={'Choose your Discount.'}
      />
    </>
  );
};

export default BaseSelectFeature;
