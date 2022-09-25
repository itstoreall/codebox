const currentLocalDate = () => {
  const timestamp = Math.floor(new Date().getTime() / 1000);
  const date = new Date(timestamp * 1000).toLocaleString().split('/').join('-');

  return { timestamp, date };
};

export default currentLocalDate;
