import { useState } from 'react';

import { AppContext } from '../../context/AppContext';

import { AdminHeader } from '../Admin/AdminHeader/AdminHeader';
import { AdminMain } from '../Admin/AdminMain/AdminMain';
import { TopBar } from '../TopBar/TopBar';
import { Header } from '../Header/Header';
import { Nav } from '../Nav/Nav';
import { Main } from '../Main/Main';
import { Footer } from '../Footer/Footer';

import style from './App.module.css';

export const App = () => {

  const [userRole, setUserRole] = useState<string>('user');
  const [productName, setProductName] = useState<string>('');
  const [productType, setProductType] = useState<string>('');
  const [fullPrice, setFullPrice] = useState<number>(0);
  const [activeMenu, setActiveMenu] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{
      userRole,
      setUserRole,
      productName,
      setProductName,
      productType,
      setProductType,
      fullPrice,
      setFullPrice,
    }}>
      <div className={style.container}>
        {userRole === 'admin'
          ? <>
            <AdminHeader/>
            <AdminMain/>
          </>
          : <>
            <TopBar/>
            <Header setActiveMenu={setActiveMenu}/>
            <Nav activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
            <Main/>
            <Footer/>
          </>
        }
      </div>
    </AppContext.Provider>
  );
};