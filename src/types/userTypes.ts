export interface UserLoginDataInterface {
  email: string;
  password: string;
}

export interface UserRegistrationDataInterface {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  surName: string;
  companyName: string;
  nip: string;
  street: string;
  homeNumber: string;
  postCode: string;
  city: string;
  phone: string;
}

export interface UserDeliveryDataInterface {
  name: string;
  surName: string;
  companyName: string;
  street: string;
  homeNumber: string;
  postCode: string;
  city: string;
}