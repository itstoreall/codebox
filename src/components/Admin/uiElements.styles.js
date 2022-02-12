import styled from 'styled-components';
import refs from '../../styles/refs';

const createInputPading = padding =>
  padding
    .split('px')
    .filter(Boolean)
    .map(el => `${+el - 1}px`)
    .join(' ');

// Inputs
export const Input = styled.input`
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color }) => color};
  background-color: ${refs.primaryWhiteColor};
  border: 1px solid ${refs.primaryTextColor};
  border-radius: 4px;

  :focus {
    padding: ${({ padding }) => createInputPading(padding)};
    border: 2px solid ${refs.activeLinkColor};
    outline: none;
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${refs.primaryBlackColor25};
  }
  :-ms-input-placeholder {
    color: ${refs.primaryBlackColor25};
  }

  :focus::-webkit-input-placeholder {
    color: transparent;
  }

  :focus::-moz-placeholder {
    color: transparent;
  }

  :focus:-moz-placeholder {
    color: transparent;
  }

  :focus:-ms-input-placeholder {
    color: transparent;
  }
`;

// Buttons
const InitialBtn = styled.button`
  &:hover {
    cursor: pointer;
  }

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const Button = styled(InitialBtn)`
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  display: ${({ display }) => display};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width};
  color: ${({ color }) => color};
  white-space: ${({ whiteSpace }) => whiteSpace};
  background-color: ${refs.primaryTextColor};
  border-radius: 4px;

  &:hover {
    background-color: ${refs.BG__GreyBlue};
  }
`;

export const CustomButton = styled(InitialBtn)`
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
  }
`;

/*
path {
  stroke: ${({ stroke, theme }) => stroke ?? theme.primary1};
}
*/
