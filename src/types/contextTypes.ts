import { UserInterface } from './userTypes';
import { BasketInterface, ProductsListInterface } from './productsTypes';

export interface UserContextInterface {
  user: UserInterface;
  setUser: (user: UserInterface) => void;
}

export interface ProductContextInterface {
  allProducts: ProductsListInterface[];
  setAllProducts: (product: ProductsListInterface[]) => void;
  productName: string;
  setProductName: (name: string) => void;
  productType: string;
  setProductType: (name: string) => void;
  activeProductType: string;
  setActiveProductType: (name: string) => void;
}

export interface BasketContextInterface {
  basket: BasketInterface[],
  setBasket: (basket: BasketInterface[]) => void;
  fullPrice: number;
  setFullPrice: (price: number) => void;
  typeOfDelivery:string,
  setTypeOfDelivery:(name:string) => void,
  typeOfPayments: string,
  setTypeOfPayments:(name:string) => void,
  costOfDelivery:number,
  setCostOfDelivery:(number:number) => void
}