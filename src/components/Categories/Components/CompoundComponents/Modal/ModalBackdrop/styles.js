import styled from 'styled-components/macro';

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
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #f8f8f8;
  z-index: 10000;
  animation:fadein .3s;

  @media screen and (min-width: ${mediaWidths.mobile}px) {
    background-color: #000000e1;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
`;
