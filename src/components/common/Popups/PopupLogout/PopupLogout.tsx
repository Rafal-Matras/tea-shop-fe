import { Link } from 'react-router-dom';

import style from './PopupLogout.module.css';
import { useEffect } from 'react';
import { UseBasketContext } from '../../../../context/BasketContext';

interface Props {
  isSuccess: boolean;
  setActivePopup: (active: boolean) => void;
}

export const PopupLogout = ({isSuccess, setActivePopup}: Props) => {

  const {setBasket, setSelectedBasket} = UseBasketContext();

  useEffect(() => {
    setSelectedBasket(null);
    if (localStorage.getItem('basket')) {
      setBasket(JSON.parse(localStorage.getItem('basket') || ''));
    } else {
      setBasket([]);
    }
  }, []);

  return (
    <div className={style.container}>
      <div className={style.box}>
        <div className={style.title}></div>
        {isSuccess
          ? <>
            <h1 className={style.text}>
              Zostałeś pomyślnie wylogowany<br/>
              kliknij Przycisk aby wrócić do strony startowej
            </h1>
            <Link className={style.button} to="/" onClick={() => setActivePopup(false)}>Strona startowa</Link>
          </>
          : <>
            <h1 className={style.text}>
              Nadal jesteś zalogowany <br/>
              sprubuj jeszcze raz
            </h1>
            <button className={style.button} onClick={() => setActivePopup(false)}>Powrót</button>
          </>
        }
      </div>
    </div>
  );
};
