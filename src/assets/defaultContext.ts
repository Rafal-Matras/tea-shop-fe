import {
  BasketContextInterface,
  BasketInterface,
  ProductContextInterface,
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
  productName: '',
  productType: '',
  currentPage: 0,
  setActiveProductType: (name: string): void => {
  },
  setProductName: (name: string): void => {
  },
  setProductType: (name: string): void => {
  },
  setCurrentPage: (number: number): void => {
  },
};

export const defaultBasketContext: BasketContextInterface = {
  basket: [] as BasketInterface[],
  fullPrice: 0,
  orderStart: false,
  formOfDelivery: 'kurier GLS',
  formOfPayments: 'przelewy24.pl',
  deliveryCost: 0,
  selectedBasket: null,
  setBasket: (basket: BasketInterface[]): void => {
  },
  setFullPrice: (price: number): void => {
  },
  setOrderStart: (boolean: boolean): void => {
  },
  setFormOfDelivery: (delivery: string): void => {
  },
  setFormOfPayments: (payments: string): void => {
  },
  setDeliveryCost: (cost: number): void => {
  },
  setSelectedBasket: (selected: 'local' | 'server' | null): void => {
  },
};