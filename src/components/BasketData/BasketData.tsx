import { useContext, useState } from 'react';

import { UserContext } from '../../context/UserContext';

import { BasketDataIsNotLogin } from './BasketDataIsNotLogin';
import { BasketDataIsLogin } from './BasketDataIsLogin';
import { UserLoginDataInterface, UserProfileType } from '../../types';

export const BasketData = () => {

  const {user} = useContext(UserContext);
  const [deliveryActive, setDeliveryActive] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserProfileType>(user);
  const [accept, setAccept] = useState<boolean>(false);
  const [loginDetails, setLoginDetails] = useState<UserLoginDataInterface>({
    email: '',
    password: '',
  });

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