import { Link } from 'react-router-dom';

import style from './Logout.module.css';
import { useEffect } from 'react';
import { UseBasketContext } from '../../context/BasketContext';

interface Props {
  isSuccess: boolean;
}

export const Logout = ({isSuccess}: Props) => {

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
      {isSuccess
        ? <h1 className={style.title}>Nadal jesteś zalogowany <br/>sprubuj jeszcze raz
        </h1>
        : <>
          <h1 className={style.title}>Zostałeś pomyślnie wylogowany<br/>
            kliknij Przycisk aby wrócić do strony startowej
          </h1>
          <Link className={style.button} to="/">Strona startowa</Link>
        </>
      }
    </div>
  );
};