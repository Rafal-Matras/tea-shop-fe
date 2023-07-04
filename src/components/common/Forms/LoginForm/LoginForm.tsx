import { UserLoginDataInterface } from '../../../../types';

import { Input } from '../../Input/Input';

import style from './LoginForm.module.css';

interface Props {
  setForgotPwd: (boolean: boolean) => void;
  loginDetails: UserLoginDataInterface,
  editLoginDetails: (name: string, value: string) => void
  errorMessage: string;
}

export const LoginForm = ({setForgotPwd, loginDetails, editLoginDetails, errorMessage}: Props) => {

  return (
    <>
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
    </>
  );
};