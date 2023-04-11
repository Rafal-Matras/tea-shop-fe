import {  useEffect, useState } from 'react';

import { UserProfileType } from '../../types';


import { BasketDataAcceptanceAndButtons } from './BasketDataAcceptanceAndButtons';
import { DataForm } from '../common/Forms/DataForm/DataForm';
import { DeliveryForm } from '../common/Forms/DeliveryForm/DeliveryForm';
import { Checkbox } from '../common/Checkbox/Checkbox';

import style from './BasketData.module.css';
import { Progress } from '../common/Progress/Progress';

interface Props {
  userData: UserProfileType;
  changeUserData: (name: string, value: string) => void;
  changeUserDataDelivery: (name: string, value: string) => void;
  deliveryActive:boolean;
  setDeliveryActive:(name:boolean)=>void
  accept:boolean;
  setAccept:(name:boolean) => void
}
export const BasketDataIsLogin = ({userData,changeUserData,changeUserDataDelivery,deliveryActive,setDeliveryActive,accept,setAccept}:Props) => {

  useEffect(()=>{

  },[])

  const handleNext = () => {

  }

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
      <DataForm registrationData={userData} editRegistrationData={changeUserData}/>
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
          <DeliveryForm registrationData={userData} editRegistrationDataDelivery={changeUserDataDelivery}/>
        </>
        : null
      }
      <BasketDataAcceptanceAndButtons
        accept={accept}
        setAccept={setAccept}
        handleNext={handleNext}
        buttonName='Kontynuuj'
        />
    </div>
  );
};