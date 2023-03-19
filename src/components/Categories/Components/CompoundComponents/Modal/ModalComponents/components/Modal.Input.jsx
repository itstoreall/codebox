import { ChangeEvent, useEffect, useState } from 'react';
import { ModalInput } from '../../styles';
import { useModalContext } from '../../Modal';
import inputConfigHandler from '../utils/inputConfigHandler';

const Input = () => {
  const {
    content,
    isBalance,
    isAllowance,
    isApproveFUN,
    isFetching,
    inputValue,
    state,
    contentHandler: cont,
    inputHandler,
  } = useModalContext();

  const [args, setArgs] = useState({
    content: content,
    isBalance: false,
    isApprove: (cont && cont(isAllowance, isApproveFUN, true)) || false,
    isFetching: false,
    inputValue: '',
    state: state || null,
  });

  useEffect(() => {
    setArgs(args => ({
      ...args,
      isBalance: isBalance || false,
      isApprove: (cont && cont(isAllowance, isApproveFUN, true)) || false,
      isFetching: isFetching || false,
      inputValue: inputValue || '',
      state: state || null,
    }));
  }, [isBalance, isFetching, isApproveFUN, inputValue]);

  const _inputHandler = e =>
    inputHandler(
      typeof e === 'string'
        ? cont(isAllowance ? e : '', '', '')
        : e.target.value,
    );

  return (
    <>
      {
        <ModalInput
          type={content !== 'transfer_nft' ? 'number' : 'text'}
          name="amount"
          value={inputValue}
          placeholder={inputConfigHandler(args).text}
          onChange={e => _inputHandler(e)}
          disabled={inputConfigHandler(args).disable}
          color={inputConfigHandler(args).color}
        />
      }
    </>
  );
};

export default Input;
