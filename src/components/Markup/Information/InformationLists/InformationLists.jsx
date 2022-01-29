import s from '../Information.module.scss';
import CurrentList from './CurrentList';
import GeneralList from './GeneralList';

const InformationLists = ({ information }) => {
  return (
    <div className={s.Information__listWrap}>
      <CurrentList information={information} />
      <GeneralList />
    </div>
  );
};

export default InformationLists;
