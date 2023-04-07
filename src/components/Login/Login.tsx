import { SyntheticEvent, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { UserLoginDataInterface } from '../../types';

import { UserContext } from '../../context/UserContext';

import { LoginForm } from '../common/Forms/LoginForm/LoginForm';

import { REGEX_EMAIL, REGEX_PASSWORD } from '../../assets/regexFiles';
import { defaultUserLogin } from '../../assets/defaultData';

import style from './Login.module.css';

export const Login = () => {

  const navigate = useNavigate();
  const {setUser} = useContext(UserContext);
  const [errorLogin, setErrorLogin] = useState<boolean>(false);
  const [loginDetails, setLoginDetails] = useState<UserLoginDataInterface>(defaultUserLogin);

  const editLoginDetails = (name: string, value: string) => {
    setLoginDetails(loginDetails => ({
      ...loginDetails,
      [name]: value,
    }));
  };

  const validation = () => {
    if (loginDetails.email === '' || !loginDetails.email.match(REGEX_EMAIL)) {
      setErrorLogin(true);
      console.log('email');
      return true;
    }
    if (loginDetails.password === '' || !loginDetails.password.match(REGEX_PASSWORD)) {
      setErrorLogin(true);
      console.log('password');
      return true;
    }
    setErrorLogin(false);
  };

  const handleLogin = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (validation()) return;

    // const response = await fetch(`${config.URL}login/${encodeURIComponent(loginDetails.email)}/${encodeURIComponent(loginDetails.password)}`);
    // const data = await response.json();
    // if (data) {
    //   setUser(data)
    //   setErrorLogin(true);
    //   return;
    // }
    setErrorLogin(false);
    navigate('/');
  };

  return (
    <div className={style.container}>
      <h1 className={style.title}>Logowanie</h1>
      <LoginForm
        loginDetails={loginDetails}
        editLoginDetails={editLoginDetails}
        handleLogin={handleLogin}
        errorLogin={errorLogin}
      />
      <div className={style.buttonBox}>
        <Link className={style.buttonRegister}
              to="/user/register"
        >{window.screen.width > 450 ? 'zarejestruj się' : 'zarejestruj'}
        </Link>
        <button className={style.buttonLogin} onClick={handleLogin}
        >{window.screen.width > 450 ? 'zaloguj się' : 'zaloguj'}
        </button>
      </div>
    </div>
  );
};