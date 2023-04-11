import { useEffect } from 'react';

import { UserProfileType } from '../../types';

import { DeliveryForm } from '../common/Forms/DeliveryForm/DeliveryForm';
import { DataForm } from '../common/Forms/DataForm/DataForm';
import { Checkbox } from '../common/Checkbox/Checkbox';
import { BasketDataAcceptanceAndButtons } from './BasketDataAcceptanceAndButtons';
import { Input } from '../common/Input/Input';

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

export const BasketDataNotLoginBuyAsGuest = ({userData, changeUserData, changeUserDataDelivery, deliveryActive, setDeliveryActive, accept, setAccept,}: Props) => {

  useEffect(() => {
    setDeliveryActive(false);
  }, []);

  const handleNext = () => {

  };

  return (
    <div>
      <h2 className={style.sectionTitle}>Dane kontaktowe</h2>
      <div className={style.emailInputBox}>
        <Input type="text" name="email" displayedName="E-mail" value={userData.email} change={changeUserData}
               required={true}/>
      </div>
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
        buttonName="Kontynuuj"
      />
    </div>
  );
};