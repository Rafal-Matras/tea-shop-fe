import { useEffect, useState } from 'react';

import { ProductsListInterface, UserInterface } from '../../types';

import { AppContext } from '../../context/AppContext';

import { AdminHeader } from '../Admin/AdminHeader/AdminHeader';
import { AdminMain } from '../Admin/AdminMain/AdminMain';
import { TopBar } from '../TopBar/TopBar';
import { Header } from '../Header/Header';
import { Nav } from '../Nav/Nav';
import { Main } from '../Main/Main';
import { Footer } from '../Footer/Footer';

import { defaultUser } from '../../assets/defaultData';
import { allProductsDefault } from '../../assets/allProducts';

import style from './App.module.css';
import { UserContext } from '../../context/UserContext';

export const App = () => {

  const [user, setUser] = useState<UserInterface>(defaultUser);
  const [allProducts, setAllProducts] = useState<ProductsListInterface[]>([]);
  const [productName, setProductName] = useState<string>('');
  const [productType, setProductType] = useState<string>('');
  const [fullPrice, setFullPrice] = useState<number>(0);
  const [numberOfProducts, setNumberOfProducts] = useState<number>(0);
  const [activeProductType, setActiveProductType] = useState<string>('');
  const [activeMenu, setActiveMenu] = useState<boolean>(false);

  useEffect(() => {

    // setTimeout(async ()=>{
    //     const response = await fetch(URL - all);
    //     const data = await response.json();
    //     setAllProducts(data);
    // },500)

    setAllProducts(allProductsDefault);
  }, []);

  return (
    <UserContext.Provider value={{user, setUser}}>
      <AppContext.Provider value={{
        allProducts,
        setAllProducts,
        productName,
        setProductName,
        productType,
        setProductType,
        fullPrice,
        setFullPrice,
        numberOfProducts,
        setNumberOfProducts,
        activeProductType,
        setActiveProductType,
      }}>
        <div className={style.container}>
          {user.role === 'admin'
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
    </UserContext.Provider>
  );
};
