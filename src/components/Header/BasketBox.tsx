import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { UseUserContext } from '../../context/UserContext';
import { UseBasketContext } from '../../context/BasketContext';
import { UseProductContext } from '../../context/ProductContext';

import { useConvertPriceToString } from '../../hooks/useConvertPriceToString';
import { useSetNewFullPrice } from '../../hooks/useSetNewFullPrice';

import { config } from '../../config/config';

import { BasketIcon } from '../common/SvgIcons/BasketIcon';
import { defaultUser } from '../../assets/defaultData';

import style from './Header.module.css';

export const BasketBox = () => {

  const {user, setUser} = UseUserContext();
  const {setActiveProductType} = UseProductContext();
  const {fullPrice,setFullPrice, basket} = UseBasketContext();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setFullPrice(await useSetNewFullPrice(basket));
    })();
  }, [basket]);

  const handleClick = () => {
    setActiveProductType('');
    window.scrollTo(0, 0);
  };

  const logout = async () => {
    try {
      const response = await fetch(`${config.URL}auth/logout`, {
        credentials: 'include',
      });
      const data = await response.json();
      if (!data.logout) {
        navigate('/user/logout');
        return {isSuccess: false};
      }
      setUser(defaultUser);
      navigate('/user/logout');
      return {isSuccess: true};
    } catch (err) {
      throw new Error('New error message', {cause: err});
    }
  };

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
              onClick={handleClick}
            >panel klienta
            </Link>
            : <Link
              className={style.basketBottomText}
              to="/user/login"
              onClick={handleClick}
            >logowanie
            </Link>
          }
        </div>
        <div className={style.basketBottomBox}>
          {user.role === 'user'
            ? <button
              className={style.basketBottomText}
              onClick={logout}
            >wyloguj
            </button>
            : <Link
              className={style.basketBottomText}
              to="/user/register"
              onClick={handleClick}
            >rejestracja
            </Link>
          }
        </div>
      </div>
    </div>
  );
};