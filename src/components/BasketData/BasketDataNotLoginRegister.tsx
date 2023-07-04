import { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserInterface } from '../../types';

import { config } from '../../config/config';

import { RegisterForm } from '../common/Forms/RegisterForm/RegisterForm';
import { DataForm } from '../common/Forms/DataForm/DataForm';
import { DeliveryForm } from '../common/Forms/DeliveryForm/DeliveryForm';
import { Checkbox } from '../common/Checkbox/Checkbox';
import { BackAndNextButtons } from '../common/BackAndNextButtons/BackAndNextButtons';
import { PopupRegistered } from '../common/Popups/PopupRegistered/PopupRegistered';

import { validation } from './validation';

import style from './BasketData.module.css';

interface Props {
  userData: UserInterface;
  changeUserData: (name: string, value: string | number) => void;
  changeUserDataDelivery: (name: string, value: string) => void;
  setAccount: (name: string) => void;
  changeOtherDeliveryAddress: () => void;
  isAllData: boolean;
  setIsAllData: (isAllData: boolean) => void;
  checkEmail: (email: string) => Promise<Response>;
}

export const BasketDataNotLoginRegister = ({
                                             userData,
                                             changeUserData,
                                             changeUserDataDelivery,
                                             setAccount,
                                             changeOtherDeliveryAddress,
                                             isAllData,
                                             setIsAllData,
                                             checkEmail,
                                           }: Props) => {

  const navigate = useNavigate();
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [popupActive, setPopupActive] = useState<boolean>(false);
  const [errorActive, setErrorActive] = useState<boolean>(true);

  const editConfirmPassword = (name: string, value: string) => {
    setConfirmPassword(value);
  };

  const handleRegister = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {

      if (!validation(1, () => {
      }, userData, confirmPassword, setIsAllData, false)) return;
      const response = await fetch(`${config.URL}user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userDto: userData,
          deliveryDto: userData.delivery,
        }),
      });
      if (!response.ok) {
        setErrorActive(false);
        return;
      }
      setErrorActive(true);
      setPopupActive(true);
    } catch (err) {
      setErrorActive(false);
      throw new Error('', {cause: err});
    }
  };

  const handleBack = () => {
    window.scroll(0,0)
    navigate('/basket');
  };

  const handleNext = () => {
    setPopupActive(false);
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
        checkEmail={checkEmail}
        register={handleRegister}
      />
      <h2 className={style.sectionTitle}>Dane do rachunku i dostawy</h2>
      <DataForm
        userData={userData}
        editUserData={changeUserData}
      />
      <div className={style.deliveryBox}>
        <Checkbox
          children="Inne dane do wysyłki"
          active={userData.otherDeliveryAddress}
          change={changeOtherDeliveryAddress}
        />
      </div>
      {userData.otherDeliveryAddress === 1
        ? <>
          <h2 className={style.sectionTitle}>Dane do wysyłki</h2>
          <DeliveryForm
            deliveryData={userData.delivery}
            editDeliveryData={changeUserDataDelivery}
          />
        </>
        : null}
      <p className={isAllData ? style.errorMassageOff : style.errorMassageOn}>Proszę uzupełnić brakujące dane</p>
      <p className={errorActive ? style.errorMassageOff : style.errorMassageOn}>Coś poszło nie tak , spróbuj
        ponownie</p>
      <BackAndNextButtons
        textNext="dalej"
        handleBack={handleBack}
        handleNext={handleRegister}
      />
      {popupActive ? <PopupRegistered handleNext={handleNext}/> : null}
    </div>
  );
};