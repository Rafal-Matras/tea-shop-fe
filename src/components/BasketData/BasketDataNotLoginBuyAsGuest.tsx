import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserInterface } from '../../types';

import { UseUserContext } from '../../context/UserContext';

import { DeliveryForm } from '../common/Forms/DeliveryForm/DeliveryForm';
import { DataForm } from '../common/Forms/DataForm/DataForm';
import { Checkbox } from '../common/Checkbox/Checkbox';
import { Input } from '../common/Input/Input';

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
}

export const BasketDataNotLoginBuyAsGuest = ({
                                               userData,
                                               changeUserData,
                                               changeUserDataDelivery,
                                               deliveryActive,
                                               setDeliveryActive,
                                               accept,
                                               setAccept,
                                             }: Props) => {

  const navigate = useNavigate();
  const {setUser} = UseUserContext();
  const [isAccepted, setIsAccepted] = useState<boolean>(false);
  const [isAllData, setIsAllData] = useState<boolean>(false);

  const handleNext = () => {
    if (!validation({accept, setIsAccepted, userData, setIsAllData, deliveryActive})) return;
    setUser(userData);
    navigate('/basket/summary');
    window.scrollTo(0, 0);
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
      <p className={isAllData ? style.errorMassageOn : style.errorMassageOff}>Proszę uzupełnić brakujące dane</p>
      <BasketDataAcceptanceAndButtons
        accept={accept}
        setAccept={setAccept}
        isAccepted={isAccepted}
        handleNext={handleNext}
        buttonName="Kontynuuj"
        showAccepted={true}
      />
    </div>
  );
};