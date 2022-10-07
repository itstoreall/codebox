const decrypt = (key, encoded) => {
  const textToChars = text => text.split('').map(c => c.charCodeAt(0));
  const applySaltToChar = code =>
    textToChars(key).reduce((a, b) => a ^ b, code);
  // @ts-ignore
  return encoded
    .match(/.{1,2}/g)
    .map(hex => parseInt(hex, 16))
    .map(applySaltToChar)
    .map(charCode => String.fromCharCode(charCode))
    .join('');
};

export const decryptUrlParams = () => {
  // нижнее подчеркивание в ссылке, идентификатор части с зашифрованными данными
  const cryptedLinkPart = decrypt(
    'somesuncreatecargalaxyeasygovermentceleniumproduction',
    window.location.href.split('_*')[1].split('/')[0],
  );
  // форматирование зависит от вида зашифрованой строки
  const replaceSpecial = `{${cryptedLinkPart
    .replaceAll('&', ',')
    .replaceAll('=', ':')}}`;

  const addQuotes = replaceSpecial.replace(/(\w+)/gm, matchedStr => {
    return '"' + matchedStr + '"';
  });

  const obj = JSON.parse(addQuotes);

  Object.keys(obj).forEach(el => {
    if (/\d/.test(obj[el])) {
      obj[el] = parseInt(obj[el]);
    }
  });

  return obj;
};
