import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerIcon = styled.svg`
  animation: 1s ${rotate} linear infinite;
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  min-height: ${({ size }) => size};
  min-width: ${({ size }) => size};
  // background-color: #e8fdf2;
  border-radius: 50%;
  padding: 0px;
  path {
    stroke: ${({ stroke, theme }) => stroke ?? theme.primary1};
  }
`;
