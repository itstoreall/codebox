import { useState, useEffect } from 'react';
import refs from './styles/refs';
import MediaQuery from './services/MediaQuery';
import Header from './components/Markup/Header';
import NavModal from './components/Markup/NavModal';
import Main from './components/Markup/Main';
import appContent from './app.json';
import Context from './Context';
import './App.scss';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';

export default withRouter(function App({ location }) {
  const media = MediaQuery(refs);
  const [showNavModal, setShowNavModal] = useState(false);
  const [localState, setLocalState] = useState({
    viewport: media.viewport,
    page: location.pathname,
  });

  // Nav
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = showNavModal ? 'hidden' : 'auto';
  }, [showNavModal]);

  // State
  useEffect(
    () =>
      setLocalState({
        ...localState,
        page: location.pathname,
        viewport: media.viewport,
      }),
    [location],
  );

  const toggleNavMenu = () => {
    setShowNavModal(!showNavModal);
  };

  const { views } = appContent;
  return (
    <Context.Provider
      value={{
        localState,
        views,
        media,
        showNavModal,
        setLocalState,
        setShowNavModal,
        toggleNavMenu,
      }}
    >
      <div className="App">
        <Header />
        {showNavModal && <NavModal />}
        <Main />
      </div>
    </Context.Provider>
  );
});
