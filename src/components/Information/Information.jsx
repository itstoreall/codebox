import { useState, useContext, useEffect } from 'react';
import Context from '../../Context';
import s from './Information.module.scss';
import InformationBtn from './InformationBtn';
import InformationList from './InformationList';
// import sprite from '../../svg/sprite.svg';

const Information = () => {
  const [showInformation, setShowInformation] = useState(false);
  const { localState, setLocalState, views } = useContext(Context);

  console.log('Information --->', localState);
  console.log('views --->', views);

  useEffect(() => {
    console.log('uE ->, ');
  }, []);

  const toggleInformationModal = () => setShowInformation(!showInformation);

  return (
    <div className={s.Information}>
      <InformationBtn
        toggleInformationModal={toggleInformationModal}
      ></InformationBtn>

      {showInformation && (
        <div className={s.Information__listWrap}>
          <InformationList localState={localState} />
        </div>
      )}
    </div>
  );
};

export default Information;
