import { UserInterface } from '../../types';

import { DataForm } from '../common/Forms/DataForm/DataForm';
import { DeliveryForm } from '../common/Forms/DeliveryForm/DeliveryForm';
import { Checkbox } from '../common/Checkbox/Checkbox';
import { Progress } from '../common/Progress/Progress';

import { BasketDataAcceptanceAndButtons } from './BasketDataAcceptanceAndButtons';

import style from './BasketData.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { validation } from './validation';
import { UseUserContext } from '../../context/UserContext';

interface Props {
  userData: UserInterface;
  changeUserData: (name: string, value: string) => void;
  changeUserDataDelivery: (name: string, value: string) => void;
  deliveryActive: boolean;
  setDeliveryActive: (name: boolean) => void;
  accept: boolean;
  setAccept: (name: boolean) => void;
}

export const BasketDataIsLogin = ({
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

  const handleNext = async () => {
    if (!validation({accept, setIsAccepted, userData, setIsAllData, deliveryActive})) return;
    setUser(userData);
    // const response = await fetch('URL', {
    //   method: 'post',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(userData),
    // });
    // const data = await response.json();
    // if (!data) return;
    navigate('/basket/summary');
    window.scrollTo(0, 0);
  };

  return (
    <div className={style.container}>
      <Progress
        name="Rejestracja"
        progressNumber={2}
      />
      <h1 className={style.title}>Prosimy o wypełnienie formularza oraz o podanie adresu dostawy zamówionych
        produktów.</h1>
      <h2 className={style.sectionTitle}>Dane kontaktowe</h2>
      <p className={style.userEmail}>E-mail: <span>{userData.email}</span></p>
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
        : null
      }
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