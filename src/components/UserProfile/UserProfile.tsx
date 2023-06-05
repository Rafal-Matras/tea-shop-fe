import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { ActivePageType, HistoryOrdersInterface, UserInterface } from '../../types';

import { UseUserContext } from '../../context/UserContext';

import { ProfileNavList } from './ProfileNavList';
import { ProfileUserData } from './ProfileUserData';
import { ProfileChangePassword } from './ProfileChangePassword';
import { ProfileHistoryOrders } from './ProfileHistoryOrders';
import { ProfileOrderDetails } from './ProfileOrderDetails';

import style from './UserProfile.module.css';
import { config } from '../../config/config';
import { defaultDeliveryRegister } from '../../assets/defaultData';

export const UserProfile = () => {

  const {user, setUser} = UseUserContext();
  const {state} = useLocation();
  const [userData, setUserData] = useState<UserInterface>(user);
  const [activePage, setActivePage] = useState<ActivePageType>('data');
  const [ordersList, setOrderList] = useState<HistoryOrdersInterface[]>([]);
  const [activeOrder, setActiveOrder] = useState<number>(0);

  // useEffect(() => {
  //   console.log(state);
  //   if (state) {
  //     setActivePage(state);
  //   }
  //   (async () => {
  //
  //   })();
  //   setOrderList(orderListDefault);
  // }, [state]);

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

  const setOrderDetails = (name: ActivePageType, order: number) => {
    setActivePage(name);
    setActiveOrder(order);
  };

  const handleSave = async () => {
    if (!userData.delivery) {
      userData.delivery = defaultDeliveryRegister;
      console.log(userData.delivery);
    }
    try {
      const response = await fetch(`${config.URL}user`, {
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userDto: userData,
          deliveryDto: userData.delivery,
        }),
      });
      if (!response.ok) {
        throw new Error('coś poszło nie tak stóbuj ponownie');
      }

    } catch (err) {
      throw new Error('', {cause: err});
    }
    setUser(userData);
  };

  const page = () => {
    switch (activePage) {
      case 'data':
        return <ProfileUserData
          userData={userData}
          changeUserData={changeUserData}
          changeUserDataDelivery={changeUserDataDelivery}
          handleSave={handleSave}
        />;
      case 'changePassword':
        return <ProfileChangePassword/>;
      case 'history':
        return <ProfileHistoryOrders
          orderList={ordersList}
          setOrderDetails={setOrderDetails}
        />;
      case 'details':
        return <ProfileOrderDetails
          orderList={ordersList[activeOrder]}
          setActivePage={setActivePage}
        />;
    }
  };

  return (
    <div className={style.container}>
      <h1 className={style.pageTitle}>Panel klienta</h1>
      <ProfileNavList
        activePage={activePage}
        setActivePage={setActivePage}
      />
      {page()}
    </div>
  );
};