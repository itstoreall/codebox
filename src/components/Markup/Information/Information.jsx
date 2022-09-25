/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Context from '../../../Context';
import s from './Information.module.scss';
import InformationBtn from './InformationBtn';
import InformationLists from './InformationLists';
import useDataIterator from '../../../hooks/useDataIterator';

const Information = ({ location }) => {
  const [showInformation, setShowInformation] = useState(false);
  const [information, setInformation] = useState(null);
  const { localState, setLocalState, views } = useContext(Context);
  const informationData = useDataIterator(location, views);

  useEffect(() => setInformation(informationData), [location.pathname]);

  useEffect(
    () => setLocalState({ ...localState, ...information }),
    [information],
  );

  const toggleInformationModal = () => setShowInformation(!showInformation);

  return (
    <div className={s.Information}>
      <InformationBtn
        showInformation={showInformation}
        toggleInformationModal={toggleInformationModal}
      ></InformationBtn>

      {showInformation && <InformationLists information={information} />}
    </div>
  );
};

export default withRouter(Information);
