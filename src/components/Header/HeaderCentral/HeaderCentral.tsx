import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AppContext } from '../../../context/AppContext';

import { useConvertPriceToString } from '../../../hooks/useConvertPriceToString';

import { Logo } from '../../../assets/Logo';
import { SearchIcon } from '../../common/SvgIcons/SearchIcon';
import { BasketIcon } from '../../common/SvgIcons/BasketIcon';
import { CartIcon } from '../../common/SvgIcons/CartIcon';
import { MenuIcon } from '../../common/SvgIcons/MenuIcon';

import style from './HeaderCentral.module.css';

interface Props {
  click: (name: boolean) => void;
}

export const HeaderCentral = ({click}: Props) => {

  const {userRole, setUserRole, fullPrice} = useContext(AppContext);

  const search = () => {

  };

  const logOut = () => {
    setUserRole('');
  };

  return (
    <header className={style.header}>
      <div className={style.hamburgerMenu} onClick={() => click(true)}>
        <MenuIcon/>
      </div>
      <Link to="/">
        <div className={style.logo}>
          <Logo/>
        </div>
      </Link>
      <Link to="/basket">
        <div className={style.mobileBasket}>
          <CartIcon width="30px" height="30px"/>
        </div>
      </Link>
      <div className={style.search}>
        <form className={style.searchInput} onSubmit={search}>
          <input type="text" placeholder="wpisz szukaną frazę..."/>
          <button className={style.searchIconBox}>
            <SearchIcon className={style.searchIcon}/>
          </button>
        </form>
      </div>
      <div className={style.basket}>
        <Link className={style.basketTop} to="/basket">
          <BasketIcon className={style.basketIcon}/>
          <p>Koszyk</p>
          <p>{useConvertPriceToString(fullPrice)} zł</p>
        </Link>
        <div className={style.basketBottom}>
          {userRole === 'user'
            ? <>
              <Link className={style.linkConsumerPanel} to="/user/profile/data">
                <p>panel klienta</p>
              </Link>
              <div className={style.verticalLine}></div>
              <Link className={style.linkLogout} to="/user/logout" onClick={logOut}>
                <p>wyloguj</p>
              </Link>
            </>
            : <>
              <Link className={style.linkRegister} to="/user/register">
                <p>rejestracja</p>
              </Link>
              <div className={style.verticalLine}></div>
              <Link className={style.linkLogin} to="/user/login">
                <p>logowanie</p>
              </Link>
            </>
          }
        </div>
      </div>
    </header>
  );
};