// import { ModalSolidButton, ModalDisableButton } from '../../styles';
import s from '../../../Feature.module.scss';
import { useModalContext } from '../../Modal';

const ModalSolidInputButton = ({ children }) => {
  const { content, inputValue, coreFunction } = useModalContext();

  const coreFunctionButton = children => (
    <button className={s.Button} onClick={() => coreFunction()}>
      {children}
    </button>
  );

  const disableButton = children => (
    <button className={s.Button}>{children}</button>
  );

  return (
    <>
      {inputValue !== ''
        ? coreFunctionButton(children)
        : disableButton(children)}
    </>
  );
};

export default ModalSolidInputButton;
