import style from './Register.module.css';
import { LoginData } from './LoginData';
import { AccountData } from './AccountData';
import { DeliveryData } from './DeliveryData';
import { SyntheticEvent, useState } from 'react';
import { UserDeliveryDataInterface, UserRegistrationDataInterface } from '../../types';
import { Link, useNavigate } from 'react-router-dom';
import { REGEX_EMAIL, REGEX_PASSWORD } from '../../assets/regexFiles';

export const Register = () => {

  const navigate = useNavigate();
  const [deliveryActive, setDeliveryActive] = useState<boolean>(false);
  const [registrationData, setRegistrationData] = useState<UserRegistrationDataInterface>({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    surName: '',
    companyName: '',
    nip: '',
    street: '',
    homeNumber: '',
    postCode: '',
    city: '',
    phone: '',
  });
  const [deliveryData, setDeliveryData] = useState<UserDeliveryDataInterface>({
    name: '',
    surName: '',
    companyName: '',
    street: '',
    homeNumber: '',
    postCode: '',
    city: '',
  });

  const editRegistrationData = (name: string, value: string) => {
    setRegistrationData(registrationData => ({
      ...registrationData,
      [name]: value,
    }));
  };

  const editDeliveryData = (name: string, value: string) => {
    setDeliveryData(deliveryData => ({
      ...deliveryData,
      [name]: value,
    }));
  };

  const samePassword = () => {
    return registrationData.confirmPassword === registrationData.password;
  };

  const validation = () => {
    if (registrationData.email === '' || !registrationData.email.match(REGEX_EMAIL)) return true;
    if (registrationData.password === '' || !registrationData.password.match(REGEX_PASSWORD)) return true;
    if (registrationData.confirmPassword !== registrationData.password) return true;
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
        samePassword={samePassword}
      />
      <AccountData
        registrationData={registrationData}
        editRegistrationData={editRegistrationData}
        deliveryActive={deliveryActive}
        setDeliveryActive={setDeliveryActive}
      />
      {deliveryActive
        ? <DeliveryData
          deliveryData={deliveryData}
          editDeliveryData={editDeliveryData}
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