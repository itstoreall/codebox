import { ModalInput } from '../../styles';
import { useModalContext } from '../../Modal';
import inputConfigHandler from '../utils/inputConfigHandler';

const Input = () => {
  const { content, inputValue, inputHandler } =
    useModalContext();

  return (
    <>
      {
        <ModalInput
          type={'number'}
          name="amount"
          value={inputValue}
          placeholder={inputConfigHandler({ content }).text}
          onChange={e => inputHandler(e.target.value)}
        />
      }
    </>
  );
};

export default Input;
