import styled from 'styled-components';
import refs from '../../styles/refs';

const createInputPading = padding =>
  padding &&
  padding
    .split('px')
    .filter(Boolean)
    .map(el => `${+el - 1}px`)
    .join(' ');

// Inputs
export const InitialInput = styled.input`
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color }) => color};
  white-space: ${({ whiteSpace }) => whiteSpace};
  overflow: ${({ overflow }) => overflow};
  text-overflow: ${({ textOverflow }) => textOverflow};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  outline: ${({ outline }) => outline};

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

export const PrimaryInput = styled(InitialInput)`
  :focus {
    padding: ${({ padding }) => createInputPading(padding)};
    border: 2px solid ${refs.activeLinkColor};
    outline: none;
  }
`;

export const SecondaryInput = styled(InitialInput)``;

// Buttons
const Button = styled.button`
  background-color: ${refs.primaryTextColor};

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

export const CustomBtn = styled(Button)`
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  display: ${({ display }) => display};
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  display: ${({ display }) => display};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
  white-space: ${({ whiteSpace }) => whiteSpace};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  transform: ${({ transform }) => transform};

  &:hover {
    background-color: ${refs.BG__GreyBlue};
  }
`;

/*
path {
  stroke: ${({ stroke, theme }) => stroke ?? theme.primary1};
}
*/
