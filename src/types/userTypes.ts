import { DocumentType } from './productsTypes';

export interface DeliveryUserInterface {
  deliveryName: string;
  deliverySurName: string;
  deliveryCompanyName: string;
  deliveryStreet: string;
  deliveryFlatNumber: string;
  deliveryPostCode: string;
  deliveryCity: string;
}

export enum Role {
  admin = 'admin',
  user = 'user',
}

export interface UserInterface {
  id: string;
  role: Role | null;
  email: string;
  pwdHash: string,
  documentType: DocumentType;
  name: string;
  surName: string;
  companyName: string;
  nip: string;
  street: string;
  flatNumber: string;
  postCode: string;
  city: string;
  phone: string;
  otherDeliveryAddress: 1 | 0;
  delivery: DeliveryUserInterface;
}

export type UserProfileType = Omit<UserInterface, 'role' | 'pwdHash'>

export type UserRegisterInterface = Omit<UserInterface, 'delivery'>
export type DeliveryRegisterInterface = DeliveryUserInterface;

export interface UserLoginDataInterface {
  email: string;
  pwdHash: string;
}

export interface ChangePasswordForgotInterface {
  pwd: string;
  confirmPwd: string;
}


export interface ChangePasswordInterface {
  pwdHash: string,
  newPwd: string;
  confirmNewPwd: string;
}