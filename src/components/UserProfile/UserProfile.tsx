import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { ActivePageType, HistoryOrdersInterface, UserProfileType } from '../../types';

import { useUserLoginData } from '../../hooks/UseUserLoginData';

import { ProfileNavList } from './ProfileNavList';
import { ProfileUserData } from './ProfileUserData';
import { ProfileChangePassword } from './ProfileChangePassword';
import { ProfileHistoryOrders } from './ProfileHistoryOrders';
import { ProfileOrderDetails } from './ProfileOrderDetails';

import { orderListDefault } from '../../assets/orderListDefault';

import style from './UserProfile.module.css';


export const UserProfile = () => {

  const data = useUserLoginData();
  const {state} = useLocation();
  const [userData, setUserData] = useState<UserProfileType>(data);
  const [activePage, setActivePage] = useState<ActivePageType>('data');
  const [ordersList, setOrderList] = useState<HistoryOrdersInterface[]>([]);
  const [activeOrder, setActiveOrder] = useState<number>(0);

  useEffect(() => {
    if (state) {
      setActivePage(state);
    }
    (async () => {

    })();
    setOrderList(orderListDefault);
  }, [state]);

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

  // const changeUserDeliveryData = (name: string, value: string) => {
  //   setUserData(userData => ({
  //     ...userData,
  //     :name
  //   }));
  // };

  const setOrderDetails = (name: ActivePageType, order: number) => {
    setActivePage(name);
    setActiveOrder(order);
  };

  // const sendEditData = async () => {
  //   const response = await fetch(URL, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'Application/json',
  //     },
  //     body: JSON.stringify(userData),
  //   });
  // };

  const page = () => {
    switch (activePage) {
      case 'data':
        return <ProfileUserData
          userData={userData}
          changeUserData={changeUserData}
          changeUserDataDelivery={changeUserDataDelivery}
        />;
      case 'password':
        return <ProfileChangePassword
          email={userData.email}
          changeUserData={changeUserData}
        />;
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