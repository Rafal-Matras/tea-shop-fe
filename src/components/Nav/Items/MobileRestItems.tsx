import { Link, useNavigate } from 'react-router-dom';

import { UseUserContext } from '../../../context/UserContext';

import { config } from '../../../config/config';

import { defaultUser } from '../../../assets/defaultData';

import style from './Item.module.css';

interface Props {
  onlyProductType: boolean;
  closeMenu: () => void;
}

export const MobileRestItems = ({onlyProductType, closeMenu}: Props) => {

  const {user, setUser} = UseUserContext();
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const response = await fetch(`${config.URL}auth/logout`, {
        credentials: 'include',
      });
      const data = await response.json();
      console.log(data);
      if (!data.logout) {
        navigate('/user/logout');
        return {isSuccess: false};
      }
      closeMenu();
      setUser(defaultUser);
      navigate('/user/logout');
      return {isSuccess: true};
    } catch (err) {
      throw new Error('New error message', {cause: err});
    }
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
      {user.role === 'User'
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
              onClick={logout}
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