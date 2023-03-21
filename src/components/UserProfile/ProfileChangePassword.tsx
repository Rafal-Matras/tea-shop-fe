import { useState } from 'react';

import { ChangePasswordInterface } from '../../types';

import { Input } from '../common/Input/Input';

import style from './UserProfile.module.css';

interface Props {
  email: string;
  changeUserData: (name: string, value: string) => void;
}

export const ProfileChangePassword = ({email, changeUserData}: Props) => {

  const [dataPassword, setDataPassword] = useState<ChangePasswordInterface>({
    password: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const changePassword = (name: string, value: string) => {
    setDataPassword(dataPassword => ({
      ...dataPassword,
      [name]: value,
    }));
  };

  const sendNewPassword = async () => {

  };

  return (
    <div className={style.pageContainer}>
      <div className={style.profileDataBox}>
        <h2 className={style.title}>Zmiań hasło</h2>
        <div className={style.inputBox}>
          <Input
            type="password"
            name="password"
            displayedName="Hasło"
            value={dataPassword.password}
            change={changePassword}
            required={true}
          />
        </div>
        <div className={style.inputBox}>
          <Input
            type="password"
            name="newPassword"
            displayedName="Nowe hasło"
            value={dataPassword.newPassword}
            change={changePassword}
            required={true}
          />
        </div>
        <div className={style.inputBox}>
          <Input
            type="password"
            name="confirmNewPassword"
            displayedName="Powtuż nowe hasło"
            value={dataPassword.confirmNewPassword}
            change={changePassword}
            required={true}
          />
        </div>
      </div>
      <button className={style.button} onClick={sendNewPassword}>Zapisz</button>
    </div>
  );
};