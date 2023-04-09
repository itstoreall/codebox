import styled from 'styled-components/macro';

export const mediaWidths = {
  mobile: 580,
};

export const Backdrop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 11;
  animation:fadein .3s;
  background-color: rgba(0, 0, 0, 0.85);;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
`;

export const Wrapper = styled.div`
  background-color: #f8f8f8;
  border-radius: 5px;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
`;

export const Content = styled(FlexColumn)`
  position: relative;
  padding: 20px 30px 30px;
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
