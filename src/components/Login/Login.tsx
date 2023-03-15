import { SyntheticEvent, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { UserLoginDataInterface } from '../../types';

import { Input } from '../common/Input/Input';
import { config } from '../../config/config';
import { REGEX_EMAIL, REGEX_PASSWORD } from '../../assets/regexFiles';

import style from './Login.module.css';
import { UserContext } from '../../context/UserContext';

export const Login = () => {

  const navigate = useNavigate();
  const {setUser} = useContext(UserContext)
  const [errorLogin, setErrorLogin] = useState<boolean>(false);
  const [loginDetails, setLoginDetails] = useState<UserLoginDataInterface>({
    email: '',
    password: '',
  });

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

  const login = async (e: SyntheticEvent) => {
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
      <form className={style.form} onSubmit={login}>
        <h1 className={style.title}>Logowanie</h1>
        <p className={errorLogin ? style.errorMassage : style.errorMassageNone}>Niepoprawne logowanie</p>
        <div className={style.inputBox}>
          <Input
            type="email"
            name="email"
            value={loginDetails.email}
            displayedName="Email"
            change={editLoginDetails}
            required={true}
          />
        </div>
        <div className={style.inputBox}>
          <Input
            type="password"
            name="password"
            value={loginDetails.password}
            displayedName="Hasło"
            change={editLoginDetails}
            required={true}
          />
        </div>
        <Link className={style.forgetPassword} to="/">nie pamiętasz hasła?</Link>
      </form>
      <div className={style.buttonBox}>
        <Link className={style.buttonRegister}
              to="/user/register"
        >{window.screen.width > 450 ? 'zarejestruj się' : 'zarejestruj'}
        </Link>
        <button className={style.buttonLogin} onClick={login}
        >{window.screen.width > 450 ? 'zaloguj się' : 'zaloguj'}
        </button>
      </div>
    </div>

  );
};