import { UseBasketContext } from '../../../context/BasketContext';
import { UseUserContext } from '../../../context/UserContext';

import { useConvertPriceToString } from '../../../hooks/useConvertPriceToString';

import { OneProductInBasket } from './OneProductInBasket';
import { config } from '../../../config/config';

import style from './ProductsInBasket.module.css';

export const ProductsInBasket = () => {

  const {user} = UseUserContext();
  const {basket, setBasket, fullPrice} = UseBasketContext();

  const removeAllBasket = async () => {
    if (user.role === 'user') {
      try {
        await fetch(`${config.URL}basket/all`, {
          method: 'DELETE',
          credentials: 'include',
        });
      } catch (err) {
        throw new Error('', {cause: err});
      }
    } else {
      localStorage.removeItem('basket');
    }
    setBasket([]);
  };

  return (
    <div className={style.container}>
      <div className={style.productList}>
        {basket.map((item, index) => (
          <OneProductInBasket
            key={index}
            index={index}
            basketItem={item}
          />
        ))}
      </div>
      <div className={style.removeBasketBox}>
        <button className={style.removeBasket} onClick={removeAllBasket}>usuń zawartość koszyka</button>
      </div>
      <div className={style.info}>
        <p className={style.deliveryTime}>Szacowany czas wysyłki 24h</p>
        <p className={style.priceProducts}> wartość produktów <span>{useConvertPriceToString(fullPrice)} zł</span></p>
      </div>
    </div>
  );
};