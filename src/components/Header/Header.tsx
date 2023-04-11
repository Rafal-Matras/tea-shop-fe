import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { UseUserContext } from '../../context/UserContext';
import { UseProductContext } from '../../context/ProductContext';
import { UseBasketContext } from '../../context/BasketContext';

import { Search } from './Search';
import { BasketBox } from './BasketBox';

import { Logo } from '../../assets/Logo';
import { MenuIcon } from '../common/SvgIcons/MenuIcon';
import { CartIcon } from '../common/SvgIcons/CartIcon';

import { allProductsDefault } from '../../assets/allProducts';

import style from './Header.module.css';

interface Props {
  setActiveMenu: (name: boolean) => void;
}

export const Header = ({setActiveMenu}: Props) => {

  const {user} = UseUserContext();
  const {allProducts, setAllProducts, setActiveProductType} = UseProductContext();
  const {basket, setBasket} = UseBasketContext();

  useEffect(() => {
    if (allProducts.length === 0) {
      // (async () => {
      //   const response = await fetch(URL);
      //   const data = await response.json();
      //   setAllProducts(data);
      // })();
      setAllProducts(allProductsDefault)
    }
  }, []);

  useEffect(() => {
    if (basket.length === 0 && !user.role && localStorage.getItem('basket')) {
      setBasket(JSON.parse(localStorage.getItem('basket') || ''));
    }
  }, []);
  console.log('Header render');
  return (
    <header className={style.header}>
      <div className={style.hamburgerMenu} onClick={() => setActiveMenu(true)}>
        <MenuIcon className={style.menuIcon}/>
      </div>
      <Link className={style.logo} to="/" onClick={() => setActiveProductType('')}>
        <Logo/>
      </Link>
      <Link className={style.basket} to="/basket">
        <p className={style.productsInBasket}>{basket.length}</p>
        <CartIcon className={style.cartIcon}/>
      </Link>
      <Search/>
      <BasketBox/>
    </header>
  );
};