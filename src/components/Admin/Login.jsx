import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../graphql/mutation/view';

const Login = ({ setCodeboxToken }) => {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [gqlLogin] = useMutation(LOGIN, {
    variables: {
      username: loginUsername,
      password: loginPassword,
    },
  });

  const login = async e => {
    e.preventDefault();

    try {
      const { data } = await gqlLogin({
        variables: {
          username: loginUsername,
          password: loginPassword,
        },
      });

      console.log('login token:', data.login.token);

      if (data) {
        localStorage.setItem('codeboxToken', data.login.token);
        setCodeboxToken(data.login.token);
      }

      setLoginUsername('');
      setLoginPassword('');
      setLoginError('');
    } catch (err) {
      console.log('ERROR in GqlFormAndList > login:', err.message);
      setLoginError(err.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <input
          type="text"
          value={loginUsername}
          onChange={e => setLoginUsername(e.target.value)}
        />
        <input
          type="text"
          value={loginPassword}
          onChange={e => setLoginPassword(e.target.value)}
        />

        <span>{loginError}</span>

        <button type="button" onClick={e => login(e)}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
