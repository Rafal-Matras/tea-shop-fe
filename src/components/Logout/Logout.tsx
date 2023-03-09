import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { AppContext } from '../../context/AppContext';

import style from './Logout.module.css';

export const Logout = () => {

  const {setUserRole} = useContext(AppContext);

  useEffect(() => {
    setUserRole('');
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