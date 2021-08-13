import CategorySection from '../../../Markup/Sections/CategorySection';
import s from './Free.module.scss';

const { log } = console;

const Free = () => {
  return (
    <CategorySection>
      <div className={s.Free}>
        <p className={s.Free__p}>Free section</p>
      </div>
    </CategorySection>
  );
};

export default Free;
