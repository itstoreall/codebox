import { CustomButton } from './uiElements';

const Logout = ({ setCodeboxToken }) => {
  const removeToken = () => {
    localStorage.setItem('codeboxToken', '');
    setCodeboxToken('');
  };

  return (
    <CustomButton
      className={'admin-logout-btn'}
      // position={'absolute'}
      // top={'-62px'}
      // right={0}
      padding={'10px 20px'}
      borderRadius={'4px'}
      onClick={removeToken}
    >
      Logout
    </CustomButton>
  );
};

export default Logout;
