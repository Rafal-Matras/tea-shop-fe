import { useEffect, useState } from 'react';

import { ProductsListInterface } from '../../types';

import { UseProductContext } from '../../context/ProductContext';

import { OneProductInList } from '../OneProductInList/OneProductInList';

import style from './Shop.module.css';
import { config } from '../../config/config';
import { Spinner } from '../common/Spinner/Spinner';
import { Pagination } from '../common/Pagination/Pagination';

export const Shop = () => {

  const {currentPage, setCurrentPage} = UseProductContext();
  const {productType, productName} = UseProductContext();
  const [products, setProducts] = useState<ProductsListInterface[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  let maxOnPage: number = 0;

  if (window.screen.width < 576) {
    maxOnPage = 12;
  } else if (window.screen.width < 992) {
    maxOnPage = 18;
  } else if (window.screen.width < 1200) {
    maxOnPage = 24;
  } else {
    maxOnPage = 30;
  }

  useEffect(() => {
    (async () => {
      if (productName === 'na prezent') {
        const response = await fetch(`${config.URL}shop/na_prezent/${currentPage}/${maxOnPage}`);
        const data = await response.json();
        setProducts(data.products);
        setCount(data.count);
        setTotalPages(data.totalPages);
      } else if (productName === 'promocje') {
        const response = await fetch(`${config.URL}shop/promocje/${currentPage}/${maxOnPage}`);
        const data = await response.json();
        setProducts(data.products);
        setCount(data.count);
        setTotalPages(data.totalPages);
      } else if (productName === 'nowości') {
        const response = await fetch(`${config.URL}shop/new/${currentPage}/${maxOnPage}`);
        const data = await response.json();
        setProducts(data.products);
        setCount(data.count);
        setTotalPages(data.totalPages);
      } else if (productName !== '' && productType === '') {
        const response = await fetch(`${config.URL}shop/${productName}/${currentPage}/${maxOnPage}`);
        const data = await response.json();
        setProducts(data.products);
        setCount(data.count);
        setTotalPages(data.totalPages);
      } else if (productName !== '' && productType !== '') {
        const response = await fetch(`${config.URL}shop/${productName}/${currentPage}/${maxOnPage}/${productType}`);
        const data = await response.json();
        setProducts(data.products);
        setCount(data.count);
        setTotalPages(data.totalPages);
      } else {
        const response = await fetch(`${config.URL}shop/all/${currentPage}/${maxOnPage}`);
        const data = await response.json();
        setProducts(data.products);
        setCount(data.count);
        setTotalPages(data.totalPages);
      }
    })();
  }, [productType, productName, currentPage]);

  const handleCurrentPage = (page: number) => {
    setCurrentPage(page);
    window.scroll(0, 0);
  };

  return (
    products.length > 0
      ? <div className={style.container}>
        <div className={style.productList}>
          {products.map(item => <OneProductInList key={item.id} item={item}/>)}
        </div>
        {
          count > maxOnPage
            ? <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={handleCurrentPage}
            />
            : null
        }
      </div>
      : <Spinner/>
  );
};