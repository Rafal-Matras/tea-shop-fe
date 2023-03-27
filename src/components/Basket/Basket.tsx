import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { AddToBasket } from '../../types';

import { useSetNewFullPrice } from '../../hooks/useSetNewFullPrice';

import { UserContext } from '../../context/UserContext';
import { AppContext } from '../../context/AppContext';

import { Progress } from './Progress/Progress';
import { DeliveryAndPayments } from './DeliveryAndPayments/DeliveryAndPayments';
import { useConvertPriceToString } from '../../hooks/useConvertPriceToString';
import { ProductsInBasket } from './ProductsInBasket/ProductsInBasket';

import style from './Basket.module.css';
import { ArrowRightIcon } from '../common/SvgIcons/ArrowRightIcon';

export const Basket = () => {

  const {user} = useContext(UserContext);
  const {fullPrice, setFullPrice} = useContext(AppContext);
  const [basket, setBasket] = useState<AddToBasket[]>([]);
  const [formOfDelivery, setFormOfDelivery] = useState('Kurier GLS');
  const [formOfPayments, setFormOfPayments] = useState('Przelewy24.pl');
  const [deliveryCost, setDeliveryCost] = useState(8.99);
  const [flag, setFlag] = useState<boolean>(false);

  useEffect(() => {
    if (user.role === 'user') {

    } else {
      if (localStorage.getItem('basket')) {
        const data = JSON.parse(localStorage.getItem('basket') || '');
        setBasket(data);
      }
    }
  }, [flag]);

  useEffect(() => {
    setFullPrice(useSetNewFullPrice(basket));
  }, [basket]);


  useEffect(() => {
    formOfDelivery !== 'Paczkomaty 24/7' ? setDeliveryCost(8.99) : setDeliveryCost(9.99);
    formOfPayments === 'Za pobraniem' ? setDeliveryCost(12.99) : setDeliveryCost(deliveryCost => deliveryCost);
    if (fullPrice > 80) setDeliveryCost(0);
  }, [formOfDelivery, formOfPayments, fullPrice]);

  return (
    <div className={style.container}>
      <Progress
        name="Koszyk"
        progressNumber={1}
      />
      {basket.length > 0
        ? <ProductsInBasket
          basket={basket}
          flag={flag}
          setFlag={setFlag}
        />
        : <h1 className={style.emptyBasket}>Twój koszyk jest pusty</h1>
      }
      <DeliveryAndPayments
        formOfDelivery={formOfDelivery}
        setFormOfDelivery={setFormOfDelivery}
        formOfPayments={formOfPayments}
        setFormOfPayments={setFormOfPayments}
        deliveryCost={deliveryCost}
      />
      <div className={style.endBox}>
        <p
          className={style.fullPriceText}>razem: <span>{useConvertPriceToString(+(Math.ceil((fullPrice + deliveryCost) * 100) / 100).toFixed(2))} zł</span>
        </p>
        <Link
          className={style.button}
          to="/basket/data"
        >złóż zamówienie <ArrowRightIcon className={style.ArrowRightIcon}/>
        </Link>
      </div>
    </div>
  );
};