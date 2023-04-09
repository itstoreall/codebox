import s from '../../../Feature.module.scss';
import { useModalContext } from '../../Modal';

const ModalButton = ({ children }) => {
  const { content, inputValue, coreFunction } = useModalContext();

  const Button = children => (
    <button
      className={s.Button}
      onClick={() => coreFunction(`${content} ${inputValue}`)}
    >
      {children}
    </button>
  );

  const disableButton = children => (
    <button className={s.DisableButton}>{children}</button>
  );

  return <>{inputValue !== '' ? Button(children) : disableButton(children)}</>;
};

export default ModalButton;
