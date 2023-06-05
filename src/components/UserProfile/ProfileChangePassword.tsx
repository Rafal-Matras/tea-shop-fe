import { useState } from 'react';

import { ChangePasswordInterface } from '../../types';

import { Input } from '../common/Input/Input';

import style from './UserProfile.module.css';

export const ProfileChangePassword = () => {

  const [dataPassword, setDataPassword] = useState<ChangePasswordInterface>({
    pwdHash: '',
    newPwd: '',
    confirmNewPwd: '',
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
            name="pwdHash"
            displayedName="Hasło"
            value={dataPassword.pwdHash}
            change={changePassword}
            required={true}
          />
        </div>
        <div className={style.inputBox}>
          <Input
            type="password"
            name="newPwd"
            displayedName="Nowe hasło"
            value={dataPassword.newPwd}
            change={changePassword}
            required={true}
          />
        </div>
        <div className={style.inputBox}>
          <Input
            type="password"
            name="confirmNewPwd"
            displayedName="Powtuż nowe hasło"
            value={dataPassword.confirmNewPwd}
            change={changePassword}
            required={true}
          />
        </div>
      </div>
      <button className={style.button} onClick={sendNewPassword}>Zapisz</button>
    </div>
  );
};