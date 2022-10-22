import { useState, useEffect } from 'react';
import { BackToTopContainer, BackToTopBtn } from './styles';
import sprite from '../../../../svg/sprite.svg';

const BackToTopButton = () => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    window.scroll({
      top: position.top,
      left: position.left,
      behavior: 'smooth',
    });
  });

  const _setPosition = () =>
    setPosition({ ...position, position: { top: 0, left: 0 } });

  return (
    <BackToTopContainer>
      <BackToTopBtn onClick={() => _setPosition()}>
        <svg height="16">
          <use href={sprite + '#icon-arrow-top'}></use>
        </svg>
      </BackToTopBtn>
    </BackToTopContainer>
  );
};

export default BackToTopButton;
