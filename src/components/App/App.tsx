import { useEffect, useState } from 'react';

import { BasketInterface } from '../../types';

import { UseUserContext } from '../../context/UserContext';
import { ProductContextProvider } from '../../context/ProductContext';
import { UseBasketContext } from '../../context/BasketContext';

import { config } from '../../config/config';

import { AdminHeader } from '../Admin/AdminHeader/AdminHeader';
import { AdminMain } from '../Admin/AdminMain/AdminMain';
import { TopBar } from '../TopBar/TopBar';
import { Header } from '../Header/Header';
import { Nav } from '../Nav/Nav';
import { Main } from '../Main/Main';
import { Footer } from '../Footer/Footer';

import { PopupSelectBasket } from '../common/Popups/PopupSelectBasket/PopupSelectBasket';

import style from './App.module.css';

export const App = () => {

  const {user} = UseUserContext();
  const {setBasket, selectedBasket, setSelectedBasket} = UseBasketContext();
  const [activeMenu, setActiveMenu] = useState<boolean>(false);
  const [activePopup, setActivePopup] = useState<boolean>(false);
  const [temporaryUserBasket, setTemporaryUserBasket] = useState<BasketInterface[]>([]);

  useEffect(() => {
    (async () => {
      let data = [];
      if (user.role === 'user' && !selectedBasket) {
        try {
          const response = await fetch(`${config.URL}basket`, {
            credentials: 'include',
          });
          const userBasket = await response.json();
          if (userBasket.length > 0 && localStorage.getItem('basket')) {
            setActivePopup(true);
            setTemporaryUserBasket(userBasket);
          } else if (userBasket.length < 1 && localStorage.getItem('basket')) {
            data = JSON.parse(localStorage.getItem('basket') || '');
            setSelectedBasket('local');
          } else {
            data = userBasket;
            setSelectedBasket('server');
          }
        } catch (err) {
          throw new Error('', {cause: err});
        }
      } else if (localStorage.getItem('basket')) {
        data = JSON.parse(localStorage.getItem('basket') || '');
      }
      setBasket(data);
    })();
  }, [user]);


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
            <Header setActiveMenu={setActiveMenu}/>
            <Nav activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
            <Main/>
          </ProductContextProvider>
          <Footer/>
          {activePopup
            ? <PopupSelectBasket
              setActivePopup={setActivePopup}
              temporaryUserBasket={temporaryUserBasket}
            />
            : null
          }
        </>
      }
    </div>
  );
};