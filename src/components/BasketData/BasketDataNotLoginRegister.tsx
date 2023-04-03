import { useEffect, useState } from 'react';

import { UserProfileType } from '../../types';

import { RegisterForm } from '../common/Forms/RegisterForm/RegisterForm';
import { DataForm } from '../common/Forms/DataForm/DataForm';
import { DeliveryForm } from '../common/Forms/DeliveryForm/DeliveryForm';
import { Checkbox } from '../common/Checkbox/Checkbox';
import { BasketDataAcceptanceAndButtons } from './BasketDataAcceptanceAndButtons';

import style from './BasketData.module.css';

interface Props {
  userData: UserProfileType;
  changeUserData: (name: string, value: string) => void;
  changeUserDataDelivery: (name: string, value: string) => void;
  deliveryActive: boolean;
  setDeliveryActive: (name: boolean) => void;
  accept: boolean;
  setAccept: (name: boolean) => void;
}

export const BasketDataNotLoginRegister = ({
                                             userData,
                                             changeUserData,
                                             changeUserDataDelivery,
                                             deliveryActive,
                                             setDeliveryActive,
                                             accept,
                                             setAccept,
                                           }: Props) => {

  const [confirmPassword, setConfirmPassword] = useState<string>('');

  useEffect(() => {
    setDeliveryActive(false);
  }, []);
  const editConfirmPassword = (name: string, value: string) => {
    setConfirmPassword(value);
  };

  const handleNext = () => {

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
      <BasketDataAcceptanceAndButtons
        accept={accept}
        setAccept={setAccept}
        handleNext={handleNext}
        buttonName="Zarejestruj"
      />
    </div>
  );
};