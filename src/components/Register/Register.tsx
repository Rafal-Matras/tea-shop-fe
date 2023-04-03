import { SyntheticEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { UserProfileType } from '../../types';

import { RegisterForm } from '../common/Forms/RegisterForm/RegisterForm';
import { DataForm } from '../common/Forms/DataForm/DataForm';
import { DeliveryForm } from '../common/Forms/DeliveryForm/DeliveryForm';
import { Checkbox } from '../common/Checkbox/Checkbox';

import { REGEX_EMAIL, REGEX_PASSWORD } from '../../assets/regexFiles';

import style from './Register.module.css';

import { defaultUserRegister } from '../../assets/defaultData';

export const Register = () => {

  const navigate = useNavigate();
  const [deliveryActive, setDeliveryActive] = useState<boolean>(false);
  const [registrationData, setRegistrationData] = useState<UserProfileType>(defaultUserRegister);
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const editRegistrationData = (name: string, value: string) => {
    setRegistrationData(registrationData => ({
      ...registrationData,
      [name]: value,
    }));
  };

  const editRegistrationDataDelivery = (name: string, value: string) => {
    setRegistrationData(registrationData => ({
      ...registrationData,
      delivery: {...registrationData.delivery, [name]: value},
    }));
  };

  const editConfirmPassword = (name: string, value: string) => {
    setConfirmPassword(value);
  };

  const validation = () => {
    if (registrationData.email === '' || !registrationData.email.match(REGEX_EMAIL)) return true;
    if (registrationData.password === '' || !registrationData.password.match(REGEX_PASSWORD)) return true;
    if (confirmPassword !== registrationData.password) return true;
  };

  const register = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (validation()) return;

    // const response = await fetch(`${config.URL}login/${encodeURIComponent(loginDetails.email)}/${encodeURIComponent(loginDetails.password)}`);
    // const data = await response.json();
    // if (data) {
    //   setErrorLogin(true);
    //   return;
    // }
    navigate('/');
  };

  return (
    <div className={style.container}>
      <h1 className={style.titleRegistration}>Rejestracja</h1>
      <h2 className={style.title}>Dane logowania</h2>
      <RegisterForm
        registrationData={registrationData}
        editRegistrationData={editRegistrationData}
        confirmPassword={confirmPassword}
        editConfirmPassword={editConfirmPassword}
      />
      <h2 className={style.title}>Dane do rachunku</h2>
      <DataForm
        registrationData={registrationData}
        editRegistrationData={editRegistrationData}
      />
      <Checkbox
        children="Inne dane do wysyłki"
        active={deliveryActive}
        change={setDeliveryActive}
      />
      {deliveryActive
        ? <>
          <h2 className={style.title}>Dane do wysyłki</h2>
          <DeliveryForm
            registrationData={registrationData}
            editRegistrationDataDelivery={editRegistrationDataDelivery}
          />
        </>
        : null}
      <div className={style.buttonBox}>
        <Link className={style.buttonLogin}
              to="/user/login"
        >{window.screen.width > 450 ? 'zaloguj się' : 'zaloguj'}
        </Link>
        <button className={style.buttonRegister} onClick={register}
        >{window.screen.width > 450 ? 'zarejestruj się' : 'zarejestruj'}
        </button>
      </div>
    </div>
  );
};