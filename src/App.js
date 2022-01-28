import { useState, useEffect, useMemo } from 'react';
import { withRouter } from 'react-router-dom';
import refs from './styles/refs';
import MediaQuery from './services/MediaQuery';
import Header from './components/Markup/Header';
import NavModal from './components/Markup/NavModal';
import Main from './components/Markup/Main';
import Footer from './components/Markup/Footer';
import appContent from './db/data.json';
import Context from './Context';
import './App.scss';

export default withRouter(function App() {
  const media = MediaQuery(refs);
  const [showNavModal, setShowNavModal] = useState(false);
  const [localState, setLocalState] = useState(null);
  const { views } = appContent;

  useMemo(() => console.log('App - state:', localState), [localState]);

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = showNavModal ? 'hidden' : 'auto';
  }, [showNavModal]);

  const toggleNavMenu = () => setShowNavModal(!showNavModal);

  const contextValues = {
    localState,
    views,
    media,
    showNavModal,
    setLocalState,
    setShowNavModal,
    toggleNavMenu,
  };

  return (
    <Context.Provider value={contextValues}>
      <div className="App">
        <Header />
        {showNavModal && <NavModal />}
        <Main />
        <Footer />
      </div>
    </Context.Provider>
  );
});
