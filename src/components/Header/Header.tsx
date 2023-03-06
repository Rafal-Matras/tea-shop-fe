import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AppContext } from '../../context/AppContext';

import { useConvertPriceToString } from '../../hooks/useConvertPriceToString';

import { Logo } from '../../assets/Logo';
import { MenuIcon } from '../common/SvgIcons/MenuIcon';
import { CartIcon } from '../common/SvgIcons/CartIcon';
import { SearchIcon } from '../common/SvgIcons/SearchIcon';
import { BasketIcon } from '../common/SvgIcons/BasketIcon';

import style from './Header.module.css';

interface Props {
  setActiveMenu: (name: boolean) => void;
}

export const Header = ({setActiveMenu}: Props) => {

  const {userRole, fullPrice, setActiveProductType} = useContext(AppContext);

  const clearProduct = () => {
    setActiveProductType('');
  };

  const search = () => {

    clearProduct();
  };

  return (
    <header className={style.header}>
      <div className={style.hamburgerMenu} onClick={() => setActiveMenu(true)}>
        <MenuIcon className={style.menuIcon}/>
      </div>
      <Link className={style.logo} to="/" onClick={clearProduct}>
        <Logo/>
      </Link>
      <Link className={style.basket} to="/basket">
        <p className={style.productsInBasket}>0</p>  {/*TODO ilość produktów w koszyku*/}
        <CartIcon className={style.cartIcon}/>
      </Link>
      <div className={style.searchBox}>
        <form className={style.search} onSubmit={search}>
          <input className={style.searchInput} type="text" placeholder="wpisz szukaną frazę..."/>
          <button className={style.searchButton}>
            <SearchIcon className={style.searchIcon}/>
          </button>
        </form>
      </div>
      <div className={style.basketBox}>
        <Link className={style.basketTop} to="/basket" onClick={clearProduct}>
          <BasketIcon className={style.basketIcon}/>
          <p className={style.basketTopText}>Koszyk</p>
          <p className={style.basketTopText}>{useConvertPriceToString(fullPrice)} zł</p>
        </Link>
        <div className={style.basketBottom}>
          <div className={style.basketBottomBox}>
            {userRole === 'user'
              ? <Link
                className={style.basketBottomText}
                to="/user/profile/data"
                onClick={clearProduct}
              >panel klienta
              </Link>
              : <Link
                className={style.basketBottomText}
                to="/user/login"
                onClick={clearProduct}
              >logowanie
              </Link>
            }
          </div>
          <div className={style.basketBottomBox}>
            {userRole === 'user'
              ? <Link
                className={style.basketBottomText}
                to="/user/logout"
                onClick={clearProduct}
              >wyloguj
              </Link>
              : <Link
                className={style.basketBottomText}
                to="/user/register"
                onClick={clearProduct}
              >rejestracja
              </Link>
            }
          </div>
        </div>
      </div>
    </header>
  );
};