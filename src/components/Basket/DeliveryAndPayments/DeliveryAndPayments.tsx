import { useConvertPriceToString } from '../../../hooks/useConvertPriceToString';

import { Delivery } from './Delivery';
import { Payments } from './Payments';

import style from './DeliveryAndPayments.module.css';

interface Props {
  formOfDelivery: string;
  setFormOfDelivery: (name: string,value:string) => void;
  formOfPayments: string;
  setFormOfPayments: (name: string,value:string) => void;
  deliveryCost: number;
}

export const DeliveryAndPayments = ({formOfDelivery, setFormOfDelivery, formOfPayments, setFormOfPayments, deliveryCost,}: Props) => {

  return (
    <div className={style.container}>
      <Delivery formOfDelivery={formOfDelivery} setFormOfDelivery={setFormOfDelivery}/>
      <Payments formOfPayments={formOfPayments} setFormOfPayments={setFormOfPayments}/>
      <div className={style.deliveryPrice}>
        <h2 className={style.deliveryCostTitle}>Koszt przesyłki</h2>
        <p className={style.deliveryCostText}>{useConvertPriceToString(deliveryCost)} zł</p>
      </div>
    </div>
  );
};