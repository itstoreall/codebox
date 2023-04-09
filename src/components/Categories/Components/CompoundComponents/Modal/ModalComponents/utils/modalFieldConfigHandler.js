const modalFieldConfigHandler = args => {
  const { inputValue, state, contentHandler } = args;

  const configs = {
    buy: [{ name: 'Min buy: ', value: state ? state?.amount : 0 }],
    sell: [{ name: 'Amount: ', value: inputValue ? inputValue : 0 }],
  };

  return contentHandler(configs.buy, configs.sell);
};

export default modalFieldConfigHandler;
