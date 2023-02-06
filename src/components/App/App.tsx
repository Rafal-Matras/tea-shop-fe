import { useState } from 'react';

import { AppContext } from '../../context/AppContext';

import { AdminHeader } from '../Header/AdminHeader';
import { Main } from '../Main/Main';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import style from './App.module.css';

export const App = () => {

  const [userRole, setUserRole] = useState<string>('user');
  const [fullPrice, setFullPrice] = useState<number>(0);

  return (
    <AppContext.Provider value={{userRole, setUserRole, fullPrice, setFullPrice}}>
      <main className={style.container}>
        {userRole === 'admin'
          ? <>
            <AdminHeader/>
            <Main/>
          </>
          : <>
            <Header/>
            <Main/>
            <Footer/>
          </>
        }
      </main>
    </AppContext.Provider>
  );
};