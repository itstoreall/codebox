const encrypt = (key, text) => {
  const textToChars = text => text.split('').map(c => c.charCodeAt(0));
  const byteHex = n => ('0' + Number(n).toString(16)).substr(-2);
  const applyKeyToChar = code => textToChars(key).reduce((a, b) => a ^ b, code);

  return text
    .split('')
    .map(textToChars)
    .map(applyKeyToChar)
    .map(byteHex)
    .join('');
};

export default encrypt;
