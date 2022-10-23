/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { BackToTopContainer, BackToTopBtn } from './styles';
import sprite from '../../../../svg/sprite.svg';

const BackToTopButton = () => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [visibility, setVisibility] = useState(false);

  const setScrollY = () => {
    window.scrollY > 70 ? setVisibility(true) : setVisibility(false);
  };

  const addListener = () => {
    window.addEventListener('scroll', () => setScrollY());
    // removeListener();
    console.log('add listener');
  };

  // const removeListener = () =>
  //   window.removeEventListener(
  //     'scroll',
  //     addListener,
  //     console.log('remove listener'),
  //   );

  useEffect(() => {
    window.scroll({
      top: position.top,
      left: position.left,
      behavior: 'smooth',
    });
  }, [position]);

  useEffect(() => {
    addListener();
  }, []);

  const _setPosition = () =>
    setPosition({ ...position, position: { top: 0, left: 0 } });

  return (
    <BackToTopContainer>
      <BackToTopBtn out={visibility} onClick={() => _setPosition()}>
        <svg height="16">
          <use href={sprite + '#icon-arrow-top'}></use>
        </svg>
      </BackToTopBtn>
    </BackToTopContainer>
  );
};

export default BackToTopButton;
