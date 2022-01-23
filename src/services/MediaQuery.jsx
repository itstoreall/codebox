import { useMediaQuery } from '@material-ui/core';

const MediaQuery = refs => {
  const handleMaxWidth = width => {
    return `(max-width:${width}px) `;
  };

  const handleMinWidth = width => {
    return `(min-width:${width}px) `;
  };

  return {
    viewport: { width: window.innerWidth, height: window.innerHeight },
    mobile: useMediaQuery(handleMinWidth(refs.mobile)),
    mobilePlus: useMediaQuery(handleMinWidth(refs.mobilePlus)),
    tablet: useMediaQuery(handleMinWidth(refs.tablet)),
    desktop: useMediaQuery(handleMinWidth(refs.desktop)),
    mobileMax: useMediaQuery(handleMaxWidth(refs.mobileMax)),
    mobilePlusMax: useMediaQuery(handleMaxWidth(refs.mobimobilePlusMaxlePlus)),
    tabletMax: useMediaQuery(handleMaxWidth(refs.tabletMax)),
    desktopMax: useMediaQuery(handleMaxWidth(refs.desktopMax)),
  };
};

export default MediaQuery;
