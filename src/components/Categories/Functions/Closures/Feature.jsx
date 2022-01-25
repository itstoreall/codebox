import s from './Feature.module.scss';
import App from '../../../Markup/FeatureTemplate';

const Feature = ({ viewTitle, featureTitle }) => {
  const description = `Different ways of using closures in functions.`;
  // Increment
  let result = 0;

  const incrementor = n => {
    return function (num) {
      return (result = n + num);
    };
  };

  const addNum = incrementor(10);
  addNum(7);

  // -------------------------------

  // Domains
  let domain = '';

  const domainCreator = name => {
    return sub => {
      return (domain = `https://${sub}.${name}.com.ua`);
    };
  };

  const newDomain = domainCreator('google');
  newDomain('blog');

  // -------------------------------

  // Bind
  let person = '';

  function bind(context, fn) {
    return function (...args) {
      fn.apply(context, args);
    };
  }

  function newPerson() {
    person = `Person: ${this.name}, ${this.age}, ${this.job}`;
  }

  const person1 = { name: 'Serhii', age: 39, job: 'Developer' };

  bind(person1, newPerson)();

  return (
    <App
      viewTitle={viewTitle}
      featureTitle={featureTitle}
      description={description}
    >
      <div className={s.Feature}>
        <ul>
          <li>
            <span className="increment">{`Incrementor - ${result}`}</span>
          </li>
          <li>
            <span className="domains">{`Domain - ${domain}`}</span>
          </li>
          <li>
            <span className="domains">{`Bind - ${person}`}</span>
          </li>
        </ul>
      </div>
    </App>
  );
};

export default Feature;
