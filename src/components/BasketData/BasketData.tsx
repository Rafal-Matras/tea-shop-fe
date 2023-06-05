import { useEffect, useState } from 'react';

import { DeliveryRegisterInterface, UserInterface } from '../../types';

import { UseUserContext } from '../../context/UserContext';

import { defaultDeliveryRegister, defaultUser } from '../../assets/defaultData';

import { BasketDataIsNotLogin } from './BasketDataIsNotLogin';
import { BasketDataIsLogin } from './BasketDataIsLogin';
import { Progress } from '../common/Progress/Progress';

import style from './BasketData.module.css';
import { config } from '../../config/config';
import { validation } from './validation';
import { useNavigate } from 'react-router-dom';

export const BasketData = () => {

  const navigate = useNavigate();
  const {user, setUser} = UseUserContext();
  const [userData, setUserData] = useState<UserInterface>(defaultUser);
  const [accept, setAccept] = useState<0 | 1>(0);
  const [isAllData, setIsAllData] = useState<boolean>(true);
  const [isAccepted, setIsAccepted] = useState<boolean>(false);

  useEffect(() => {
    if (user.delivery === null) {
      const newUser = user;
      newUser.delivery = defaultDeliveryRegister;
      setUserData(newUser);
    }
    setUserData(user);
  }, [user]);

  const changeUserData = (name: string, value: string | number | DeliveryRegisterInterface) => {
    setUserData(userData => ({
      ...userData,
      [name]: value,
    }));
  };

  const changeUserDataDelivery = (name: string, value: string) => {
    setUserData(userData => ({
      ...userData,
      delivery: {...userData.delivery, [name]: value},
    }));
  };

  const changeOtherDeliveryAddress = () => {
    setAccept(accept === 1 ? 0 : 1);
    changeUserData('otherDeliveryAddress', accept === 1 ? 0 : 1);
  };

  const checkEmail = async (email: string) => {
    const response = await fetch(`${config.URL}user/is-in-database/${email}`);
    return response.json();
  };

  const handleNext = () => {
    if (!validation(accept, setIsAccepted, userData, null, setIsAllData, true)) return;
    setUser(userData);
    navigate('/basket/summary');
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    window.scroll(0, 0);
    navigate('/basket');
  };

  return (<div className={style.container}>
      <Progress
        name="Rejestracja"
        progressNumber={2}
      />
      <h1 className={style.title}>Prosimy o wypełnienie formularza oraz o podanie adresu dostawy zamówionych
        produktów.</h1>
      {user.role === 'user'
        ? <BasketDataIsLogin
          userData={userData}
          changeUserData={changeUserData}
          changeUserDataDelivery={changeUserDataDelivery}
          accept={accept}
          setAccept={setAccept}
          changeOtherDeliveryAddress={changeOtherDeliveryAddress}
          isAllData={isAllData}
          isAccepted={isAccepted}
          setIsAccepted={setIsAccepted}
          handleNext={handleNext}
          handleBack={handleBack}
        />
        : <BasketDataIsNotLogin
          userData={userData}
          changeUserData={changeUserData}
          changeUserDataDelivery={changeUserDataDelivery}
          accept={accept}
          setAccept={setAccept}
          changeOtherDeliveryAddress={changeOtherDeliveryAddress}
          isAllData={isAllData}
          setIsAllData={setIsAllData}
          isAccepted={isAccepted}
          setIsAccepted={setIsAccepted}
          checkEmail={checkEmail}
          handleNext={handleNext}
          handleBack={handleBack}
        />}
    </div>
  );
};