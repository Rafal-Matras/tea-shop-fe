import { createContext, ReactNode, useContext, useState } from 'react';

import { BasketContextInterface, BasketInterface } from '../types';

import { defaultBasketContext } from '../assets/defaultContext';

interface Props {
  children: ReactNode;
}

const BasketContext = createContext<BasketContextInterface>(defaultBasketContext);

export const UseBasketContext = () => useContext(BasketContext);

export const BasketContextProvider = ({children}: Props) => {
  const [basket, setBasket] = useState<BasketInterface[]>([]);
  const [fullPrice, setFullPrice] = useState<number>(0);
  const [typeOfDelivery, setTypeOfDelivery] = useState<string>('');
  const [typeOfPayments, setTypeOfPayments] = useState<string>('');
  const [costOfDelivery, setCostOfDelivery] = useState<number>(0);

  const BasketContextObject = {
    basket,
    setBasket,
    fullPrice,
    setFullPrice,
    typeOfDelivery,
    setTypeOfDelivery,
    typeOfPayments,
    setTypeOfPayments,
    costOfDelivery,
    setCostOfDelivery,
  };

  return (
    <BasketContext.Provider value={BasketContextObject}>
      {children}
    </BasketContext.Provider>
  );
};