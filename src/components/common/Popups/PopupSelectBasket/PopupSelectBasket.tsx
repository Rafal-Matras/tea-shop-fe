import { BasketInterface } from '../../../../types';

import { useConvertPriceToString } from '../../../../hooks/useConvertPriceToString';
import { UseBasketContext } from '../../../../context/BasketContext';

import style from './PopupSelectBasket.module.css';

interface Props {
  setActivePopup: (boolean: boolean) => void;
  temporaryUserBasket: BasketInterface[];
}

export const PopupSelectBasket = ({setActivePopup, temporaryUserBasket}: Props) => {

  const {setBasket, setSelectedBasket} = UseBasketContext();
  const localBasket: BasketInterface[] = JSON.parse(localStorage.getItem('basket') || '');

  const choiceBasket = (basket: BasketInterface[], selected: 'local' | 'server') => {
    setBasket(basket);
    setSelectedBasket(selected);
    setActivePopup(false);
  };

  return (
    <div className={style.container}>
      <div className={style.infoBox}>
        <h1 className={style.title}>Istnieją dwa koszyki</h1>
        <h2 className={style.titleSecond}>wybierz który chcesz używać</h2>
        <div className={style.basketsBox}>
          <div className={style.basket}>
            <h2 className={style.basketTitle}>Koszyk na serwerze</h2>
            <table className={style.basketList}>
              <tbody>
              {temporaryUserBasket.map((item, index) => (
                <tr className={style.basketItems} key={item.id}>
                  <td>{index + 1}.</td>
                  <td>{item.product.name}</td>
                  <td>{item.count * item.packSize * item.product.numberOfUnits}/{item.product.unit}</td>
                  <td>{useConvertPriceToString((item.product.price * 100 * item.packSize * item.count) / 100)} zł</td>
                </tr>
              ))}
              </tbody>
            </table>
            <button className={style.buttonMobile} onClick={() => choiceBasket(temporaryUserBasket, 'server')}>Wybierz</button>
          </div>
          <div className={style.basket}>
            <h2 className={style.basketTitle}>Koszyk lokalny</h2>
            <table className={style.basketList}>
              <tbody>
              {localBasket.map((item, index) => (
                <tr className={style.basketItems} key={item.id}>
                  <td>{index + 1}.</td>
                  <td>{item.product.name}</td>
                  <td>{item.count * item.packSize * item.product.numberOfUnits}/{item.product.unit}</td>
                  <td>{useConvertPriceToString((item.product.price * 100 * item.packSize * item.count) / 100)} zł</td>
                </tr>
              ))}
              </tbody>
            </table>
            <button className={style.buttonMobile} onClick={() => choiceBasket(localBasket,'local')}>Wybierz</button>
          </div>
        </div>
        <div className={style.buttonBox}>
          <button className={style.button} onClick={() => choiceBasket(temporaryUserBasket,'server')}>Wybierz</button>
          <button className={style.button} onClick={() => choiceBasket(localBasket,'local')}>Wybierz</button>
        </div>
      </div>
    </div>
  );
};