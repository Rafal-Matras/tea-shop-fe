import { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserLoginDataInterface } from '../../types';

import { UseUserContext } from '../../context/UserContext';

import { config } from '../../config/config';

import { defaultUserLogin } from '../../assets/defaultData';
import { ForgotPasswordForm } from '../common/Forms/ForgotPasswordForm/ForgotPasswordForm';
import { LoginForm } from '../common/Forms/LoginForm/LoginForm';
import { BackAndNextButtons } from '../common/BackAndNextButtons/BackAndNextButtons';

import style from './BasketData.module.css';

interface Props {
  setAccount: (account: string) => void;
}

export const BasketDataIsNotLoginHaveAccount = ({setAccount}: Props) => {

  const navigate = useNavigate();
  const {setUser} = UseUserContext();
  const [loginDetails, setLoginDetails] = useState<UserLoginDataInterface>(defaultUserLogin);
  const [forgotPwd, setForgotPwd] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const editLoginDetails = (name: string, value: string) => {
    setLoginDetails(loginDetails => ({
      ...loginDetails,
      [name]: value,
    }));
  };

  const validation = () => {
    return !!(loginDetails.email.match(config.REGEX_EMAIL) && loginDetails.pwdHash.match(config.REGEX_PASSWORD));
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
          setAccount('Posiadam konto w sklepie');
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

  const handleBack = () => {
    window.scroll(0,0)
    navigate('/basket');
  };

  return (
    <div className={style.notLoginSection}>
      <h2 className={style.sectionTitle}>Zaloguj się</h2>
      {forgotPwd
        ? <ForgotPasswordForm
          setForgotPwd={setForgotPwd}
        />
        : <>
          <LoginForm
            loginDetails={loginDetails}
            editLoginDetails={editLoginDetails}
            setForgotPwd={setForgotPwd}
            errorMessage={errorMessage}
          />
          <BackAndNextButtons
            textNext="zaloguj"
            handleBack={handleBack}
            handleNext={handleLogin}
          />
        </>
      }
    </div>
  );
};