import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../context/UserContext';

import style from './UserProfile.module.css';

import { defaultUser } from '../../assets/defaultData';
import { ActivePageInterface } from '../../types';

interface Props {
  activePage: string;
  setActivePage: (name: ActivePageInterface) => void;
}

export const ProfileNavList = ({activePage, setActivePage}: Props) => {

  const {setUser} = useContext(UserContext);

  const changeActivePage = (name: ActivePageInterface | null) => {
    if (name) {
      setActivePage(name);
    } else {
      setUser(defaultUser);
    }
    window.scrollTo(0, 0);
  };

  return (
    <ul className={style.navList}>
      <li
        className={`${style.navItem} ${activePage === 'data' ? style.active : ''}`}
        onClick={() => changeActivePage('data')}
      >Moje dane
      </li>
      <li
        className={`${style.navItem} ${activePage === 'password' ? style.active : ''}`}
        onClick={() => changeActivePage('password')}
      >Zmień hasło
      </li>
      <li
        className={`${style.navItem} ${activePage === 'history' ? style.active : ''}`}
        onClick={() => changeActivePage('history')}
      >Historia zakupów
      </li>
      <Link
        className={`${style.navItem} ${style.logout}`}
        to="/user/logout"
        onClick={() => changeActivePage(null)}
      >Wyloguj
      </Link>
    </ul>
  );
};