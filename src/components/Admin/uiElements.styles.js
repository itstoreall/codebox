import styled from 'styled-components';
import refs from '../../styles/refs';

const createInputPading = padding =>
  padding
    .split('px')
    .filter(Boolean)
    .map(el => `${+el - 1}px`)
    .join(' ');

export const Input = styled.input`
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  padding: ${({ padding }) => padding};
  color: ${({ color }) => color};
  background-color: ${refs.primaryWhiteColor};
  border: 2px solid ${refs.primaryTextColor};
  border-radius: 4px;

  :focus {
    padding: ${({ padding }) => createInputPading(padding)};
    border: 3px solid ${refs.activeLinkColor};
    outline: none;
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${refs.primaryBlackColor25};
  }
  :-ms-input-placeholder {
    color: ${refs.primaryBlackColor25};
  }
`;

export const Button = styled.button`
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  padding: ${({ padding }) => padding};
  color: ${({ color }) => color};
  white-space: ${({ whiteSpace }) => whiteSpace};
  background-color: ${refs.primaryTextColor};
  border-radius: 4px;

  &:hover {
    background-color: ${refs.BG__GreyBlue};
    cursor: pointer;
  }

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const CustomButton = styled.button`
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  display: ${({ display }) => display};
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  display: ${({ display }) => display};
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  color: ${({ color }) => color};
  white-space: ${({ whiteSpace }) => whiteSpace};
  background-color: ${refs.primaryTextColor};
  border-radius: ${({ borderRadius }) => borderRadius};

  &:hover {
    background-color: ${refs.BG__GreyBlue};
    cursor: pointer;
  }

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

/*
path {
  stroke: ${({ stroke, theme }) => stroke ?? theme.primary1};
}
*/
