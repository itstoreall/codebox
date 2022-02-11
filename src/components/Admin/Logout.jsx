import { PrimaryButton } from './uiElements';

const Logout = ({ setCodeboxToken }) => {
  const removeToken = () => {
    localStorage.setItem('codeboxToken', '');
    setCodeboxToken('');
  };

  return (
    <PrimaryButton
      className={'admin-logout-btn'}
      position={'absolute'}
      top={'-62px'}
      right={0}
      onClick={removeToken}
    >
      Logout
    </PrimaryButton>
  );
};

export default Logout;
