import Header from './components/Markup/Header';
import Nav from './components/Markup/Nav';
import Main from './components/Markup/Main';
import appContent from './app.json';
import Context from './Context';
import './App.scss';

// const { log } = console;

export default function App() {
  const { views } = appContent;
  return (
    <Context.Provider value={{ views }}>
      <div className="App">
        <Header />
        <Nav />
        <Main />
      </div>
    </Context.Provider>
  );
}
