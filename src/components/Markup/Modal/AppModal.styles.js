import styled from 'styled-components';
import refs from '../../../styles/refs';

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
  min-width: 100px;
  min-height: 100px;
  cursor: auto;
  box-shadow: ${refs.secondaryShadow};
`;

export const CloseBtn = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 10px;
  right: 10px;
  height: 24px;
  width: 24px;
  line-heught: 1.2;
  fill: #fff;
  cursor: pointer;
  z-index: 3;
`;

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 6px;
`;

export const OpenModalBtn = styled.button.attrs()`
  padding: 10px 25px;
  margin-bottom: 10px;
  border-radius: 4px;
  color: #fff;
  background-color: ${refs.linkColor};

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover { 
    background-color: ${props => props.bgColor};
    cursor: pointer;
  }

  tabIndex={-1}

  &:focus {
    outline: 0;
  }
`;
