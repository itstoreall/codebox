export const setBodyOverflow = showNavModal => {
  const body = document.querySelector('body');
  body.style.overflow = showNavModal ? 'hidden' : 'auto';
};
