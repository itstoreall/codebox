import { useState, useEffect, useMemo } from 'react';
import { withRouter } from 'react-router-dom';
import refs from './styles/refs';
import MediaQuery from './services/MediaQuery';
import db from './db/data.json';
import useDataIterator from './hooks/useDataIterator';
import Header from './components/Markup/Header';
import NavModal from './components/Markup/NavModal';
import Main from './components/Markup/Main';
import Footer from './components/Markup/Footer';
import Context from './Context';
import { setBodyOverflow } from './utils/app';
import './App.scss';
import logs from './services/logs';

export default withRouter(function App({ location }) {
  const { views } = db;
  const media = MediaQuery(refs);
  const [showNavModal, setShowNavModal] = useState(false);
  const [localState, setLocalState] = useState(null);
  const informationData = useDataIterator(location, views);

  useEffect(() => setBodyOverflow(showNavModal), [showNavModal]);
  useEffect(() => setLocalState({ ...informationData }), []);

  const toggleNavMenu = () => setShowNavModal(!showNavModal);

  useMemo(() => logs.appState(localState), [localState]);

  const providedContext = {
    localState,
    views,
    media,
    showNavModal,
    setLocalState,
    setShowNavModal,
    toggleNavMenu,
  };

  return (
    <Context.Provider value={providedContext}>
      <div className="App">
        <Header />
        {showNavModal && <NavModal />}
        <Main />
        <Footer />
      </div>
    </Context.Provider>
  );
});
