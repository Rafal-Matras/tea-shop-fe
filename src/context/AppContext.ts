import { createContext } from 'react';
import { ProductsListInterface } from '../types';

export const AppContext = createContext({
  allProducts: [] as ProductsListInterface[],
  setAllProducts: (products: ProductsListInterface[]) => {
  },
  userRole: '',
  setUserRole: (role: '' | 'user' | 'admin') => {
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