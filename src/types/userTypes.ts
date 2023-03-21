export interface UserInterface {
  id: string;
  role: '' | 'user' | 'admin';
  email: string;
  password: string,
  accountType: 'Paragon' | 'Faktura VAT';
  name: string;
  surName: string;
  companyName: string;
  nip: string;
  street: string;
  homeNumber: string;
  postCode: string;
  city: string;
  phone: string;
  delivery: DeliveryUserInterface;
}

export interface DeliveryUserInterface {
  deliveryName: string;
  deliverySurName: string;
  deliveryCompanyName: string;
  deliveryStreet: string;
  deliveryHomeNumber: string;
  deliveryPostCode: string;
  deliveryCity: string;
}

export type UserRegistrationDataType = Omit<UserInterface, 'role'>

export interface UserLoginDataInterface {
  email: string;
  password: string;
}

export interface ChangePasswordInterface {
  password: string,
  newPassword: string;
  confirmNewPassword: string;
}

export type ProfileUserDataType = Omit<UserInterface, 'role' | 'password'>

export type DataToAccountType = Omit<UserInterface, 'id' | 'role' | 'email' | 'password' | 'delivery'>

export interface HistoryOrdersInterface {
  orderNumber: string;
  data: string;
  price: string;
  deliveryPrice: string;
  provider: string;
  trackingNumber: string;
  dataToAccount: DataToAccountType;
  status: OrderStatusEnum;
  order: OrderDetailsInterface[];
}

export enum OrderStatusEnum {
  new = 'Nowe',
  implemented = 'Realizowany',
  sent = 'Wysłano',
  done = 'Zakończony',
}

export interface OrderDetailsInterface {
  productId: string;
  image: string;
  name: string;
  amount: string;
  price: string;
}

export type ActivePageType = 'data' | 'password' | 'history' | 'details';