import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';

import style from './App.module.css';
import { AppContext } from '../../context/AppContext';
import { useState } from 'react';

export const App = () => {

  const [activeUser, setActiveUser] = useState<boolean>(true);

  return (
    <AppContext.Provider value={{activeUser, setActiveUser}}>
      <main className={style.container}>
        <Header/>
        <Main/>
        <Footer/>
      </main>
    </AppContext.Provider>
  );
};