import { AddToBasket } from '../types';
import { exemplaryProductInBasket } from '../assets/allProducts';

export const useSetNewFullPrice = (basket: AddToBasket[]) => {
  if (basket.length === 0) return 0;

  let fullPrice: number = 0;
  basket.forEach(async (item: AddToBasket) => {
      // const response = await fetch(URL);
      // const price = await response.json();
      const price = exemplaryProductInBasket.price
      fullPrice = fullPrice + +(Math.ceil((price * item.packSize * item.quantityOfProduct) * 100) / 100).toFixed(2);
  });
  return fullPrice
};