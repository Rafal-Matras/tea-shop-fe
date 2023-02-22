import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AppContext } from '../../../context/AppContext';

import style from './Item.module.css';

interface Props {
  onlyProductType: boolean;
  closeMenu: () => void;
}

export const MobileRestItems = ({onlyProductType, closeMenu}: Props) => {

  const {userRole, setUserRole} = useContext(AppContext);

  const logOut = () => {
    setUserRole('');
    closeMenu();
  };

  return (
    <>
      <li className={onlyProductType ? style.productItemDisable : style.productItem}>
        <Link
          className={style.productItemText}
          to="/basket"
          onClick={closeMenu}
        >koszyk
        </Link>
      </li>
      {userRole === 'user'
        ? <>
          <li className={onlyProductType ? style.productItemDisable : style.productItem}>
            <Link
              className={style.productItemText}
              to="/user/profile/data"
              onClick={closeMenu}
            >panel klienta
            </Link>
          </li>
          <li className={onlyProductType ? style.productItemDisable : style.productItem}>
            <Link
              className={style.productItemText}
              to="/user/logout"
              onClick={logOut}
            >wyloguj
            </Link>
          </li>
        </>
        : <>
          <li className={onlyProductType ? style.productItemDisable : style.productItem}>
            <Link
              className={style.productItemText}
              to="/user/register"
              onClick={closeMenu}
            >rejestracja
            </Link>
          </li>
          <li className={onlyProductType ? style.productItemDisable : style.productItem}>
            <Link
              className={style.productItemText}
              to="/user/login"
              onClick={closeMenu}
            >logowanie
            </Link>
          </li>
        </>
      }
    </>
  );
};