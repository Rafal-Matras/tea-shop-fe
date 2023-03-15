import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../context/UserContext';

import style from './Logout.module.css';

import {defaultUser} from '../../assets/defaultData'

export const Logout = () => {

  const {setUser} = useContext(UserContext);

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