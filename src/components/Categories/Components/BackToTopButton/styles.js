import s from 'styled-components';
import refs from '../../../../styles/refs';

export const BackToTopContainer = s.div`
  // position: relative; // *
  background-color: red;
  width: 100%;
`;

export const BackToTopBtn = s.div`
  // position: absolute; // *
  position: fixed;
  bottom: 40px;
  right: 35px;
  display: flex;
  visibility: ${props => (props.out ? 'visible' : 'hidden')};
  animation: ${props => (props.out ? 'fadeIn' : 'fadeOut')} 250ms linear;
  transition: visibility 250ms linear;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${refs.linkColor};
  cursor: pointer;
  z-index: 10;

  // &:hover {
  //   background-color: ${refs.activeLinkColor};
  // }
`;
