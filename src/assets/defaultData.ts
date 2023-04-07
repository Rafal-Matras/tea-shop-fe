import { UserInterface, UserLoginDataInterface, UserProfileType } from '../types';

export const defaultUser: UserInterface = {
  id: '',
  role: '',
  email: '',
  accountType: 'Paragon',
  password: '',
  name: '',
  surName: '',
  companyName: '',
  nip: '',
  street: '',
  homeNumber: '',
  postCode: '',
  city: '',
  phone: '',
  delivery: {
    deliveryName: '',
    deliverySurName: '',
    deliveryStreet: '',
    deliveryHomeNumber: '',
    deliveryPostCode: '',
    deliveryCity: '',
  },
};

export const defaultUserRegister: UserProfileType = {
  id: '',
  email: '',
  password: '',
  accountType: 'Paragon',
  name: '',
  surName: '',
  companyName: '',
  nip: '',
  street: '',
  homeNumber: '',
  postCode: '',
  city: '',
  phone: '',
  delivery: {
    deliveryName: '',
    deliverySurName: '',
    deliveryStreet: '',
    deliveryHomeNumber: '',
    deliveryPostCode: '',
    deliveryCity: '',
  },
};

export const defaultUserLogin: UserLoginDataInterface = {
  email: '',
  password: '',
};

export const defaultUserActive: UserInterface = {
  id: '123',
  role: 'user',
  email: 'rafal@gmail.com',
  password: 'brpio3t89hgehugh87sehiuh',
  accountType: 'Paragon',
  name: 'Rafał',
  surName: 'Matraś',
  companyName: 'APB S.A.',
  nip: '123-123-85-85',
  street: 'Nowodworska 29b',
  homeNumber: '103',
  postCode: '03-140',
  city: 'Warszawa',
  phone: '606 455 202',
  delivery: {
    deliveryName: 'Rafał ',
    deliverySurName: 'Matraś',
    deliveryStreet: 'Nowa',
    deliveryHomeNumber: '12 m 1',
    deliveryPostCode: '03-123',
    deliveryCity: 'Warszawa',
  },
};