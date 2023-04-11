import { createContext, ReactNode, useContext, useState } from 'react';

import { UserContextInterface, UserInterface } from '../types';

import { defaultUserContext } from '../assets/defaultContext';
import { defaultUser } from '../assets/defaultData';

interface Props {
  children: ReactNode;
}

const UserContext = createContext<UserContextInterface>(defaultUserContext);

export const UseUserContext = () => useContext(UserContext);

export const UserContextProvider = ({children}: Props) => {
  const [user, setUser] = useState<UserInterface>(defaultUser);

  const UserContextObject = {
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={UserContextObject}>
      {children}
    </UserContext.Provider>
  );
};