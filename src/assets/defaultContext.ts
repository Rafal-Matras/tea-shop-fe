import {
  BasketContextInterface,
  BasketInterface,
  ProductContextInterface, ProductsListInterface,
  UserContextInterface,
  UserInterface,
} from '../types';

import { defaultUser } from './defaultData';

export const defaultUserContext: UserContextInterface = {
  user: defaultUser,
  setUser: (user: UserInterface): void => {
  },
};

export const defaultProductContext: ProductContextInterface = {
  activeProductType: '',
  allProducts: [],
  productName: '',
  productType: '',
  setActiveProductType: (name: string): void => {
  },
  setAllProducts: (product: ProductsListInterface[]): void => {
  },
  setProductName: (name: string): void => {
  },
  setProductType: (name: string): void => {
  },
};

export const defaultBasketContext: BasketContextInterface = {
  basket: [] as BasketInterface[],
  setBasket: (basket: BasketInterface[]): void => {
  },
  fullPrice: 0,
  setFullPrice: (price: number): void => {
  },
  typeOfDelivery: '',
  setTypeOfDelivery: (name: string): void => {
  },
  typeOfPayments: '',
  setTypeOfPayments: (name: string): void => {
  },
  costOfDelivery: 0,
  setCostOfDelivery: (number: number): void => {
  },
};