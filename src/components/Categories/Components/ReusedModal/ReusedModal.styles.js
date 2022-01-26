import styled from 'styled-components';
import '../../../../styles/refs';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  width: 100%;
  height: 100vh;
  background: rgba(60, 63, 67, 0.6);
  cursor: pointer;
  // z-index: 9;

  @media screen and (min-width: 451px) {
    padding: 25px;
  }
`;

export const Modal = styled.div`
  position: relative;
  min-width: 240px;
  hin-height: 240px;
  cursor: auto;
`;

export const CloseBtn = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 24px;
  right: 24px;
  height: 24px;
  width: 24px;
  line-heught: 1.2;
  fill: #fff;
`;

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 6px;
`;

export const OpenModalBtn = styled.button.attrs()`
  padding: 10px 25px;
  margin-bottom: 10px;
  border-radius: 4px;
  color: #fff;
  background-color: ${props => props.bgColor};
  opacity: 0.9; 

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover { 
    cursor: pointer;
    opacity: 1; 
  }

  tabIndex={-1}

  &:focus {
    outline: 0;
  }
`;

// --- Rotating cross ---

// import { keyframes } from 'styled-components';

// const rotateCloseBtn = keyframes`
//  0% {
//     transform: rotate(0deg);
//   }
//   100% {
//     transform: rotate(180deg);
//   }
// `;

// &:hover {
//   animation: ${rotateCloseBtn} 600ms forwards;
//   cursor: pointer;
// }

// ---
