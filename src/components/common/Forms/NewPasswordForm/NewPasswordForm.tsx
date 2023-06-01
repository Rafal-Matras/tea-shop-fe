import { Input } from '../../Input/Input';

import { ChangePasswordForgotInterface } from '../../../../types';

import style from './NewPasswordForm.module.css';
import { SyntheticEvent } from 'react';

interface Props {
  passwords: ChangePasswordForgotInterface;
  changePassword: (name: string, value: string) => void;
  errorLogin: boolean;
  errorText: string;
  newPassword: (e: SyntheticEvent) => void;
}

export const NewPasswordForm = ({passwords, changePassword, errorLogin, errorText, newPassword}: Props) => {

  return (
    <form className={style.form} onSubmit={(e) => newPassword(e)}>
      <p className={errorLogin ? style.errorMassage : style.errorMassageNone}>{errorText}</p>
      <div className={style.inputBox}>
        <Input
          type="password"
          name="pwd"
          value={passwords.pwd}
          displayedName="Hasło"
          change={changePassword}
          required={true}
        />
      </div>
      <div className={style.inputBox}>
        <Input
          type="password"
          name="confirmPwd"
          value={passwords.confirmPwd}
          displayedName="Powtórz hasło"
          change={changePassword}
          required={true}
        />
      </div>
      <div className={style.buttonBox}>
        <button className={style.buttonLogin} type="submit">
          zmień hasło
        </button>
      </div>
    </form>
  );
};