import { Link } from 'react-router-dom';

import { UseProductContext } from '../../context/ProductContext';
import { UseBasketContext } from '../../context/BasketContext';

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

  const {setActiveProductType} = UseProductContext();
  const {basket} = UseBasketContext();

  const returnToHomePage = () => {
    setActiveProductType('');
    window.scrollTo(0, 0);
  };

  return (
    <header className={style.header}>
      <div className={style.hamburgerMenu} onClick={() => setActiveMenu(true)}>
        <MenuIcon className={style.menuIcon}/>
      </div>
      <Link className={style.logo} to="/" onClick={returnToHomePage}>
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