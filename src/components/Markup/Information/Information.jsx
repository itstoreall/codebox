import { useState, useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Context from '../../../Context';
import s from './Information.module.scss';
import InformationBtn from './InformationBtn';
import InformationList from './InformationList';
import DataIterator from '../../../services/DataIterator';

const Information = ({ location }) => {
  const [showInformation, setShowInformation] = useState(false);
  const [information, setInformation] = useState(null);
  const { localState, views } = useContext(Context);

  useEffect(() => {
    // setInformation(DataIterator());
    DataIterator(views, location);
  }, [localState]);

  const toggleInformationModal = () => setShowInformation(!showInformation);

  return (
    <div className={s.Information}>
      <InformationBtn
        toggleInformationModal={toggleInformationModal}
      ></InformationBtn>

      {showInformation && (
        <div className={s.Information__listWrap}>
          <InformationList localState={localState} information={information} />
        </div>
      )}
    </div>
  );
};

export default withRouter(Information);
