const currentLocalDate = () => {
  const timestamp = Math.floor(new Date().getTime() / 1000);
  const date = new Date(timestamp * 1000).toLocaleString().split('/').join('-');

  // const javaScriptRelease2 = Date.parse('04 Dec 1995 00:12:00 GMT'); // unix

  const javaScriptRelease0 = Date.parse('2023-03-05 12:25:41 GMT'); // GMT
  const javaScriptRelease1 = Date.parse('2023-03-05 12:25:41+02 GMT'); // +02 GMT
  const javaScriptRelease2 = Date.parse('2023-03-05 12:25:41+02'); // +02
  const javaScriptRelease3 = Date.parse('2023-03-05 12:25:41'); //

  console.log('2023-03-05 12:25:41 GMT --', javaScriptRelease0);
  console.log('2023-03-05 12:25:41+02 GMT', javaScriptRelease1);
  console.log('');

  console.log('2023-03-05 12:25:41+02 ---', javaScriptRelease2);
  console.log('2023-03-05 12:25:41 ------', javaScriptRelease3);
  console.log('');

  const Date_now = Date.now();
  const newDate_getTime = new Date().getTime();

  const newDate = new Date();
  const newDate_timestamp = new Date(timestamp * 1000);

  console.log('Date_now ---------------->', Date_now);
  console.log('newDate_getTime --------->', newDate_getTime);
  console.log('');

  console.log('newDate ------------------>', newDate);
  console.log('newDate_timestamp -------->', newDate_timestamp);
  console.log('');

  return { timestamp, date };
};

export default currentLocalDate;
