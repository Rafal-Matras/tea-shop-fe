import { UseBasketContext } from '../../context/BasketContext';

import { useConvertPriceToString } from '../../hooks/useConvertPriceToString';

import { OneProductInSummary } from './OneProductInSummary';

import style from './BasketSummary.module.css';

export const BasketSummaryProduct = () => {

  const {basket, fullPrice} = UseBasketContext();
  const {formOfDelivery, formOfPayments, deliveryCost} = UseBasketContext();

  return (
    <div className={style.sectionProducts}>
      <table className={style.table}>
        <thead>
        <tr className={style.titleProductSummaryContainer}>
          <th className={style.thImageAndName} colSpan={2}>Produkty</th>
          <th className={style.thProductSummaryQuantity}>Ilość</th>
          <th className={style.thProductSummaryUnitPrice}></th>
          <th className={style.thProductSummaryPrice}>Wartość</th>
        </tr>
        </thead>
        <tbody>
        {basket.map(item => (
          <OneProductInSummary
            key={item.id}
            basketItem={item}
          />
        ))}
        </tbody>
      </table>
      <div className={style.summaryBox}>
        <p className={style.timeDelivery}>Szaczowany czas wysyłki 24h</p>
        <p className={style.productsValue}>wartość produktów <span>{useConvertPriceToString(fullPrice)} zł</span></p>
      </div>
      <div className={style.summaryBox}>
        <div className={style.textBox}>
          <p className={style.deliveryAndPayment}>Forma dostawy</p>
          <p className={style.deliveryAndPaymentSpan}>{formOfDelivery}</p>
        </div>
        <div className={style.textBox}>
          <p className={style.deliveryAndPayment}>Forma płatności</p>
          <p className={style.deliveryAndPaymentSpan}>{formOfPayments}</p>
        </div>
        <div className={style.textBox}>
          <p className={style.deliveryAndPayment}>Koszt przesyłki</p>
          <p className={style.deliveryAndPaymentSpan}>{useConvertPriceToString(deliveryCost)} zł</p>
        </div>
      </div>
      <div className={style.summaryBox}>
        <p className={style.fullPrice}>razem <span>{useConvertPriceToString(fullPrice + deliveryCost)} zł</span></p>
      </div>
    </div>
  );
};
