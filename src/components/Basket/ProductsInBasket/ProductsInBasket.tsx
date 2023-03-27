import { useContext, useState } from 'react';

import { AddToBasket } from '../../../types';

import { AppContext } from '../../../context/AppContext';

import { useConvertPriceToString } from '../../../hooks/useConvertPriceToString';

import { OneProductInBasket } from './OneProductInBasket';

import style from './ProductsInBasket.module.css';

interface Props {
  basket: AddToBasket[];
  flag:boolean;
  setFlag:(flag:boolean)=>void;
}

export const ProductsInBasket = ({basket,flag,setFlag}: Props) => {

  const {fullPrice} = useContext(AppContext);

  return (
    <div className={style.container}>
      <div className={style.productList}>
        {basket.map((item, index) => (
          <OneProductInBasket
            key={index}
            index={index}
            basketItem={item}
            flag={flag}
            setFlag={setFlag}
          />
        ))}
      </div>
      <div className={style.info}>
        <p className={style.deliveryTime}>Szacowany czas wysyłki 24h</p>
        <p className={style.priceProducts}> wartość produktów <span>{useConvertPriceToString(fullPrice)} zł</span></p>
      </div>
    </div>
  );
};