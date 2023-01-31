import { createContext } from 'react';

export const AppContext = createContext({
  userRole: '',
  setUserRole: (role:string) => {
  },
});