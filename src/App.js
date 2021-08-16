import { useState, useEffect } from 'react';
import { useMediaQuery } from '@material-ui/core';
import refs from './styles/refs';
import Header from './components/Markup/Header';
import Container from './components/Container';
import Navbar from './components/Markup/Navbar';
import Nav from './components/Markup/Nav';
import Main from './components/Markup/Main';
import appContent from './app.json';
import Context from './Context';
import './App.scss';

// const { log } = console;

export default function App() {
  const [showNavbar, setShowNavbar] = useState(false);

  // Nav
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = showNavbar ? 'hidden' : 'auto';
  }, [showNavbar]);

  // ------- useMediaQuery -------
  const handleMaxWidth = width => {
    return `(max-width:${width}px) `;
  };
  const handleMinWidth = width => {
    return `(min-width:${width}px) `;
  };
  const tablet = useMediaQuery(handleMinWidth(refs.tablet));
  const tabletMax = useMediaQuery(handleMaxWidth(refs.tabletMax));
  // const desktop = useMediaQuery(handleMinWidth(refs.desktop));
  // ----- End useMediaQuery -----

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const { views } = appContent;
  return (
    <Context.Provider
      value={{ views, tabletMax, showNavbar, setShowNavbar, toggleNavbar }}
    >
      <div className="App">
        <Header />
        {showNavbar && <Navbar />}
        <Container>{tablet && <Nav />}</Container>
        <Main />
      </div>
    </Context.Provider>
  );
}
