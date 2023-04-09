import { MODAL_CONTENT } from '../../constants';

const inputConfigHandler = args => {
  const { content } = args;

  const configs = { text: '', color: '', disable: false };

  switch (content) {
    case MODAL_CONTENT[0]:
      configs.text = 'Enter the amount';
      break;
    case MODAL_CONTENT[1]:
      configs.text = 'Enter price';
      break;

    default:
      throw new Error(' in inputConfigHandler (switch)');
  }

  return configs;
};

export default inputConfigHandler;
