import { useEffect, useState } from 'react';

import { ProductsListInterface } from '../../types';

import { UseProductContext } from '../../context/ProductContext';

import { OneProductInList } from '../OneProductInList/OneProductInList';

import style from './Shop.module.css';

export const Shop = () => {

  const {allProducts, productType, productName} = UseProductContext();
  const [products, setProducts] = useState<ProductsListInterface[]>([]);
  console.log(productType);
  useEffect(() => {
    // (async () => {
    //   const response = await fetch(URL);
    //   const data = await response.json();
    //   setProducts(data);
    // })();

    if (productType) {
      if (productName === 'search') {
        const defaultProducts = allProducts.filter(item => item.name.toLowerCase().includes(productType.toLowerCase()));
        setProducts(defaultProducts);
      } else {
        const defaultProducts = allProducts.filter(item => item.type?.includes(productType));
        setProducts(defaultProducts);
      }
    } else {
      if (productName === 'promocje') {
        const defaultProducts = allProducts.filter(item => item.promo);
        setProducts(defaultProducts);
      } else if (productName === 'na prezent') {
        const defaultProducts = allProducts.filter(item => item.forGift);
        setProducts(defaultProducts);
      } else if (productName === 'nowości') {
        const defaultProducts = allProducts.filter(item => item.new);
        setProducts(defaultProducts);
      } else {
        const defaultProducts = allProducts.filter(item => item.category === productName);
        setProducts(defaultProducts);
      }
    }
  }, [productType, productName]);

  return (
    <div className={style.container}>
      <div className={style.productList}>
        {products.map(item => <OneProductInList key={item.id} item={item}/>)}
      </div>
      <div className={style.pagination}>
      </div>
    </div>
  );
};