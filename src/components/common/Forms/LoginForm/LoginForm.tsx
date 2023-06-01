import { SyntheticEvent } from 'react';

import { UserLoginDataInterface } from '../../../../types';

import { Input } from '../../Input/Input';

import style from './LoginForm.module.css';

interface Props {
  setForgotPwd: (boolean: boolean) => void;
  handleLogin: (e: SyntheticEvent) => void;
  loginDetails: UserLoginDataInterface,
  editLoginDetails: (name: string, value: string) => void
  errorMessage: string;
}

export const LoginForm = ({
                            setForgotPwd,
                            handleLogin,
                            loginDetails,
                            editLoginDetails,
                            errorMessage,
                          }: Props) => {

  return (
    <form className={style.form} onSubmit={handleLogin}>
      <p className={errorMessage !== '' ? style.errorMassage : style.errorMassageNone}>{errorMessage}</p>
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
    </form>
  );
};
