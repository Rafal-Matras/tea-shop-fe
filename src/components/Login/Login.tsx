import { SyntheticEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { UserLoginInterface } from '../../types';

import { Input } from '../common/Input/Input';
import { config } from '../../config/config';
import { REGEX_EMAIL, REGEX_PASSWORD } from '../../assets/regexFiles';

import style from './Login.module.css';

export const Login = () => {

  const navigate = useNavigate();
  const [errorLogin, setErrorLogin] = useState<boolean>(false);
  const [data, setData] = useState<UserLoginInterface>({
    email: '',
    password: '',
  });

  const editData = (name: string, value: string) => {
    setData(data => ({
      ...data,
      [name]: value,
    }));
  };

  const validation = () => {
    if (data.email === '' || !data.email.match(REGEX_EMAIL)) {
      setErrorLogin(true);
      console.log('email');
      return true;
    }
    if (data.password === '' || !data.password.match(REGEX_PASSWORD)) {
      setErrorLogin(true);
      console.log('password');
      return true;
    }
    setErrorLogin(false);
  };

  const login = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (validation()) return;

    // const response = await fetch(`${config.URL}login/${encodeURIComponent(data.email)}/${encodeURIComponent(data.password)}`);
    // const dataResponse = await response.json();
    // if (dataResponse) {
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
            value={data.email}
            displayedName="Email"
            change={editData}
            required={true}
          />
        </div>
        <div className={style.inputBox}>
          <Input
            type="password"
            name="password"
            value={data.password}
            displayedName="Hasło"
            change={editData}
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