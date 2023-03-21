import { useContext } from 'react';

import { ProfileUserDataType } from '../types';

import { UserContext } from '../context/UserContext';

export const useUserLoginData = () => {

  const {user} = useContext(UserContext);

  const {id, email, accountType, name, surName, companyName, nip, street, homeNumber, postCode, city, phone} = user;
  const {deliveryName, deliverySurName, deliveryCompanyName, deliveryStreet, deliveryHomeNumber, deliveryPostCode, deliveryCity,} = user.delivery;

  const data: ProfileUserDataType = {
    id,
    email,
    accountType,
    name,
    surName,
    companyName,
    nip,
    street,
    homeNumber,
    postCode,
    city,
    phone,
    delivery: {
      deliveryName,
      deliverySurName,
      deliveryCompanyName,
      deliveryStreet,
      deliveryHomeNumber,
      deliveryPostCode,
      deliveryCity,
    },
  };
  return data;
};