import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { UseBasketContext } from '../../context/BasketContext';

import { useConvertPriceToString } from '../../hooks/useConvertPriceToString';

import { ArrowRightIcon } from '../common/SvgIcons/ArrowRightIcon';
import { Progress } from '../common/Progress/Progress';

import { DeliveryAndPayments } from './DeliveryAndPayments/DeliveryAndPayments';
import { ProductsInBasket } from './ProductsInBasket/ProductsInBasket';

import style from './Basket.module.css';

export const Basket = () => {

  const navigate = useNavigate();
  const {
    basket,
    fullPrice,
    setFormOfDelivery,
    setFormOfPayments,
    setDeliveryCost,
    selectedBasket,
    setSelectedBasket,
  } = UseBasketContext();
  const [formOfDeliveryData, setFormOfDeliveryData] = useState('kurier GLS');
  const [formOfPaymentsData, setFormOfPaymentsData] = useState('przelewy24.pl');
  const [deliveryCostData, setDeliveryCostData] = useState(8.99);

  useEffect(() => {
    formOfDeliveryData === 'paczkomat Inpost' ? setDeliveryCostData(9.99) : setDeliveryCostData(8.99);
    formOfPaymentsData === 'za pobraniem' ? setDeliveryCostData(12.99) : setDeliveryCostData(deliveryCostData => deliveryCostData);
    if (fullPrice > 80) setDeliveryCostData(0);
  }, [formOfDeliveryData, formOfPaymentsData, fullPrice]);

  const handleFormOfDelivery = (name: string, value: string |number) => {
    if (typeof value === 'string')setFormOfDeliveryData(value)
  };

  const handleFormOfPayments = (name: string, value: string | number) => {
    if (typeof value === 'string')setFormOfPaymentsData(value)
  };

  const handleNext = () => {
    if (!selectedBasket) setSelectedBasket('local');
    setFormOfDelivery(formOfDeliveryData);
    setFormOfPayments(formOfPaymentsData);
    setDeliveryCost(deliveryCostData);
    navigate('/basket/data');
    window.scrollTo(0, 0);
  };

  return (
    <div className={style.container}>
      <Progress
        name="Koszyk"
        progressNumber={1}
      />
      {basket.length > 0
        ? <ProductsInBasket/>
        : <h1 className={style.emptyBasket}>Twój koszyk jest pusty</h1>
      }
      <DeliveryAndPayments
        formOfDelivery={formOfDeliveryData}
        setFormOfDelivery={handleFormOfDelivery}
        formOfPayments={formOfPaymentsData}
        setFormOfPayments={handleFormOfPayments}
        deliveryCost={deliveryCostData}
      />
      <div className={style.endBox}>
        <p
          className={style.fullPriceText}>razem: <span>{useConvertPriceToString(fullPrice + deliveryCostData)} zł</span>
        </p>
        {basket.length > 0
          ? <Link
            className={style.button}
            to="/basket/data"
            onClick={handleNext}
          >złóż zamówienie <ArrowRightIcon className={style.ArrowRightIcon}/>
          </Link>
          : null
        }
      </div>
    </div>
  );
};