import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { UseUserContext } from '../../context/UserContext';

import style from './Logout.module.css';

import {defaultUser} from '../../assets/defaultData'

export const Logout = () => {

  const {setUser} = UseUserContext();

  useEffect(() => {
    setUser(defaultUser);
  }, []);

  return (
    <div className={style.container}>
      <h1 className={style.title}>Zostałeś pomyślnie wylogowany<br/>
        kliknij Przycisk aby wrócić do strony startowej
      </h1>
      <Link className={style.button} to="/">Strona startowa</Link>
    </div>
  );
};