import { SyntheticEvent, useState } from 'react';

import { UserLoginDataInterface } from '../../../../types';

import { config } from '../../../../config/config';

import { defaultUserLogin } from '../../../../assets/defaultData';
import { Input } from '../../Input/Input';

import style from './ForgotPasswordForm.module.css';

interface Props {
  setForgotPwd: (boolean: boolean) => void;
}

export const ForgotPasswordForm = ({setForgotPwd}: Props) => {

  const [loginDetails, setLoginDetails] = useState<UserLoginDataInterface>(defaultUserLogin);
  const [invalidEmail, setInvalidEmail] = useState<boolean>(false);
  const [invalidText, setInvalidText] = useState<string>('');

  const editLoginDetails = (name: string, value: string) => {
    setLoginDetails(loginDetails => ({
      ...loginDetails,
      [name]: value,
    }));
  };
  const handleForgetPassword = async (e: SyntheticEvent) => {
    e.preventDefault();
    try{
      const res = await fetch(`${config.URL}user/forgot-password/${loginDetails.email}`);
      if (!res.ok) {
        setInvalidText('coś poszło nie tak spróbuj jeszcze raz zrestartować hasło');
        setInvalidEmail(true);
        return;
      }
      const data = await res.json()
      if(!data.ok){
        setInvalidText('Nie ma takiego e-maila w bazie');
          setInvalidEmail(true);
          return;
      }
    } catch (err) {
      throw new Error('New error message!!', {cause: err});
    }
      window.scrollTo(0, 0);
      setInvalidText('');
      setInvalidEmail(false);
      setForgotPwd(false);
  };

  return (
    <form className={style.form} onSubmit={handleForgetPassword}>
      <p className={style.forgotPwdText}>Podaj maila a link do zmiany hasła wyślemy na niego!</p>
      <p className={invalidEmail ? style.invalidEmail : style.invalidEmailNone}
      >{invalidText}
      </p>
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
      <div className={style.buttonBox}>
        <button className={style.buttonGoBack} type="button" onClick={() => setForgotPwd(false)}>Powrót</button>
        <button className={style.buttonLogin} type="submit">wyślij nowe hasło</button>
      </div>
    </form>
  );
};