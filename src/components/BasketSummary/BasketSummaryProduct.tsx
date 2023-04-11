import { UseBasketContext } from '../../context/BasketContext';

import { useConvertPriceToString } from '../../hooks/useConvertPriceToString';

import { OneProductInSummary } from './OneProductInSummary';

import style from './BasketSummary.module.css';

export const BasketSummaryProduct = () => {

  const {basket, fullPrice} = UseBasketContext();

  return (
    <div className={style.sectionProducts}>
      <table className={style.table}>
          <tr className={style.titleProductSummaryContainer}>
            <th className={style.thImageAndName} colSpan={2}>Produkty</th>
            <th className={style.thProductSummaryQuantity}>Ilość</th>
            <th className={style.thProductSummaryUnitPrice}></th>
            <th className={style.thProductSummaryPrice}>Wartość</th>
          </tr>
        {basket.map(item => (
          <OneProductInSummary
            key={item.id}
            basketItem={item}
          />
        ))}
      </table>
      <div className={style.summaryBox}>
        <p className={style.timeDelivery}>Szaczowany czas wysyłki 24h</p>
        <p className={style.productsValue}>wartość produktów <span>{useConvertPriceToString(fullPrice)} zł</span></p>
      </div>
      <div className={style.summaryBox}>
        <div className={style.textBox}>
          <p className={style.deliveryAndPayment}>Forma dostawy</p>
          <p className={style.deliveryAndPaymentSpan}></p>
        </div>
        <div className={style.textBox}>
          <p className={style.deliveryAndPayment}>Forma płatności</p>
          <p className={style.deliveryAndPaymentSpan}></p>
        </div>
        <div className={style.textBox}>
          <p className={style.deliveryAndPayment}>Koszt przesyłki</p>
          <p className={style.deliveryAndPaymentSpan}>{useConvertPriceToString(0)} zł</p>
        </div>
      </div>
      <div className={style.summaryBox}>
        <p className={style.fullPrice}>razem <span>{useConvertPriceToString(fullPrice)} zł</span></p>
      </div>
    </div>
  );
};
