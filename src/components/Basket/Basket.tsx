import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { UseUserContext } from '../../context/UserContext';
import { UseProductContext } from '../../context/ProductContext';
import { UseBasketContext } from '../../context/BasketContext';

import { useSetNewFullPrice } from '../../hooks/useSetNewFullPrice';
import { useConvertPriceToString } from '../../hooks/useConvertPriceToString';

import { ArrowRightIcon } from '../common/SvgIcons/ArrowRightIcon';
import { Progress } from '../common/Progress/Progress';

import { DeliveryAndPayments } from './DeliveryAndPayments/DeliveryAndPayments';
import { ProductsInBasket } from './ProductsInBasket/ProductsInBasket';

import style from './Basket.module.css';

export const Basket = () => {

  const {user} = UseUserContext();
  const {allProducts} = UseProductContext()
  const {basket,fullPrice, setFullPrice} = UseBasketContext();
  const [formOfDelivery, setFormOfDelivery] = useState('Kurier GLS');
  const [formOfPayments, setFormOfPayments] = useState('Przelewy24.pl');
  const [deliveryCost, setDeliveryCost] = useState(8.99);
  const [flag, setFlag] = useState<boolean>(false);

  useEffect(() => {
    setFullPrice(useSetNewFullPrice(basket,allProducts));
  }, [flag]);

  useEffect(() => {
    formOfDelivery !== 'Paczkomaty 24/7' ? setDeliveryCost(8.99) : setDeliveryCost(9.99);
    formOfPayments === 'Za pobraniem' ? setDeliveryCost(12.99) : setDeliveryCost(deliveryCost => deliveryCost);
    if (fullPrice > 80) setDeliveryCost(0);
  }, [formOfDelivery, formOfPayments, fullPrice]);

  const handleFormOfDelivery = (name: string, value: string) => setFormOfDelivery(value);

  const handleFormOfPayments = (name: string, value: string) => setFormOfPayments(value);

  const handleNext = () => {

  };

  return (
    <div className={style.container}>
      <Progress
        name="Koszyk"
        progressNumber={1}
      />
      {basket.length > 0
        ? <ProductsInBasket
          flag={flag}
          setFlag={setFlag}
        />
        : <h1 className={style.emptyBasket}>Twój koszyk jest pusty</h1>
      }
      <DeliveryAndPayments
        formOfDelivery={formOfDelivery}
        setFormOfDelivery={handleFormOfDelivery}
        formOfPayments={formOfPayments}
        setFormOfPayments={handleFormOfPayments}
        deliveryCost={deliveryCost}
      />
      <div className={style.endBox}>
        <p
          className={style.fullPriceText}>razem: <span>{useConvertPriceToString(fullPrice + deliveryCost)} zł</span>
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