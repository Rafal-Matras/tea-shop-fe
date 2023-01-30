import { createContext } from 'react';

export const AppContext = createContext({
  activeUser: false,
  setActiveUser: (change: boolean) => {
  },
});