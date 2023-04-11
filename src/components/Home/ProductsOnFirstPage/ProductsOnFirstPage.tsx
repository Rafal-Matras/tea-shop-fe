import { useEffect, useState } from 'react';

import { ProductsListInterface } from '../../../types';

import { OneProductInList } from '../../OneProductInList/OneProductInList';

import style from './ProductsOnFirstPage.module.css';

import { allProductsDefault } from '../../../assets/allProducts';
import { UseProductContext } from '../../../context/ProductContext';

export const ProductsOnFirstPage = () => {

  const {allProducts} = UseProductContext();
  const [products, setProducts] = useState<ProductsListInterface[]>([]);


  useEffect(() => {
    const data = allProducts.filter(item => item.onHomePage === 1);
    setProducts(data);
  }, []);

  return (
    <section className={style.container}>
      {products.map(item => <OneProductInList key={item.id} item={item}/>)}
    </section>
  );
};