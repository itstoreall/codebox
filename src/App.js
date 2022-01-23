import { useState, useEffect } from 'react';
import refs from './styles/refs';
import MediaQuery from './services/MediaQuery';
import Header from './components/Markup/Header';
import NavModal from './components/Markup/NavModal';
import Main from './components/Markup/Main';
import appContent from './app.json';
import Context from './Context';
import './App.scss';

export default function App() {
  const media = MediaQuery(refs);
  const [showNavModal, setShowNavModal] = useState(false);
  const [currentState, setCurrentState] = useState({
    viewport: media.viewport,
  });

  // Nav
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = showNavModal ? 'hidden' : 'auto';
  }, [showNavModal]);

  // State
  useEffect(
    () => setCurrentState({ currentState, viewport: media.viewport }),
    [],
  );

  console.log('currentState --->', currentState.viewport);

  const toggleNavMenu = () => {
    setShowNavModal(!showNavModal);
  };

  const { views } = appContent;
  return (
    <Context.Provider
      value={{
        views,
        media,
        showNavModal,
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
}
