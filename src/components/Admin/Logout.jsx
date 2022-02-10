const Logout = ({ setCodeboxToken }) => {
  const removeToken = () => {
    localStorage.setItem('codeboxToken', '');
    setCodeboxToken('');
  };

  return (
    <button type="button" onClick={removeToken}>
      Logout
    </button>
  );
};

export default Logout;
