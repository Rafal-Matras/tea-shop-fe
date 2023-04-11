import { useState } from 'react';

import { UseUserContext } from '../../context/UserContext';
import { ProductContextProvider } from '../../context/ProductContext';
import { BasketContextProvider } from '../../context/BasketContext';

import { AdminHeader } from '../Admin/AdminHeader/AdminHeader';
import { AdminMain } from '../Admin/AdminMain/AdminMain';
import { TopBar } from '../TopBar/TopBar';
import { Header } from '../Header/Header';
import { Nav } from '../Nav/Nav';
import { Main } from '../Main/Main';
import { Footer } from '../Footer/Footer';

import style from './App.module.css';

export const App = () => {

  const {user} = UseUserContext();
  const [activeMenu, setActiveMenu] = useState<boolean>(false);
  console.log('App render');
  return (
    <div className={style.container}>
      {user.role === 'admin'
        ? <>
          <AdminHeader/>
          <AdminMain/>
        </>
        : <>
          <TopBar/>
          <ProductContextProvider>
            <BasketContextProvider>
              <Header setActiveMenu={setActiveMenu}/>
              <Nav activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
              <Main/>
            </BasketContextProvider>
          </ProductContextProvider>
          <Footer/>
        </>
      }
    </div>
  );
};