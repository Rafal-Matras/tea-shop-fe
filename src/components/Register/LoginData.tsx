import { UserRegistrationDataType } from '../../types';

import { Input } from '../common/Input/Input';

import style from './Register.module.css';

interface Props {
  registrationData: UserRegistrationDataType;
  editRegistrationData: (name: string, value: string) => void;
  confirmPassword: string;
  editConfirmPassword: (name: string, value: string) => void;
}

export const LoginData = ({registrationData, editRegistrationData, confirmPassword, editConfirmPassword}: Props) => {

  const samePassword = () => {
    return registrationData.password === confirmPassword;
  };

  return (
    <div className={style.dataLoginBox}>
      <h2 className={style.title}>Dane logowania</h2>
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
    </div>
  );
};