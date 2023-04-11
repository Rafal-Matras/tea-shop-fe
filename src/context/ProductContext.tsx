import { createContext, ReactNode, useContext, useState } from 'react';

import { ProductContextInterface, ProductsListInterface } from '../types';

import { defaultProductContext } from '../assets/defaultContext';

interface Props {
  children: ReactNode;
}

const ProductContext = createContext<ProductContextInterface>(defaultProductContext);
export const UseProductContext = () => useContext(ProductContext);

export const ProductContextProvider = ({children}: Props) => {
  const [allProducts, setAllProducts] = useState<ProductsListInterface[]>([]);
  const [productName, setProductName] = useState<string>('');
  const [productType, setProductType] = useState<string>('');
  const [numberOfProducts, setNumberOfProducts] = useState<number>(0);
  const [activeProductType, setActiveProductType] = useState<string>('');

  const AppContextObject = {
    allProducts,
    setAllProducts,
    productName,
    setProductName,
    productType,
    setProductType,
    numberOfProducts,
    setNumberOfProducts,
    activeProductType,
    setActiveProductType,
  };

  return (
    <ProductContext.Provider value={AppContextObject}>
      {children}
    </ProductContext.Provider>
  );
};