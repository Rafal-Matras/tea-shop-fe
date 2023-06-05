import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { ProductInterface } from '../../types';

import { UseUserContext } from '../../context/UserContext';
import { UseBasketContext } from '../../context/BasketContext';

import { AvailableProduct } from '../common/AvailableProduct/AvailableProduct';
import { PackSizeDropdownMenu } from '../common/PackSizeDropdownMenu/PackSizeDropdownMenu';
import { ChangeQuantityBox } from '../common/ChangeQuantityBox/ChangeQuantityBox';
import { BasketIcon } from '../common/SvgIcons/BasketIcon';

import style from './Product.module.css';
import { config } from '../../config/config';
import { useSetNewFullPrice } from '../../hooks/useSetNewFullPrice';

interface Props {
  id: string;
  numberOfUnits: number;
  packSize: number;
  setPackSize: (number: number) => void;
  count: number;
  setCount: (number: number) => void;
  unit: 'g' | 'szt';
  state: number;
  setAddedToBasket: (name: boolean) => void;
}

export const OrderDetails = ({
                               id,
                               numberOfUnits,
                               packSize,
                               setPackSize,
                               count,
                               setCount,
                               unit,
                               state,
                               setAddedToBasket,
                             }: Props) => {


  const {user} = UseUserContext();
  const {basket, setBasket, setFullPrice} = UseBasketContext();
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    setValue((numberOfUnits * packSize * count).toString());
  }, [count, packSize]);

  const changePackSize = (number: number) => {
    setPackSize(number);
    setCount(1);
  };

  const findProduct = async () => {
    try {
      const response = await fetch(`${config.URL}shop/product/${id}`);
      return await response.json();
    } catch (err) {
      throw new Error('New error message', {cause: err});
    }
  };

  const addToBasket = async () => {

    if (user.role === 'user') {
      try {
        const response = await fetch(`${config.URL}basket`, {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            count,
            packSize,
            productId: id,
          }),
        });
        const data = await response.json();
        const newProductBasket = {
          id: data.id,
          count,
          packSize,
          product: await findProduct(),
        };
        const newBasket = [...basket, newProductBasket];
        setBasket(newBasket);
      } catch (err) {
        throw new Error('New error message', {cause: err});
      }
    } else {
      const newProductBasket = {
        id: uuid(),
        count,
        packSize,
        product: await findProduct(),
      };
      const newBasket = [...basket, newProductBasket];
      setBasket(newBasket);
      if (localStorage.getItem('basket')) {
        localStorage.setItem('basket', JSON.stringify(newBasket));
      } else {
        localStorage.setItem('basket', JSON.stringify([newProductBasket]));
      }
    }
    setFullPrice(await useSetNewFullPrice(basket));
    setAddedToBasket(true);
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
        count={count}
        setCount={setCount}
        value={value}
        setValue={setValue}
      />
      <AvailableProduct
        unit={unit}
        state={state}
        orderState={state - numberOfUnits * packSize * count}
      />
      <button
        className={style.orderDetailButton}
        onClick={addToBasket}
      ><BasketIcon className={style.basketIcon}/> dodaj do koszyka
      </button>
    </div>
  );
};