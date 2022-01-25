import s from './App.module.scss';
import Header from './Header';

const App = ({ featureTitle, description, children }) => {
  return (
    <div className={s.App}>
      <Header featureTitle={featureTitle} description={description} />
      {children}
    </div>
  );
};

export default App;
