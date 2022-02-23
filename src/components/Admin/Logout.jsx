import { CustomButton } from './uiElements';

const Logout = ({ setCodeboxToken }) => {
  const removeToken = () => {
    localStorage.setItem('codeboxToken', '');
    setCodeboxToken('');
  };

  return (
    <CustomButton
      className={'admin-logout-btn'}
      padding={'10px 20px'}
      borderRadius={'4px'}
      onClick={removeToken}
    >
      Logout
    </CustomButton>
  );
};

export default Logout;
