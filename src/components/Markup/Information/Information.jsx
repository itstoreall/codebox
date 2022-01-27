import { useState, useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Context from '../../../Context';
import s from './Information.module.scss';
import InformationBtn from './InformationBtn';
import InformationList from './InformationList';
import useDataIterator from '../../../hooks/useDataIterator';

const Information = ({ location }) => {
  const informationData = useDataIterator(location);
  const [showInformation, setShowInformation] = useState(false);
  const [information, setInformation] = useState(null);
  const { localState, setLocalState } = useContext(Context);

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

      {showInformation && <InformationList information={information} />}
    </div>
  );
};

export default withRouter(Information);
