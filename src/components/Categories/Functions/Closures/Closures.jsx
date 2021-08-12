import { useState } from 'react';
import CategorySection from '../../../Markup/Sections/CategorySection';

const { log } = console;

const Closures = () => {
  const [n, setN] = useState(0);
  const [num, setNum] = useState(0);

  log(n, num);

  const handleInputValue = e => {
    e.preventDefault();

    const { name, value } = e.currentTarget;

    name === 'n' ? setN(value) : setNum(value);

    log(value);
    log(name);
  };

  const incrementor = n => {
    return function (num) {
      return n + num;
    };
  };

  const addTen = incrementor(n);
  addTen(num);

  return (
    <CategorySection>
      <input value={n} name="n" onChange={handleInputValue} type="text"></input>
      <input
        value={num}
        name="num"
        onChange={handleInputValue}
        type="text"
      ></input>
      <span></span>
    </CategorySection>
  );
};

export default Closures;
