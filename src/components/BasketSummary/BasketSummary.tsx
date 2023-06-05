import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { SendOrderInterface } from '../../types';

import { UseUserContext } from '../../context/UserContext';
import { UseBasketContext } from '../../context/BasketContext';

import { config } from '../../config/config';

import { BasketSummaryUserData } from './BasketSummaryUserData';
import { BasketSummaryProduct } from './BasketSummaryProduct';
import { Progress } from '../common/Progress/Progress';
import { BackAndNextButtons } from '../common/BackAndNextButtons/BackAndNextButtons';

import style from './BasketSummary.module.css';

export const BasketSummary = () => {

  const navigate = useNavigate();
  const {user} = UseUserContext();
  const {basket, setBasket, fullPrice, selectedBasket, setSelectedBasket, formOfDelivery} = UseBasketContext();
  const [errorMessage, setErrorMessage] = useState<boolean>(false);

  const handleNext = async () => {
    console.log('summary---------------');
    const orderList = basket.map(item => ({
      image: item.product.image,
      productName: item.product.name,
      productType: item.product.type,
      count: item.count * item.packSize * item.product.numberOfUnits,
      unit: item.product.unit,
      price: item.product.price * item.count * item.packSize,
    }));

    const sendData: SendOrderInterface = {
      price: fullPrice,
      formOfDelivery: formOfDelivery,
      userId: user.id ?? null,
      orderList: JSON.stringify(orderList),
      email: user.email,
      documentType: user.documentType,
      name: user.name,
      surName: user.surName,
      companyName: user.companyName,
      nip: user.nip,
      street: user.street,
      flatNumber: user.flatNumber,
      postCode: user.postCode,
      city: user.city,
      phone: user.phone,
      otherDeliveryAddress: user.otherDeliveryAddress,
      deliveryName: user.delivery.deliveryName,
      deliverySurName: user.delivery.deliverySurName,
      deliveryCompanyName: user.delivery.deliveryCompanyName,
      deliveryStreet: user.delivery.deliveryStreet,
      deliveryFlatNumber: user.delivery.deliveryFlatNumber,
      deliveryPostCode: user.delivery.deliveryPostCode,
      deliveryCity: user.delivery.deliveryCity,
    };

    try {
      const response = await fetch(`http://localhost:3000/order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sendData),
      });

      if (!response.ok) {
        setErrorMessage(true);
        return;
      }
      if (selectedBasket === 'server') {
        const response = await fetch(`${config.URL}basket/all`, {
          method: 'DELETE',
          credentials: 'include',
        });
        if (!response.ok) {
          setErrorMessage(true);
          return;
        }
        setErrorMessage(false);
      }
      localStorage.removeItem('basket');
      setSelectedBasket(null);
      setBasket([]);
      navigate('/basket/done');
      window.scrollTo(0, 0);
    } catch (err) {
      throw new Error('', {cause: err});
    }
  };

  const handleBack = () => {
    navigate(-1);
    window.scrollTo(0, 0);
  };

  return (
    <div className={style.container}>
      <Progress
        name="Podsumowanie"
        progressNumber={3}
      />
      <h1 className={style.title}>Prosimy o sprawdzenie poprawności danych oraz zamówienia</h1>
      <BasketSummaryUserData/>
      <BasketSummaryProduct/>
      <p className={errorMessage ? style.errorMessageOn : style.errorMessageOff}>coś poszło nie tak spróbuj ponownie</p>
      <BackAndNextButtons
        textNext="zamawiam"
        textBack={window.screen.width < 500 ? 'popraw' : 'popraw dane'}
        handleBack={handleBack}
        handleNext={handleNext}
      />
    </div>
  );
};