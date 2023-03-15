import { SyntheticEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { UserRegistrationDataType } from '../../types';

import { LoginData } from './LoginData';
import { AccountData } from './AccountData';
import { DeliveryData } from './DeliveryData';

import { REGEX_EMAIL, REGEX_PASSWORD } from '../../assets/regexFiles';

import style from './Register.module.css';

import { defaultUserRegister } from '../../assets/defaultData';

export const Register = () => {

  const navigate = useNavigate();
  const [deliveryActive, setDeliveryActive] = useState<boolean>(false);
  const [registrationData, setRegistrationData] = useState<UserRegistrationDataType>(defaultUserRegister);
  const [confirmPassword, setConfirmPassword] =useState<string>('')

  const editRegistrationData = (name: string, value: string) => {
    setRegistrationData(registrationData => ({
      ...registrationData,
      [name]: value,
    }));
  };

  const editConfirmPassword = (name:string,value:string) => {
    setConfirmPassword(value)
  }

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
      <LoginData
        registrationData={registrationData}
        editRegistrationData={editRegistrationData}
        confirmPassword={confirmPassword}
        editConfirmPassword={editConfirmPassword}
      />
      <AccountData
        registrationData={registrationData}
        editRegistrationData={editRegistrationData}
        deliveryActive={deliveryActive}
        setDeliveryActive={setDeliveryActive}
      />
      {deliveryActive
        ? <DeliveryData
          registrationData={registrationData}
          editRegistrationData={editRegistrationData}
        />
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