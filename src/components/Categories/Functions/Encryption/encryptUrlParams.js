import { v4 as uuid } from 'uuid';
import encrypt from './encrypt';
import * as cl from '../../../../helpers/logMargins';

const encryptUrlParams = () => {
  const id = uuid().split(['']).filter(Number).join('').slice(0, 10);
  const discountId = uuid().split(['']).filter(Number).join('').slice(0, 10);
  const currentDate = new Date();
  const currentDatePlusTwoMouths = new Date(
    currentDate.setMonth(currentDate.getMonth() + 2),
  );
  const linkExpiredDate = Math.floor(currentDatePlusTwoMouths.getTime() / 1000);

  const urlParams = `id=${id}&discountId=${discountId}&discountExpire=${linkExpiredDate}`;

  const encryptedLink = encrypt('supersecretword', urlParams);

  const url = `https://example.com/${encryptedLink}&addition`;

  cl.mt(' -- params encryption:', Boolean(encryptedLink));

  return { url, encryptedLink };
};

export default encryptUrlParams;
