import { useContext, useEffect, useRef, useState } from 'react';

import { AddToBasket } from '../../types';

import { useOnClickOutside } from '../../hooks/useOneClickOut';

import { AvailableProduct } from '../common/AvailableProduct/AvailableProduct';

import { ArrowDownIcon } from '../common/SvgIcons/ArrowDownIcon';
import { BasketIcon } from '../common/SvgIcons/BasketIcon';

import style from './Product.module.css';
import { AppContext } from '../../context/AppContext';

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

export const OrderDetails = ({
                               id,
                               numberOfUnits,
                               price,
                               packSize,
                               setPackSize,
                               quantityOfProduct,
                               setQuantityOfProducts,
                               unit,
                               state,
                               setAddToBasket,
                             }: Props) => {

  const {fullPrice, setFullPrice} = useContext(AppContext);
  const ref = useRef<HTMLParagraphElement | null>(null);
  const [activeMenu, setActiveMenu] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  useOnClickOutside(ref, activeMenu, () => setActiveMenu(false));

  useEffect(() => {
    setValue((numberOfUnits * packSize * quantityOfProduct).toString());
  }, [quantityOfProduct, packSize]);

  const changePackSize = (number: number) => {
    setPackSize(number);
    setQuantityOfProducts(1);
  };

  const quantityUp = () => {
    if ((numberOfUnits * packSize) <= (state - packSize * numberOfUnits * quantityOfProduct)) {
      setQuantityOfProducts(quantityOfProduct + 1);
    }
  };

  const quantityDown = () => {
    if (quantityOfProduct > 1) {
      setQuantityOfProducts(quantityOfProduct - 1);
    }
  };

  const changeValue = (e: any) => {
    const valueNumber = Number(e);
    const number = numberOfUnits * packSize;
    if (isNaN(valueNumber)) {
      setValue((number * quantityOfProduct).toString());
    } else {
      if (valueNumber % (number) < (number / 2)) {
        setValue((valueNumber - (valueNumber % number)).toString());
        setQuantityOfProducts((valueNumber - (valueNumber % number)) / number);
      } else {
        setValue((valueNumber - (valueNumber % number) + number).toString());
        setQuantityOfProducts((valueNumber - (valueNumber % number) + number) / number);
      }
    }
  };

  const addToBasket = () => {
    //server

    //localStore
    const data: AddToBasket = {
      productId: id,
      quantityOfProduct: quantityOfProduct,
      packSize: packSize,
    };
    if (localStorage.getItem('basket')) {
      const basket = JSON.parse(localStorage.getItem('basket') || '');
      basket.push(data);
      localStorage.setItem('basket', JSON.stringify(basket));
    } else {
      localStorage.setItem('basket', JSON.stringify([data]));
    }

    setFullPrice(Math.ceil((fullPrice + 10.12)*100)/100);
    setAddToBasket(true);
    console.log(fullPrice);
    console.log(price * packSize * quantityOfProduct);
  };

  return (
    <div className={style.orderDetailsBox}>
      {unit === 'g'
        ? <div
          className={style.packSizeDropdownMenu}
          ref={ref}
          onClick={() => setActiveMenu(prev => !prev)}
        >
          <p
            className={style.packSize}
          >w torebkach <span>{numberOfUnits * packSize} {unit}&nbsp;<ArrowDownIcon
            className={style.arrowDownIcon}/></span>
          </p>
          <div className={`${activeMenu ? style.packSizeMenuActive : style.packSizeMenu}`}>
            <p
              className={style.packSizeItem}
              onClick={() => changePackSize(1)}
            >{numberOfUnits} {unit}
            </p>
            <p
              className={style.packSizeItem}
              onClick={() => changePackSize(5)}
            >{numberOfUnits * 5} {unit}
            </p>
            <p
              className={style.packSizeItem}
              onClick={() => changePackSize(10)}
            >{numberOfUnits * 10} {unit}
            </p>
          </div>
        </div>
        : null
      }
      <div className={style.changeQuantity}>
        <button className={style.changeQuantityButton} onClick={quantityDown}>-</button>
        <div className={style.changeQuantityInputBox}>
          <input
            className={style.changeQuantityInput}
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={(e) => changeValue(e.target.value)}
          />{unit}
        </div>
        <button className={style.changeQuantityButton} onClick={quantityUp}>+</button>
      </div>
      <AvailableProduct unit={unit} state={state} orderState={state - numberOfUnits * packSize * quantityOfProduct}/>
      <button
        className={style.orderDetailButton}
        onClick={addToBasket}
      ><BasketIcon className={style.basketIcon}/> dodaj do koszyka
      </button>
    </div>
  );
};