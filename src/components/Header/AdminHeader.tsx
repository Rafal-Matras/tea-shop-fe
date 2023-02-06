import { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { AppContext } from '../../context/AppContext';

import { MenuIcon } from '../common/SvgIcons/MenuIcon';
import { CloseIcon } from '../common/SvgIcons/CloseIcon';

import style from './AdminHeader.module.css';
import { Logo } from '../../assets/Logo';

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
          <Logo/>
        </div>
        <h1 className={style.title}>{window.screen.width > 992 ? 'Panel Administracyjny' : title}</h1>
        <div className={style.hamburger} onClick={() => setHamburgerMenuActive(true)}>
          <MenuIcon/>
        </div>
      </div>
      <div className={`${style.bottom} ${hamburgerMenuActive ? style.active : null}`}>
        <div className={style.closeHamburgerMenu} onClick={() => setHamburgerMenuActive(false)}>
          <CloseIcon/>
        </div>
        <ul className={style.list}>
          <li className={style.item}>
            <Link
              className={`${style.link} ${location.pathname === '/admin/admin-panel'
                ? style.active : null}`}
              to="/admin/admin-panel"
              onClick={() => menuSelected('konfiguracja')}
            >Konfiguracja
            </Link>
          </li>
          <li className={style.item}>
            <Link
              className={`${style.link} ${location.pathname === '/admin/products-list'
                ? style.active : null}`}
              to="/admin/products-list"
              onClick={() => menuSelected('produkty')}
            >Produkty
            </Link>
          </li>
          <li className={style.item}>
            <Link
              className={`${style.link} ${location.pathname === '/admin/product-add'
                ? style.active : null}`}
              to="/admin/product-add"
              onClick={() => menuSelected('dodaj produkt')}
            >Dodaj Produkt
            </Link>
          </li>
          <li className={style.item}>
            <Link
              className={`${style.link} ${location.pathname === '/admin/active-orders-list'
                ? style.active : null}`}
              to="/admin/active-orders-list"
              onClick={() => menuSelected('aktywne zamówienia')}
            >Aktywne zamównieni
            </Link>
          </li>
          <li className={style.item}>
            <Link
              className={`${style.link} ${location.pathname === '/admin/complete-orders-list'
                ? style.active : null}`}
              to="/admin/complete-orders-list"
              onClick={() => menuSelected('zakończone zamówienia')}
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