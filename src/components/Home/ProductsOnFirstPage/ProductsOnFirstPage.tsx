import { useEffect, useState } from 'react';

import { ProductsListInterface } from '../../../types';

import { OneProductInList } from '../../OneProductInList/OneProductInList';

import style from './ProductsOnFirstPage.module.css';

import {allProductsDefault} from '../../../assets/allProducts';

export const ProductsOnFirstPage = () => {


  const [products, setProducts] = useState<ProductsListInterface[]>([]);


  useEffect(() => {
    // (async ()=>{
    //   const response = await fetch(URL- firstPage);
    //   const data = await response.json();
    // })()


  const data = allProductsDefault;
    setProducts(data);
  }, []);

  return (
    <section className={style.container}>
      {products.map(item => <OneProductInList key={item.id} item={item}/>)}
    </section>
  );
};