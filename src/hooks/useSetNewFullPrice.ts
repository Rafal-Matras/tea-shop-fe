import {  BasketInterface, ProductsListInterface } from '../types';

export const useSetNewFullPrice = (basket: BasketInterface[], allProducts: ProductsListInterface[]) => {
  if (basket.length === 0) return 0;


  let fullPrice: number = 0;
  basket.forEach(async (item: BasketInterface) => {
    const price = allProducts.find(price => price.id === item.productId);
    if (price) {
      fullPrice = fullPrice + price.price * item.packSize * item.quantityOfProduct;
    }
  });
  return fullPrice;
};