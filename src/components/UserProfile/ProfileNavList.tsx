import { useNavigate } from 'react-router-dom';

import { ActivePageType } from '../../types';

import { UseUserContext } from '../../context/UserContext';

import { defaultUser } from '../../assets/defaultData';
import { config } from '../../config/config';

import style from './UserProfile.module.css';

interface Props {
  activePage: string;
  setActivePage: (name: ActivePageType) => void;
}

export const ProfileNavList = ({activePage, setActivePage}: Props) => {

  const {setUser} = UseUserContext();
  const navigate = useNavigate();

  const changeActivePage = (name: ActivePageType | null) => {
    if (name) {
      setActivePage(name);
    } else {
      setUser(defaultUser);
    }
    window.scrollTo(0, 0);
  };

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
      setUser(defaultUser);
      navigate('/user/logout');
      return {isSuccess: true};
    } catch (err) {
      throw new Error('New error message', {cause: err});
    }
  };

  return (
    <ul className={style.navList}>
      <li
        className={`${style.navItem} ${activePage === 'data' ? style.active : ''}`}
        onClick={() => changeActivePage('data')}
      >Moje dane
      </li>
      <li
        className={`${style.navItem} ${activePage === 'changePassword' ? style.active : ''}`}
        onClick={() => changeActivePage('changePassword')}
      >Zmień hasło
      </li>
      <li
        className={`${style.navItem} ${activePage === 'history' ? style.active : ''}`}
        onClick={() => changeActivePage('history')}
      >Historia zakupów
      </li>
      <button
        className={`${style.navItem} ${style.logout}`}
        onClick={logout}
      >Wyloguj
      </button>
    </ul>
  );
};