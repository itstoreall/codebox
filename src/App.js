import Header from './components/Layout/Header';
import Nav from './components/Layout/Nav';
import Main from './components/Layout/Main';
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
