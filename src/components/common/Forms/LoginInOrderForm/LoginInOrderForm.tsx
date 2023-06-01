import { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserLoginDataInterface } from '../../../../types';

import { UseUserContext } from '../../../../context/UserContext';

import { config } from '../../../../config/config';

import { defaultUserLogin } from '../../../../assets/defaultData';
import { BackAndNextButtons } from '../../BackAndNextButtons/BackAndNextButtons';
import { Input } from '../../Input/Input';

import style from '../LoginForm/LoginForm.module.css';

interface Props {
  accept: 0 | 1;
  setAccept: (number: 0 | 1) => void;
  setForgotPwd: (boolean: boolean) => void;
}

export const LoginInOrderForm = ({accept, setAccept, setForgotPwd}: Props) => {

  const navigate = useNavigate();
  const {setUser} = UseUserContext();
  const [loginDetails, setLoginDetails] = useState<UserLoginDataInterface>(defaultUserLogin);
  const [errorLogin, setErrorLogin] = useState<boolean>(false);

  const editLoginDetails = (name: string, value: string) => {
    setLoginDetails(loginDetails => ({
      ...loginDetails,
      [name]: value,
    }));
  };

  const validation = () => {
    if (loginDetails.email === '' || !loginDetails.email.match(config.REGEX_EMAIL)) {
      setErrorLogin(true);
      return true;
    }
    if (loginDetails.pwdHash === '' || !loginDetails.pwdHash.match(config.REGEX_PASSWORD)) {
      setErrorLogin(true);
      return true;
    }
    setErrorLogin(false);
  };

  const handleBack = () => {
    navigate(-1);
  };
  const handleLogin = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      if (validation()) return;
      const response = await fetch(`${config.URL}auth/login`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginDetails),
      });
      const data = await response.json();

      if (!data.login) {
        setErrorLogin(true);
        return;
      }

      setErrorLogin(false);
      setUser(data.user);
      navigate('/basket/data');
      window.scrollTo(0, 0);

    } catch (err) {
      throw new Error('New error message', {cause: err});
    }
  };

  return (
    <form className={style.form} onSubmit={handleLogin}>
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
          name="pwdHash"
          value={loginDetails.pwdHash}
          displayedName="Hasło"
          change={editLoginDetails}
          required={true}
        />
      </div>
      <p className={style.forgetPassword} onClick={() => setForgotPwd(true)}>nie pamiętasz hasła?</p>
      <BackAndNextButtons
        textNext="login"
        handleBack={handleBack}
        handleNext={handleLogin}
      />
    </form>
  );
};