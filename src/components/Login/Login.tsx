import { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserLoginDataInterface } from '../../types';

import { UseUserContext } from '../../context/UserContext';

import { config } from '../../config/config';

import { LoginForm } from '../common/Forms/LoginForm/LoginForm';
import { ForgotPasswordForm } from '../common/Forms/ForgotPasswordForm/ForgotPasswordForm';
import { BackAndNextButtons } from '../common/BackAndNextButtons/BackAndNextButtons';
import { defaultUserLogin } from '../../assets/defaultData';

import style from './Login.module.css';

export const Login = () => {

  const navigate = useNavigate();
  const {setUser, activePage, setActivePage} = UseUserContext();
  const [forgotPwd, setForgotPwd] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [loginDetails, setLoginDetails] = useState<UserLoginDataInterface>(defaultUserLogin);

  const editLoginDetails = (name: string, value: string) => {
    setLoginDetails(loginDetails => ({
      ...loginDetails,
      [name]: value,
    }));
  };

  const validation = () => {
    return !!(loginDetails.email.match(config.REGEX_EMAIL) && loginDetails.pwdHash.match(config.REGEX_PASSWORD));
  };

  const handleRegister = () => {
    navigate('/user/register');
  };

  const handleLogin = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (validation()) {
      try {
        const response = await fetch(`${config.URL}auth/login`, {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(loginDetails),
        });
        const data = await response.json();
        if (data.login) {
          setUser(data.user);
          window.scrollTo(0, 0);
          if (data.user.role === 'admin') {
            navigate('/admin/admin-panel');
          } else if (activePage === '/user/register') {
            setActivePage('');
            navigate(-2);
          } else navigate(-1);
        } else {
          setErrorMessage('niepoprawne logowanie');
        }
      } catch (err) {
        throw new Error('New error message', {cause: err});
      }
    } else {
      setErrorMessage('proszę uzupełnić poprawnie wszystkie pola');
    }
  };

  return (
    <div className={style.container}>
      <h1 className={style.title}>{forgotPwd ? 'Zapomniałem hasła' : 'Logowanie'}</h1>

      {forgotPwd
        ? <ForgotPasswordForm
          setForgotPwd={setForgotPwd}/>
        : <form className={style.form} onSubmit={handleLogin}>
          <LoginForm
            setForgotPwd={setForgotPwd}
            loginDetails={loginDetails}
            editLoginDetails={editLoginDetails}
            errorMessage={errorMessage}
          />
          <BackAndNextButtons
            textBack={window.screen.width > 450 ? 'zarejestruj się' : 'zarejestruj'}
            textNext={window.screen.width > 450 ? 'zaloguj się' : 'zaloguj'}
            icons={false}
            handleBack={handleRegister}
            handleNext={handleLogin}
          />
        </form>
      }
    </div>
  );
};