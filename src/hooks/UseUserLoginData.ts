import {  UseUserContext } from '../context/UserContext';
import { UserProfileType } from '../types';

export const useUserLoginData = () => {

  const {user} = UseUserContext();

  const {id, email, accountType, name, surName, companyName, nip, street, homeNumber, postCode, city, phone} = user;
  const {deliveryName, deliverySurName, deliveryStreet, deliveryHomeNumber, deliveryPostCode, deliveryCity,} = user.delivery;

  const data: UserProfileType = {
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
      deliveryStreet,
      deliveryHomeNumber,
      deliveryPostCode,
      deliveryCity,
    },
  };
  return data;
};