import { createContext } from 'react';

export const AppContext = createContext({
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
});