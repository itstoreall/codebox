import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CustomButton, CustomInput } from './uiElements';
import { LOGIN } from '../../graphql/mutation/user';
import s from './Admin.module.scss';
import refs from '../../styles/refs';

const Login = ({ setCodeboxToken }) => {
  const [userRole, setUserRole] = useState('guest');
  const [loginUsername, setLoginUsername] = useState('Guest');
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

      console.log('login token:', data.login);

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

  const toggleInputs = role => {
    console.log('role:', role);
    setUserRole(role);
    setLoginUsername(role === 'admin' ? 'Admin' : role === 'guest' && 'Guest');
  };

  return (
    <div className={s.Login}>
      <form className={s.Login__form} onSubmit={e => login(e)}>
        <h2 className={s.Login__title}>
          {userRole === 'guest' ? 'Guest' : userRole === 'admin' && 'Admin'}
        </h2>

        {userRole === 'guest' ? (
          <CustomInput
            className={'admin-login-password-input'}
            padding={'15px'}
            margin={'0 0 30px'}
            width={'100%'}
            textAlign={'center'}
            border={`1px solid ${refs.primaryTextColor}`}
            borderRadius={'4px'}
            placeholder={'password'}
            value={loginPassword}
            onChange={e => {
              setLoginPassword(e.target.value);
              setLoginError('');
            }}
          />
        ) : (
          userRole === 'admin' && (
            <CustomInput
              className={'admin-login-password-input'}
              padding={'15px'}
              margin={'0 0 30px'}
              width={'100%'}
              textAlign={'center'}
              border={`1px solid ${refs.primaryTextColor}`}
              borderRadius={'4px'}
              placeholder={'password'}
              value={loginPassword}
              onChange={e => setLoginPassword(e.target.value)}
            />
          )
        )}

        <span className={s.Login__error}>{loginError}</span>

        <CustomButton
          className={'admin-login-btn'}
          display={'block'}
          padding={'15px'}
          margin={'0 0 30px'}
          width={'100%'}
          borderRadius={'4px'}
          type={'submit'}
        >
          Login
        </CustomButton>

        {userRole === 'guest' ? (
          <sapn
            className={s.Login__toggleLink}
            onClick={() => toggleInputs('admin')}
          >
            Administrator
          </sapn>
        ) : (
          userRole === 'admin' && (
            <sapn
              className={s.Login__toggleLink}
              onClick={() => toggleInputs('guest')}
            >
              Guest
            </sapn>
          )
        )}
      </form>
    </div>
  );
};

export default Login;
