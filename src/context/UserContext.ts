import { createContext } from 'react';
import { UserInterface } from '../types';

export const UserContext = createContext({
  user: {} as UserInterface,
  setUser: (user: UserInterface) => {},
});