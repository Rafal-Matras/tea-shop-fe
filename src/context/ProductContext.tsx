import { createContext, ReactNode, useContext, useState } from 'react';

import { ProductContextInterface} from '../types';

import { defaultProductContext } from '../assets/defaultContext';

interface Props {
  children: ReactNode;
}

const ProductContext = createContext<ProductContextInterface>(defaultProductContext);
export const UseProductContext = () => useContext(ProductContext);

export const ProductContextProvider = ({children}: Props) => {
  const [productName, setProductName] = useState<string>('');
  const [productType, setProductType] = useState<string>('');
  const [numberOfProducts, setNumberOfProducts] = useState<number>(0);
  const [activeProductType, setActiveProductType] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(0);

  const AppContextObject = {
    productName,
    setProductName,
    productType,
    setProductType,
    numberOfProducts,
    setNumberOfProducts,
    activeProductType,
    setActiveProductType,
    currentPage,
    setCurrentPage,
  };

  return (
    <ProductContext.Provider value={AppContextObject}>
      {children}
    </ProductContext.Provider>
  );
};