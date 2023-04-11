import {
  BasketOneProductInterface,
  Category,
  ProductInterface,
  UserInterface,
  UserLoginDataInterface,
  UserRegisterInterface,
} from '../types';

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

export const defaultUserLogin: UserLoginDataInterface = {
  email: '',
  password: '',
};

export const defaultUserRegister: UserRegisterInterface = {
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

export const productDefault: ProductInterface = {
  id: '',
  name: '',
  category: Category.tea,
  type: [],
  image: '',
  price: 0,
  promo: null,
  numberOfUnits: 50,
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
  category:Category.tea,
  type: [],
  image: '',
  price: 0,
  numberOfUnits: 0,
  unit: 'g',
  state: 0,
};

// export const defaultBasket: BasketInterface = {
//   id: '',
//   userId: '',
//   productId: '',
//   packSize: 0,
//   quantityOfProduct: 0,
// };









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