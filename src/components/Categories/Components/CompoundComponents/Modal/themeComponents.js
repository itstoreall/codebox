import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme?.bodyBack};
  transition: background-color 0.4s;
`;

export const Main = styled.main`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 70px;
  flex: 1;
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const DefaultButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  transition: 0.3s all;
`;

/*
padding: ${({ padding }) => padding};
width: ${({ width }) => width};
flex: ${({ flex }) => flex};
font-size: ${({ fontSize }) => fontSize};
white-space: ${({ whiteSpace }) => whiteSpace};
*/

export const SolidButton = styled(DefaultButton)`
  width: ${({ width }) => width};
  min-width: ${({ minWidth }) => minWidth};
  max-width: ${({ maxWidth }) => maxWidth};
  height: ${({ height }) => height};
  min-height: ${({ minHeight }) => minHeight};
  font-weight: 500;
  color: #f9f9f9;
  background: ${({ theme }) => theme.solidBtnBack};
  border: 1px solid transparent;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.solidBtnBackHover};
  }
`;

export const OutlineButton = styled(DefaultButton)`
  color: ${({ theme }) => theme?.outlineBtnText};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.outlineBtnBorder};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.outlineBtnBackHover};
  }
`;

export const DisabledButton = styled(DefaultButton)`
  color: ${({ color, theme }) => (color ? color : theme.primaryText35)};
  background: transparent;
  border: 1px solid
    ${({ color, theme }) => (color ? color : theme.primaryText35)};
  outline: none;
  cursor: auto;
`;
