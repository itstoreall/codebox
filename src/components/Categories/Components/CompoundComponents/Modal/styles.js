import styled from 'styled-components/macro';
import {
  FlexColumn,
  FlexRow,
  SolidButton,
  OutlineButton,
  DisabledButton,
} from './themeComponents';

export const mediaWidths = {
  desktop: 1920,
  desktopSm: 1680,
  laptop: 1440,
  laptopSm: 1200,
  tablet: 1024,
  tabletSm: 800,
  mobile: 560,
  mobileM: 420,
  mobileSm: 360,
};

export const Wrapper = styled.div`
  background-color: #f8f8f8;
  border-radius: 5px;
`;

export const Content = styled(FlexColumn)`
  position: static;

  @media screen and (min-width: ${mediaWidths.mobile}px) {
    position: relative;
    padding: 30px 80px;
  }
`;

export const CloseIcon = styled.img`
  position: absolute;
  top: 16px;
  right: 20px;
  width: 20px;
  cursor: pointer;
`;

export const ModalTitle = styled.h2`
  margin-bottom: 25px;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 32px;
  text-align: center;
`;

export const ModalText = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

export const ModalInput = styled.input`
  outline: ${({ color }) => (color ? `1px solid ${color}` : 'none')};
  border: none;
  padding: 5px 10px;
  color: ${({ color }) => color};
  border-radius: 5px;
  font-size: 16px;
  margin-bottom: 16px;
  outline: 1px solid ${({ color }) => color};

  ::placeholder {
    color: ${({ color }) => color && color};
  }

  &:focus {
    outline: 1px solid
      ${({ color, theme }) => (color ? color : theme?.solidBtnBack)};
  }
`;

export const ModalField = styled(FlexRow)`
  justify-content: space-between;
  margin-bottom: 16px;
  gap: ${({ gap }) => `${gap}px` ?? 0};
`;

export const ButtonWrap = styled.div`
  display: flex;
  gap: 40px;

  > button {
    min-width: 150px;
  }
`;

export const ModalSolidButton = styled(SolidButton)`
  flex: 1;
  padding: 12px;
`;

export const ModalOutlineButton = styled(OutlineButton)`
  flex: 1;
  padding: 12px;
`;

export const ModalDisableButton = styled(DisabledButton)`
  flex: 1;
  padding: 12px;
`;
