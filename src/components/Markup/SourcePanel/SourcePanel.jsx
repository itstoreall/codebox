import { useContext } from 'react';
import s from './SourcePanel.module.scss';
import Context from '../../../Context';
import sprite from '../../../svg/sprite.svg';

const SourcePanel = ({ viewTitle, featureTitle }) => {
  const { views } = useContext(Context);

  return (
    <div className={s.SourcePanel__wrap}>
      {views.map(({ title, links }) => {
        return (
          title === viewTitle &&
          links.map(
            link =>
              link.source &&
              link.anchor === featureTitle && (
                <a
                  key={link.l_id}
                  className={s.SourcePanel__link}
                  href={link.source}
                  target="_blanck"
                >
                  <svg
                    className={s.SourcePanel__svgSource}
                    width="20"
                    height="20"
                  >
                    <use href={sprite + '#github'}></use>
                  </svg>
                  <span
                    className={s.SourcePanel__linkAnchor}
                  >{`${link.anchor} source`}</span>
                </a>
              ),
          )
        );
      })}
    </div>
  );
};

export default SourcePanel;
