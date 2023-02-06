import { createContext } from 'react';

export const AppContext = createContext({
  userRole: '',
  setUserRole: (role: '' | 'user' | 'admin') => {
  },
  fullPrice: 0,
  setFullPrice: (number: number) => {
  },
});