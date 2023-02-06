import { Link } from 'react-router-dom';

import style from './HeaderNav.module.css';
import { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';

interface Props {
  setActiveMenu: (name: boolean) => void;
}

export const HeaderNavExtraMobileMenu = ({setActiveMenu}: Props) => {

  const {userRole, setUserRole} = useContext(AppContext);

  const logout = () => {
    setUserRole('');
    setActiveMenu(false);
  };

  return (
    <>
      <li className={style.navTopItemExtraMobile}>
        <Link
          className={style.navLink}
          to="/basket"
          onClick={() => setActiveMenu(false)}
        >koszyk
        </Link>
      </li>
      {userRole === 'user'
        ? <>
          <li className={style.navTopItemExtraMobile}>
            <Link
              className={style.navLink}
              to="/user/profile/data"
              onClick={() => setActiveMenu(false)}
            >panel klienta
            </Link>
          </li>
          <li className={style.navTopItemExtraMobile}>
            <Link
              className={style.navLink}
              to="/user/logout"
              onClick={logout}
            >wyloguj
            </Link>
          </li>
        </>
        : <>
          <li className={style.navTopItemExtraMobile}>
            <Link
              className={style.navLink}
              to="/user/register"
              onClick={() => setActiveMenu(false)}
            >rejestracja
            </Link>
          </li>
          <li className={style.navTopItemExtraMobile}>
            <Link
              className={style.navLink}
              to="/user/login"
              onClick={() => setActiveMenu(false)}
            >logowanie
            </Link>
          </li>
        </>
      }
    </>
  );
};
