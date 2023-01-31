import { Link, useLocation } from 'react-router-dom';

import style from './AdminHeader.module.css';
import { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';

export const AdminHeader = () => {

  const location = useLocation();
  const {setUserRole} = useContext(AppContext);
  const [hamburgerMenuActive, setHamburgerMenuActive] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('konfiguracja');

  const menuSelected = (name: string) => {
    setHamburgerMenuActive(false);
    setTitle(name);
  };

  const logOut = () => {
    setHamburgerMenuActive(false);
    setUserRole('');
  };


  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.logo}>
          <img src="/images/logo.png" alt="Herbaciany zakątek logo"/>
        </div>
        <h1 className={style.title}>{window.screen.width > 992 ? 'Panel Administracyjny' : title}</h1>
        <div className={style.hamburger} onClick={() => setHamburgerMenuActive(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#7ab744">
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
          </svg>
        </div>
      </div>
      <div className={`${style.bottom} ${hamburgerMenuActive ? style.active : null}`}>
        <div className={style.closeHamburgerMenu} onClick={() => setHamburgerMenuActive(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#ffffff">
            <path
              d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
          </svg>
        </div>
        <ul
          className={style.list}>
          <li className={style.item}>
            <Link
              className={`${style.link} ${location.pathname === '/admin/admin-panel'
                ? style.active : null}`}
              to="/admin/admin-panel"
              onClick={()=>menuSelected('konfiguracja')}
            >Konfiguracja
            </Link>
          </li>
          <li className={style.item}>
            <Link
              className={`${style.link} ${location.pathname === '/admin/products-list'
                ? style.active : null}`}
              to="/admin/products-list"
              onClick={()=>menuSelected('produkty')}
            >Produkty
            </Link>
          </li>
          <li className={style.item}>
            <Link
              className={`${style.link} ${location.pathname === '/admin/product-add'
                ? style.active : null}`}
              to="/admin/product-add"
              onClick={()=>menuSelected('dodaj produkt')}
            >Dodaj Produkt
            </Link>
          </li>
          <li className={style.item}>
            <Link
              className={`${style.link} ${location.pathname === '/admin/active-orders-list'
                ? style.active : null}`}
              to="/admin/active-orders-list"
              onClick={()=>menuSelected('aktywne zamówienia')}
            >Aktywne zamównieni
            </Link>
          </li>
          <li className={style.item}>
            <Link
              className={`${style.link} ${location.pathname === '/admin/complete-orders-list'
                ? style.active : null}`}
              to="/admin/complete-orders-list"
              onClick={()=>menuSelected('zakończone zamówienia')}
            >Zakończone zamówienia
            </Link>
          </li>
          <li className={style.item}>
            <Link
              className={style.link}
              to="/"
              onClick={logOut}
            >Wyloguj
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};