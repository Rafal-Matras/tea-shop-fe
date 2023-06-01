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
  const [orderStart, setOrderStart] = useState<boolean>(false);
  const [selectedBasket, setSelectedBasket] = useState<'local' | 'server' | null>(null);
  const [formOfDelivery, setFormOfDelivery] = useState<string>('kurier GLS');
  const [formOfPayments, setFormOfPayments] = useState<string>('przelewy24.pl');
  const [deliveryCost, setDeliveryCost] = useState<number>(8.99);

  const BasketContextObject = {
    basket,
    setBasket,
    fullPrice,
    setFullPrice,
    orderStart,
    setOrderStart,
    formOfDelivery,
    setFormOfDelivery,
    formOfPayments,
    setFormOfPayments,
    deliveryCost,
    setDeliveryCost,
    selectedBasket,
    setSelectedBasket,
  };

  return (
    <BasketContext.Provider value={BasketContextObject}>
      {children}
    </BasketContext.Provider>
  );
};