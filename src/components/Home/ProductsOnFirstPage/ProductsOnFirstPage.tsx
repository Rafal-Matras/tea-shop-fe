import { useEffect, useState } from 'react';

import { ProductsListInterface } from '../../../types';

import { config } from '../../../config/config';

import { OneProductInList } from '../../OneProductInList/OneProductInList';

import { Spinner } from '../../common/Spinner/Spinner';

import style from './ProductsOnFirstPage.module.css';

export const ProductsOnFirstPage = () => {

  const [products, setProducts] = useState<ProductsListInterface[]>([]);

  useEffect(() => {
    let maxOnPage: number = 0;
    if (window.screen.width < 576) {
      maxOnPage = 6;
    } else if (window.screen.width < 992) {
      maxOnPage = 9;
    } else if (window.screen.width < 1200) {
      maxOnPage = 12;
    } else {
      maxOnPage = 15;
    }
    (async () => {
      const response = await fetch(`${config.URL}shop/home-page/${maxOnPage}`);
      const data = await response.json();
      setProducts(data);
    })();
  }, []);

  return (
    <section className={style.container}>
      {products
        ? products.map(item => <OneProductInList key={item.id} item={item}/>)
        : <Spinner/>
      }
    </section>
  );
};