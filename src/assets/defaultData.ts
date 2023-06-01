import {
  BasketOneProductInterface,
  Category,
  ChangePasswordForgotInterface,
  DeliveryRegisterInterface,
  DocumentType,
  ProductInterface,
  UserInterface,
  UserLoginDataInterface,
  UserRegisterInterface,
} from '../types';

export const defaultUser: UserInterface = {
  id: '',
  role: null,
  email: '',
  documentType: DocumentType.receipt,
  pwdHash: '',
  name: '',
  surName: '',
  companyName: '',
  nip: '',
  street: '',
  flatNumber: '',
  postCode: '',
  city: '',
  phone: '',
  otherDeliveryAddress: 0,
  delivery: {
    deliveryName: '',
    deliverySurName: '',
    deliveryCompanyName:'',
    deliveryStreet: '',
    deliveryFlatNumber: '',
    deliveryPostCode: '',
    deliveryCity: '',
  },
};

export const defaultUserLogin: UserLoginDataInterface = {
  email: '',
  pwdHash: '',
};

export const defaultUserRegister: UserRegisterInterface = {
  id: '',
  role: null,
  email: '',
  pwdHash: '',
  documentType: DocumentType.receipt,
  name: '',
  surName: '',
  companyName: '',
  nip: '',
  street: '',
  flatNumber: '',
  postCode: '',
  city: '',
  phone: '',
  otherDeliveryAddress: 0,
};

export const defaultChangePassword: ChangePasswordForgotInterface = {
  pwd: '',
  confirmPwd: '',
};

export const defaultDeliveryRegister: DeliveryRegisterInterface = {
  deliveryName: '',
  deliverySurName: '',
  deliveryCompanyName:'',
  deliveryStreet: '',
  deliveryFlatNumber: '',
  deliveryPostCode: '',
  deliveryCity: '',
};

export const productDefault: ProductInterface = {
  id: '',
  name: '',
  category: Category.tea,
  type: [],
  image: '',
  price: 0,
  promo: null,
  numberOfUnits: 0,
  unit: 'g',
  state: 0,
  forGift: null,
  onHomePage: null,
  new: null,
  description: '',
  ingredients: '',
  countryOrigin: '',
  amountBrew: '',
  temperatureBrew: '',
  timeBrew: '',
  numberBrews: '',
  wayStore: '',
  coffeeSpecies: null,
  howToBrew: null,
  size: null,
};

export const oneProductInBasketDefault: BasketOneProductInterface = {
  id: '',
  name: '',
  category: Category.tea,
  type: [],
  image: '',
  price: 0,
  numberOfUnits: 0,
  unit: 'g',
  state: 0,
};