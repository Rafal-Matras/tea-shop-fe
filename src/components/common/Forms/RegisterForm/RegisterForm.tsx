import { UserRegisterInterface } from '../../../../types';

import { Input } from '../../Input/Input';

import style from './RegisterForm.module.css';
import { SyntheticEvent } from 'react';

interface Props {
  registrationData: UserRegisterInterface;
  editRegistrationData: (name: string, value: string) => void;
  confirmPassword: string;
  editConfirmPassword: (name: string, value: string) => void;
  checkEmail: (email: string) => Promise<Response>;
  register: (e: SyntheticEvent) => void;
}

export const RegisterForm = ({
                               registrationData,
                               editRegistrationData,
                               confirmPassword,
                               editConfirmPassword,
                               checkEmail,
                               register,
                             }: Props) => {

  const samePassword = () => {
    return registrationData.pwdHash === confirmPassword;
  };

  return (
    <form className={style.form} onSubmit={register}>
      <div className={style.inputBox}>
        <Input
          type="email"
          name="email"
          value={registrationData.email}
          displayedName="Email"
          change={editRegistrationData}
          required={true}
          checkEmail={checkEmail}
        />
      </div>
      <div className={style.inputBox}>
        <Input
          type="password"
          name="pwdHash"
          value={registrationData.pwdHash}
          displayedName="Hasło"
          change={editRegistrationData}
          required={true}
        />
      </div>
      <div className={style.inputBox}>
        <Input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          displayedName="Powtórz hasło"
          change={editConfirmPassword}
          required={true}
          samePassword={samePassword}
        />
      </div>
    </form>
  );
};