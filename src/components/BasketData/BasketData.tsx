import { useEffect, useState } from 'react';

import { UserInterface, UserLoginDataInterface } from '../../types';

import { UseUserContext } from '../../context/UserContext';

import { BasketDataIsNotLogin } from './BasketDataIsNotLogin';
import { BasketDataIsLogin } from './BasketDataIsLogin';

import { defaultUser, defaultUserLogin } from '../../assets/defaultData';

export const BasketData = () => {

  const {user} = UseUserContext();
  const [deliveryActive, setDeliveryActive] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserInterface>(defaultUser);
  const [accept, setAccept] = useState<boolean>(false);
  const [loginDetails, setLoginDetails] = useState<UserLoginDataInterface>(defaultUserLogin);

  useEffect(() => {
    setUserData(user);
  }, [user]);

  const changeUserData = (name: string, value: string) => {
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

  const changeLoginDetails = (name: string, value: string) => {
    setLoginDetails(loginDetails => ({
      ...loginDetails,
      [name]: value,
    }));
  };

  return (
    user.role === 'user'
      ? <BasketDataIsLogin
        userData={userData}
        changeUserData={changeUserData}
        changeUserDataDelivery={changeUserDataDelivery}
        deliveryActive={deliveryActive}
        setDeliveryActive={setDeliveryActive}
        accept={accept}
        setAccept={setAccept}
      />
      : <BasketDataIsNotLogin
        userData={userData}
        changeUserData={changeUserData}
        changeUserDataDelivery={changeUserDataDelivery}
        loginDetails={loginDetails}
        changeLoginDetails={changeLoginDetails}
        deliveryActive={deliveryActive}
        setDeliveryActive={setDeliveryActive}
        accept={accept}
        setAccept={setAccept}
      />
  );
};