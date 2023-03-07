import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AppContext } from '../../context/AppContext';

import { useConvertPriceToString } from '../../hooks/useConvertPriceToString';

import { BasketIcon } from '../common/SvgIcons/BasketIcon';

import style from './Header.module.css';

export const BasketBox = () => {

  const {userRole, fullPrice, setActiveProductType} = useContext(AppContext);

  return (
    <div className={style.basketBox}>
      <Link className={style.basketTop} to="/basket" onClick={() => setActiveProductType('')}>
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
              onClick={() => setActiveProductType('')}
            >panel klienta
            </Link>
            : <Link
              className={style.basketBottomText}
              to="/user/login"
              onClick={() => setActiveProductType('')}
            >logowanie
            </Link>
          }
        </div>
        <div className={style.basketBottomBox}>
          {userRole === 'user'
            ? <Link
              className={style.basketBottomText}
              to="/user/logout"
              onClick={() => setActiveProductType('')}
            >wyloguj
            </Link>
            : <Link
              className={style.basketBottomText}
              to="/user/register"
              onClick={() => setActiveProductType('')}
            >rejestracja
            </Link>
          }
        </div>
      </div>
    </div>
  );
};