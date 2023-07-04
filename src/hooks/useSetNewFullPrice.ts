import { BasketInterface } from '../types';

export const useSetNewFullPrice = async (basket: BasketInterface[]): Promise<number> => {

  if (basket.length < 1) return 0;

  return basket
    .map(item => ((+(item.product.price - item.product.price * item.product.promo).toFixed(2)) * 100 * item.packSize * item.count) / 100)
    .reduce((prev, curr) => prev + curr ,0)
};