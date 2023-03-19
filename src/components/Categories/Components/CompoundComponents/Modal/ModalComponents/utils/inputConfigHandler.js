import { MODAL_CONTENT } from '../../constants';

const inputConfigHandler = args => {
  const { content } = args;

  const configs = { text: '', color: '', disable: false };

  switch (content) {
    case MODAL_CONTENT[0]:
      configs.text = 'Not approved';
      configs.color = 'red';
      configs.disable = false;
      break;
    case MODAL_CONTENT[1]:
      configs.text = 'Not approved';
      configs.color = 'red';
      configs.disable = false;
      break;
    case MODAL_CONTENT[2]:
      configs.text = '0x';
      configs.color = '';
      configs.disable = false;
      break;

    default:
      throw new Error(' in inputConfigHandler (switch)');
  }

  return configs;
};

export default inputConfigHandler;
