import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AppContext } from '../../context/AppContext';

import { Search } from './Search';
import { BasketBox } from './BasketBox';

import { Logo } from '../../assets/Logo';
import { MenuIcon } from '../common/SvgIcons/MenuIcon';
import { CartIcon } from '../common/SvgIcons/CartIcon';

import style from './Header.module.css';

interface Props {
  setActiveMenu: (name: boolean) => void;
}

export const Header = ({setActiveMenu}: Props) => {

  const {setActiveProductType} = useContext(AppContext);

  const productInBasket = () => {
    if (localStorage.getItem('basket')) {
      return JSON.parse(localStorage.getItem('basket') || '').length;
    } else return 0;
  };

  return (
    <header className={style.header}>
      <div className={style.hamburgerMenu} onClick={() => setActiveMenu(true)}>
        <MenuIcon className={style.menuIcon}/>
      </div>
      <Link className={style.logo} to="/" onClick={() => setActiveProductType('')}>
        <Logo/>
      </Link>
      <Link className={style.basket} to="/basket">
        <p className={style.productsInBasket}>{productInBasket()}</p>
        <CartIcon className={style.cartIcon}/>
      </Link>
      <Search/>
      <BasketBox/>
    </header>
  );
};