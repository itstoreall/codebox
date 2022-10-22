import decrypt from './decrypt';
import * as cl from '../../../../helpers/logMargins';

const decryptUrlParams = data => {
  const cryptedLinkPart = decrypt('supersecretword', data.params);

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

  cl.mt(' -- params decryption:', Boolean(obj));

  return obj;
};

export default decryptUrlParams;
