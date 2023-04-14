import { UserProfileType, UserRegisterInterface } from '../../../../types';

import { Input } from '../../Input/Input';

import style from './RegisterForm.module.css';

interface Props {
  registrationData: UserRegisterInterface;
  editRegistrationData: (name: string, value: string) => void;
  confirmPassword: string;
  editConfirmPassword: (name: string, value: string) => void;
}

export const RegisterForm = ({registrationData, editRegistrationData, confirmPassword, editConfirmPassword}: Props) => {

  const samePassword = () => {
    return registrationData.password === confirmPassword;
  };

  return (
    <form className={style.form} >
      <div className={style.inputBox}>
        <Input
          type="email"
          name="email"
          value={registrationData.email}
          displayedName="Email"
          change={editRegistrationData}
          required={true}
        />
      </div>
      <div className={style.inputBox}>
        <Input
          type="password"
          name="password"
          value={registrationData.password}
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