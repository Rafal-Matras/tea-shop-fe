import { Link } from 'react-router-dom';

import { UseUserContext } from '../../context/UserContext';
import { UseBasketContext } from '../../context/BasketContext';
import { UseProductContext } from '../../context/ProductContext';

import { useConvertPriceToString } from '../../hooks/useConvertPriceToString';
import { useSetNewFullPrice } from '../../hooks/useSetNewFullPrice';

import { BasketIcon } from '../common/SvgIcons/BasketIcon';

import style from './Header.module.css';
import { useEffect } from 'react';

export const BasketBox = () => {

  const {user} = UseUserContext();
  const {allProducts, setActiveProductType} = UseProductContext();
  const {fullPrice, setFullPrice, basket} = UseBasketContext();

  useEffect(() => {
    setFullPrice(useSetNewFullPrice(basket, allProducts));
  }, [basket]);

  return (
    <div className={style.basketBox}>
      <Link className={style.basketTop} to="/basket" onClick={() => setActiveProductType('')}>
        <BasketIcon className={style.basketIcon}/>
        <p className={style.basketTopText}>Koszyk</p>
        <p className={style.basketTopText}>{useConvertPriceToString(fullPrice)} zł</p>
      </Link>
      <div className={style.basketBottom}>
        <div className={style.basketBottomBox}>
          {user.role === 'user'
            ? <Link
              className={style.basketBottomText}
              to="/user/profile"
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
          {user.role === 'user'
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