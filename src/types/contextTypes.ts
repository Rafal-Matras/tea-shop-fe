import { UserInterface } from './userTypes';
import { BasketInterface } from './productsTypes';

export interface UserContextInterface {
  user: UserInterface;
  setUser: (user: UserInterface) => void;
  activePage:string;
  setActivePage: (name:string) => void;
}

export interface ProductContextInterface {
  productName: string;
  setProductName: (name: string) => void;
  productType: string;
  setProductType: (name: string) => void;
  activeProductType: string;
  setActiveProductType: (name: string) => void;
  currentPage: number;
  setCurrentPage: (number: number) => void;
}

export interface BasketContextInterface {
  basket: BasketInterface[];
  setBasket: (basket: BasketInterface[]) => void;
  fullPrice: number;
  setFullPrice: (price: number) => void;
  orderStart: boolean;
  setOrderStart: (boolean: boolean) => void;
  formOfDelivery: string;
  setFormOfDelivery: (delivery: string) => void;
  formOfPayments: string;
  setFormOfPayments: (payment: string) => void;
  deliveryCost: number;
  setDeliveryCost: (deliveryCost: number) => void;
  selectedBasket: 'local' | 'server' | null;
  setSelectedBasket: (selected: 'local' | 'server' | null) => void;
}