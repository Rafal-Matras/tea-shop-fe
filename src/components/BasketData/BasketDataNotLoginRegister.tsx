import { useState } from 'react';

import { UserInterface } from '../../types';

import { UseUserContext } from '../../context/UserContext';

import { RegisterForm } from '../common/Forms/RegisterForm/RegisterForm';
import { DataForm } from '../common/Forms/DataForm/DataForm';
import { DeliveryForm } from '../common/Forms/DeliveryForm/DeliveryForm';
import { Checkbox } from '../common/Checkbox/Checkbox';

import { BasketDataAcceptanceAndButtons } from './BasketDataAcceptanceAndButtons';
import { validation } from './validation';

import style from './BasketData.module.css';

interface Props {
  userData: UserInterface;
  changeUserData: (name: string, value: string) => void;
  changeUserDataDelivery: (name: string, value: string) => void;
  deliveryActive: boolean;
  setDeliveryActive: (name: boolean) => void;
  accept: boolean;
  setAccept: (name: boolean) => void;
  setAccount: (name: string) => void;
}

export const BasketDataNotLoginRegister = ({
                                             userData,
                                             changeUserData,
                                             changeUserDataDelivery,
                                             deliveryActive,
                                             setDeliveryActive,
                                             accept,
                                             setAccept,
                                             setAccount,
                                           }: Props) => {

  const {setUser} = UseUserContext();
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isAccepted, setIsAccepted] = useState<boolean>(false);
  const [isAllData, setIsAllData] = useState<boolean>(false);
  const [popupActive, setPopupActive] = useState<boolean>(false);

  const editConfirmPassword = (name: string, value: string) => {
    setConfirmPassword(value);
  };

  const handleRegister = async () => {
    if (!validation({accept, setIsAccepted, userData, confirmPassword, setIsAllData, deliveryActive})) return;
    // const response = await fetch('URL', {
    //   method: 'post',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(userData),
    // });
    // const data = await response.json();
    // if (!data) return;
    setPopupActive(true);
  };

  const handleNext = () => {
    setPopupActive(false);
    setUser(userData);
    setAccount('Posiadam konto w sklepie');
    window.scrollTo(0, 0);
  };

  return (
    <div className={style.notLoginSection}>
      <h2 className={style.sectionTitle}>Zarejestruj się</h2>
      <RegisterForm
        registrationData={userData}
        editRegistrationData={changeUserData}
        confirmPassword={confirmPassword}
        editConfirmPassword={editConfirmPassword}
      />
      <h2 className={style.sectionTitle}>Dane do rachunku i dostawy</h2>
      <DataForm
        registrationData={userData}
        editRegistrationData={changeUserData}
      />
      <div className={style.deliveryBox}>
        <Checkbox
          children="Inne dane do wysyłki"
          active={deliveryActive}
          change={setDeliveryActive}
        />
      </div>
      {deliveryActive
        ? <>
          <h2 className={style.sectionTitle}>Dane do wysyłki</h2>
          <DeliveryForm
            registrationData={userData}
            editRegistrationDataDelivery={changeUserDataDelivery}
          />
        </>
        : null}
      <p className={isAllData ? style.errorMassageOn : style.errorMassageOff}>Proszę uzupełnić brakujące dane</p>
      <BasketDataAcceptanceAndButtons
        accept={accept}
        setAccept={setAccept}
        isAccepted={isAccepted}
        handleNext={handleRegister}
        buttonName="Zarejestruj"
        showAccepted={false}
      />
      {popupActive
        ? <div className={style.popup}>
          <div className={style.popupBox}>
            <p className={style.popupText}>Konto zostało utworzone, można się zalogować </p>
            <button className={style.popupButton} onClick={handleNext}>Dalej</button>
          </div>
        </div>
        : null
      }
    </div>
  );
};