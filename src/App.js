import { useState, useEffect, useMemo } from 'react';
import { withRouter } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import MediaQuery from './services/MediaQuery';
import refs from './styles/refs';
import { GET_ALL_VIEWS } from './graphql/query/view';
import db from './db/data.json';
import useDataIterator from './hooks/useDataIterator';
import Header from './components/Markup/Header';
import NavModal from './components/Markup/NavModal';
import Main from './components/Markup/Main';
import Footer from './components/Markup/Footer';
import Context from './Context';
import { setBodyOverflow } from './utils/app';
import './App.scss';
import AppModal from './components/Markup/Modal/AppModal';
import AppModalContent from './components/Markup/Modal/AppModalContent';
// import logs from './services/logs'; // *

export default withRouter(function App({ location }) {
  const { views } = db;
  const media = MediaQuery(refs);
  const [showNavModal, setShowNavModal] = useState(false);
  const [localState, setLocalState] = useState(null);
  const [allViews, setAllViews] = useState();

  const informationData = useDataIterator(location, views);

  const { data, loading, error, refetch } = useQuery(GET_ALL_VIEWS);

  useEffect(() => setBodyOverflow(showNavModal), [showNavModal]);
  useEffect(() => setLocalState({ ...informationData }), []);
  useEffect(() => !loading && setAllViews(data.getAllViews), [data]);

  const toggleNavMenu = () => setShowNavModal(!showNavModal);

  // Reused modal ---------------------------------
  const [showAppModal, setShowAppModal] = useState(false);
  const [modalAppContent, setModalAppContent] = useState(null);

  const toggleAppModal = value => {
    setModalAppContent(value);
    value !== 'remove-modal' && setShowAppModal(!showAppModal);
    value === 'remove-modal' && setShowAppModal(false);
  }; // -------------------------------------------

  // useMemo(() => logs.appState(localState), [localState]) // *

  const providedContext = {
    localState,
    views,
    media,
    showNavModal,
    setLocalState,
    setShowNavModal,
    toggleNavMenu,
    showAppModal,
    allViews,
    loading,
    refetch,
    toggleAppModal,
    modalAppContent,
  };

  return (
    <Context.Provider value={providedContext}>
      <div className="App">
        <Header />
        {showNavModal && <NavModal />}
        <Main />
        <Footer />
        {showAppModal && (
          <AppModal>
            <AppModalContent content={modalAppContent} />
          </AppModal>
        )}
      </div>
    </Context.Provider>
  );
});
