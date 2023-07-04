import { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { DeliveryRegisterInterface, UserRegisterInterface } from '../../types';

import { config } from '../../config/config';

import { RegisterForm } from '../common/Forms/RegisterForm/RegisterForm';
import { DataForm } from '../common/Forms/DataForm/DataForm';
import { DeliveryForm } from '../common/Forms/DeliveryForm/DeliveryForm';
import { Checkbox } from '../common/Checkbox/Checkbox';
import { BackAndNextButtons } from '../common/BackAndNextButtons/BackAndNextButtons';
import { defaultDeliveryRegister, defaultUserRegister } from '../../assets/defaultData';

import style from './Register.module.css';
import { RegisterValidation } from './RegisterValidation';
import { PopupRegistered } from '../common/Popups/PopupRegistered/PopupRegistered';
import { UseUserContext } from '../../context/UserContext';

export const Register = () => {

    const {setActivePage} = UseUserContext();
    const navigate = useNavigate();
    const [deliveryActive, setDeliveryActive] = useState<0 | 1>(0);
    const [userRegistrationData, setUserRegistrationData] = useState<UserRegisterInterface>(defaultUserRegister);
    const [deliveryRegistrationData, setDeliveryRegistrationData] = useState<DeliveryRegisterInterface>(defaultDeliveryRegister);
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [activeRegister, setActiveRegister] = useState<boolean>(false);

    const editUserRegistrationData = (name: string, value: string | number) => {
      setUserRegistrationData(userRegistrationData => ({
        ...userRegistrationData,
        [name]: value,
      }));
    };

    const editDeliveryRegistrationData = (name: string, value: string) => {
      setDeliveryRegistrationData(deliveryRegistrationData => ({
        ...deliveryRegistrationData,
        [name]: value,
      }));
    };

    const editConfirmPassword = (name: string, value: string) => {
      setConfirmPassword(value);
    };

    const editDeliveryActive = (value: number) => {
      setDeliveryActive(deliveryActive === 1 ? 0 : 1);
      editUserRegistrationData('otherDeliveryAddress', value);
    };

    const checkEmail = async (email: string) => {
      const response = await fetch(`${config.URL}user/is-in-database/${email}`);
      return response.json();
    };

    const handleLogin = () => {
      navigate('/user/login');
    };

    const handleRegister = async (e: SyntheticEvent) => {
      e.preventDefault();
      if (RegisterValidation(userRegistrationData, deliveryRegistrationData, confirmPassword)) {
        try {
          const res = await checkEmail(userRegistrationData.email);
          if (!res.ok) {
            const response = await fetch(`${config.URL}user`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                userDto: userRegistrationData,
                deliveryDto: deliveryRegistrationData,
              }),
            });
            const data = await response.json();
            if (data.ok) {
              setActiveRegister(true);
              setActivePage('/user/register');
            }
          } else {
            setErrorMessage('taki e-mail już istnieje');
          }
        } catch (err) {
          throw new Error('', {cause: err});
        }
      } else {
        setErrorMessage('wypełnij wszystkie dane');
      }
    };

    const handleNext = () => {
      setActiveRegister(false);
      navigate('/user/login');
      window.scrollTo(0, 0);
    };

    return (
      activeRegister
        ? <PopupRegistered handleNext={handleNext}/>
        : <div className={style.container}>
          <h1 className={style.titleRegistration}>Rejestracja</h1>
          <h2 className={style.title}>Dane logowania</h2>
          <RegisterForm
            registrationData={userRegistrationData}
            editRegistrationData={editUserRegistrationData}
            confirmPassword={confirmPassword}
            editConfirmPassword={editConfirmPassword}
            checkEmail={checkEmail}
            register={handleRegister}
          />
          <h2 className={style.title}>Dane do rachunku</h2>
          <DataForm
            userData={userRegistrationData}
            editUserData={editUserRegistrationData}
          />
          <Checkbox
            children="Inne dane do wysyłki"
            active={deliveryActive}
            change={editDeliveryActive}
          />
          {deliveryActive === 1
            ? <>
              <h2 className={style.title}>Dane do wysyłki</h2>
              <DeliveryForm
                deliveryData={deliveryRegistrationData}
                editDeliveryData={editDeliveryRegistrationData}
              />
            </>
            : null}
          {<p className={errorMessage !== '' ? style.errorMessage : style.errorMessageDisable}>{errorMessage}</p>}
          <BackAndNextButtons
            textBack={window.screen.width > 450 ? 'zaloguj się' : 'zaloguj'}
            textNext={window.screen.width > 450 ? 'zarejestruj się' : 'zarejestruj'}
            icons={false}
            handleBack={handleLogin}
            handleNext={handleRegister}
          />
        </div>
    );
  }
;