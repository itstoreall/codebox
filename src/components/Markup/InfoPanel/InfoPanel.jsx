import s from './InfoPanel.module.scss';
import History from '../History';
import Information from '../../Information';

const InfoPanel = () => {
  return (
    <div className={s.infoPanel}>
      <History />
      <Information />
    </div>
  );
};

export default InfoPanel;
