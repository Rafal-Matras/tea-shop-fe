export const useConvertPriceToString = (price: number): string => {

  let priceToString = price.toFixed(2).toString();

  if (!priceToString.includes('.')) {
    priceToString += '.00';
  }
  const correctPrice = priceToString.split('.');

  return `${correctPrice[0]},${correctPrice[1].length === 1 ? `${correctPrice[1]}0` : correctPrice[1]}`;
};