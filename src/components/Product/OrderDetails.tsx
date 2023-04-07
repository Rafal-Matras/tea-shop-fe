import { useContext, useEffect, useState } from 'react';
import * as uuid from 'uuid';

import { AddToBasket } from '../../types';

import { AppContext } from '../../context/AppContext';
import { UserContext } from '../../context/UserContext';

import { AvailableProduct } from '../common/AvailableProduct/AvailableProduct';
import { PackSizeDropdownMenu } from '../common/PackSizeDropdownMenu/PackSizeDropdownMenu';
import { ChangeQuantityBox } from '../common/ChangeQuantityBox/ChangeQuantityBox';

import { BasketIcon } from '../common/SvgIcons/BasketIcon';

import style from './Product.module.css';

interface Props {
  id: string;
  numberOfUnits: number;
  price: number;
  packSize: number;
  setPackSize: (number: number) => void;
  quantityOfProduct: number;
  setQuantityOfProducts: (number: number) => void;
  unit: 'g' | 'szt';
  state: number;
  setAddToBasket: (name: boolean) => void;
}

export const OrderDetails = ({id, numberOfUnits, price, packSize, setPackSize, quantityOfProduct, setQuantityOfProducts, unit, state, setAddToBasket,}: Props) => {

  const {basket, setBasket, fullPrice, setFullPrice} = useContext(AppContext);
  const {user} = useContext(UserContext);
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    setValue((numberOfUnits * packSize * quantityOfProduct).toString());
  }, [quantityOfProduct, packSize]);

  const changePackSize = (number: number) => {
    setPackSize(number);
    setQuantityOfProducts(1);
  };

  const addToBasket = async () => {
    const newProductInBasket: AddToBasket = {
      id: uuid.v4(),
      userId: user.id,
      productId: id,
      quantityOfProduct: quantityOfProduct,
      packSize: packSize,
    };
    const newBasket = basket.length === 0 ? [newProductInBasket] : [...basket, newProductInBasket];
    //server
    if (user.role === 'user') {
      // const response = await fetch(URL, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(newBasket),
      // });

    }
    //localStore
    if (localStorage.getItem('basket')) {
      localStorage.setItem('basket', JSON.stringify(newBasket));
    } else {
      localStorage.setItem('basket', JSON.stringify(newBasket));
    }
    setBasket(newBasket);
    const newFullPrice = +(fullPrice + Math.ceil((price * packSize * quantityOfProduct) * 100) / 100).toFixed(2);
    setFullPrice(newFullPrice);
    setAddToBasket(true);
  };

  return (
    <div className={style.orderDetailsBox}>
      {unit === 'g'
        ? <PackSizeDropdownMenu
          packSize={packSize}
          numberOfUnits={numberOfUnits}
          changePackSize={changePackSize}
        />
        : null
      }
      <ChangeQuantityBox
        numberOfUnits={numberOfUnits}
        packSize={packSize}
        unit={unit}
        state={state}
        quantityOfProduct={quantityOfProduct}
        setQuantityOfProducts={setQuantityOfProducts}
        value={value}
        setValue={setValue}
      />
      <AvailableProduct
        unit={unit}
        state={state}
        orderState={state - numberOfUnits * packSize * quantityOfProduct}
      />
      <button
        className={style.orderDetailButton}
        onClick={addToBasket}
      ><BasketIcon className={style.basketIcon}/> dodaj do koszyka
      </button>
    </div>
  );
};