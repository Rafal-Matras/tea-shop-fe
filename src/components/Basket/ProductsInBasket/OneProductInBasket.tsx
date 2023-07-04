import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { BasketInterface } from '../../../types';

import { UseUserContext } from '../../../context/UserContext';
import { UseProductContext } from '../../../context/ProductContext';
import { UseBasketContext } from '../../../context/BasketContext';

import { useFirstLetterBig } from '../../../hooks/useFirstLetterBig';
import { useConvertPriceToString } from '../../../hooks/useConvertPriceToString';
import { useSetNewFullPrice } from '../../../hooks/useSetNewFullPrice';

import { config } from '../../../config/config';

import { ChangeQuantityBox } from '../../common/ChangeQuantityBox/ChangeQuantityBox';
import { PackSizeDropdownMenu } from '../../common/DropdownMenus/PackSizeDropdownMenu';
import { CloseIcon } from '../../common/SvgIcons/CloseIcon';

import stylePackSize from '../../common/DropdownMenus/DropdownMenus.module.css';
import style from './ProductsInBasket.module.css';

interface Props {

  index: number;
  basketItem: BasketInterface;
}

export const OneProductInBasket = ({basketItem, index}: Props) => {

  const {user} = UseUserContext();
  const {setProductType} = UseProductContext();
  const {setFullPrice} = UseBasketContext();
  const {basket, setBasket} = UseBasketContext();
  const [value, setValue] = useState<string>('');

  const {image, name, type, numberOfUnits, unit, state, price, promo} = basketItem.product;

  useEffect(() => {
    setValue((numberOfUnits * basketItem.packSize * basketItem.count).toString());
  }, [basketItem.count, basketItem.packSize]);

  const changeBasket = async (newBasket: BasketInterface[], index: number) => {
    if (user.role === 'user') {
      try {
        await fetch(`${config.URL}basket`, {
          method: 'PUT',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: newBasket[index].id,
            count: newBasket[index].count,
            packSize: newBasket[index].packSize,
          }),
        });
      } catch (err) {
        throw new Error('New error message', {cause: err});
      }
    } else {
      localStorage.setItem('basket', JSON.stringify(newBasket));
    }
    setBasket(newBasket);
    setFullPrice(await useSetNewFullPrice(basket));
  };

  const changeBasketQuantityOfProduct = async (value: number) => {
    const newBasket = basket;
    newBasket[index].count = value;
    await changeBasket(newBasket, index);
  };

  const changePackSize = async (value: number) => {
    const newBasket = basket;
    newBasket[index].packSize = value;
    newBasket[index].count = 1;
    await changeBasket(newBasket, index);
  };

  const removeProduct = async () => {
    const newBasket = basket.filter((item: BasketInterface) => item.id !== basketItem.id);
    if (user.role === 'user') {
      try {
        await fetch(`${config.URL}basket/${basketItem.id}`, {
          method: 'DELETE',
          credentials: 'include',
        });
        setBasket(newBasket);
        setFullPrice(await useSetNewFullPrice(basket));
      } catch (err) {
        throw new Error('', {cause: err});
      }
    } else {
      await changeBasket(newBasket, 0);
    }
  };

  return (
    <div className={style.oneProductContainer}>
      <div className={style.productInfo}>
        <img
          className={style.productInfoImage}
          src={`/images/products/${basketItem.product.category}/${image}`}
          alt="zdjęcie produktu"
        />
        <div className={style.productInfoNameBox}>
          <p className={style.productInfoName}>{name}</p>
          <div className={style.productInfoTypeList}>
            {type.map((item, index) => (
              <Link
                className={style.productInfoType}
                to="/shop"
                onClick={() => setProductType(item)}
                key={item}>{useFirstLetterBig(item)}
                {(type.length > 0 && index < type.length - 1)
                  ? ','
                  : ''
                }
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={style.productOrder}>
        <div className={style.productOrderQuantityBox}>
          <ChangeQuantityBox
            numberOfUnits={numberOfUnits}
            packSize={basketItem.packSize}
            unit={unit}
            state={state}
            count={basketItem.count}
            setCount={changeBasketQuantityOfProduct}
            value={value}
            setValue={setValue}
          />
        </div>
        <div className={style.productOrderPackSize}>
          {unit === 'g'
            ? <PackSizeDropdownMenu
              numberOfUnits={numberOfUnits}
              packSize={basketItem.packSize}
              changePackSize={changePackSize}
            />
            : <div className={stylePackSize.packSizeDropdownMenu}></div>
          }
        </div>
        <div className={style.productOrderPrice}>
          <p
            className={style.productOrderPriceText}
          >cena: <span>{useConvertPriceToString((+(price - price * promo).toFixed(2)) * basketItem.count * basketItem.packSize)}</span>
          </p>
        </div>
        <div className={style.productOrderRemove}>
          <button
            className={style.productOrderRemoveButton}
            onClick={() => removeProduct()}
          ><CloseIcon className={style.closeIcon}/>
          </button>
        </div>
      </div>
    </div>
  );
};