import { SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';

import { UserLoginDataInterface } from '../../../../types';

import { Input } from '../../Input/Input';

import style from './LoginForm.module.css';

interface Props {
  loginDetails: UserLoginDataInterface;
  editLoginDetails: (name: string, value: string) => void;
  handleLogin: (e: SyntheticEvent) => void;
  errorLogin:boolean;
}
export const LoginForm = ({loginDetails, editLoginDetails, handleLogin, errorLogin}: Props) => {

  return (
    <form className={style.form} onSubmit={handleLogin}>
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
  );
};