import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../../context/UserContext';

import { defaultUser } from '../../../assets/defaultData';

import style from './Item.module.css';

interface Props {
  onlyProductType: boolean;
  closeMenu: () => void;
}

export const MobileRestItems = ({onlyProductType, closeMenu}: Props) => {

  const {user, setUser} = useContext(UserContext);

  const logOut = () => {
    setUser(defaultUser);
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
      {user.role === 'user'
        ? <>
          <li className={onlyProductType ? style.productItemDisable : style.productItem}>
            <Link
              className={style.productItemText}
              to="/user/profile"
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