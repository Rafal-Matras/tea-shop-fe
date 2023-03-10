import style from './Register.module.css';
import { Input } from '../common/Input/Input';
import { UserRegistrationDataInterface } from '../../types';

interface Props {
  registrationData: UserRegistrationDataInterface;
  editRegistrationData: (name: string, value: string) => void;
  samePassword: () => boolean;
}

export const LoginData = ({registrationData, editRegistrationData,samePassword}: Props) => {

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
          value={registrationData.confirmPassword}
          displayedName="Powtórz hasło"
          change={editRegistrationData}
          required={true}
          samePassword={samePassword}
        />
      </div>
    </div>
  );
};