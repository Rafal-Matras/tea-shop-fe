import { createContext } from 'react';
import { AddToBasket, ProductsListInterface } from '../types';

export const AppContext = createContext({
  allProducts: [] as ProductsListInterface[],
  setAllProducts: (products: ProductsListInterface[]) => {
  },
  basket: [] as AddToBasket[],
  setBasket: (basket: AddToBasket[]) => {
  },
  productName: '',
  setProductName: (name: string) => {
  },
  productType: '',
  setProductType: (name: string) => {
  },
  fullPrice: 0,
  setFullPrice: (number: number) => {
  },
  numberOfProducts: 0,
  setNumberOfProducts: (number: number) => {
  },
  activeProductType: '',
  setActiveProductType: (name: string) => {
  },
});