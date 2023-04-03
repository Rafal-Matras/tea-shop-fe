import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useSetNewFullPrice } from '../../hooks/useSetNewFullPrice';

import { UserContext } from '../../context/UserContext';
import { AppContext } from '../../context/AppContext';

import { Progress } from '../common/Progress/Progress';
import { DeliveryAndPayments } from './DeliveryAndPayments/DeliveryAndPayments';
import { useConvertPriceToString } from '../../hooks/useConvertPriceToString';
import { ProductsInBasket } from './ProductsInBasket/ProductsInBasket';
import { ArrowRightIcon } from '../common/SvgIcons/ArrowRightIcon';

import style from './Basket.module.css';

export const Basket = () => {

  const {user} = useContext(UserContext);
  const {basket,fullPrice, setFullPrice} = useContext(AppContext);
  const [formOfDelivery, setFormOfDelivery] = useState('Kurier GLS');
  const [formOfPayments, setFormOfPayments] = useState('Przelewy24.pl');
  const [deliveryCost, setDeliveryCost] = useState(8.99);
  const [flag, setFlag] = useState<boolean>(false);

  useEffect(() => {
    setFullPrice(useSetNewFullPrice(basket));
  }, [flag]);

  console.log('basket',basket);
  useEffect(() => {
    formOfDelivery !== 'Paczkomaty 24/7' ? setDeliveryCost(8.99) : setDeliveryCost(9.99);
    formOfPayments === 'Za pobraniem' ? setDeliveryCost(12.99) : setDeliveryCost(deliveryCost => deliveryCost);
    if (fullPrice > 80) setDeliveryCost(0);
  }, [formOfDelivery, formOfPayments, fullPrice]);

  const handleFormOfDelivery = (name: string, value: string) => setFormOfDelivery(value);
  const handleFormOfPayments = (name: string, value: string) => setFormOfPayments(value);

  const handleNext = () => {
    if (deliveryCost !== 0) setFullPrice(fullPrice + deliveryCost);
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
          className={style.fullPriceText}>razem: <span>{useConvertPriceToString(+(Math.ceil((fullPrice + deliveryCost) * 100) / 100).toFixed(2))} zł</span>
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