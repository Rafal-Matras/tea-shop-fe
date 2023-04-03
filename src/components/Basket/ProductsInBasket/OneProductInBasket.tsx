import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { AddToBasket, BasketInterface } from '../../../types';

import { UserContext } from '../../../context/UserContext';
import { AppContext } from '../../../context/AppContext';

import { useFirstLetterBig } from '../../../hooks/useFirstLetterBig';
import { useConvertPriceToString } from '../../../hooks/useConvertPriceToString';

import { ChangeQuantityBox } from '../../common/ChangeQuantityBox/ChangeQuantityBox';
import { PackSizeDropdownMenu } from '../../common/PackSizeDropdownMenu/PackSizeDropdownMenu';
import { CloseIcon } from '../../common/SvgIcons/CloseIcon';

import style from './ProductsInBasket.module.css';

import { oneProductInBasketDefault, exemplaryProductInBasket } from '../../../assets/allProducts';

interface Props {
  index: number;
  basketItem: AddToBasket;
  flag: boolean;
  setFlag: (flag: boolean) => void;
}

export const OneProductInBasket = ({basketItem, index, flag, setFlag}: Props) => {

  const {user} = useContext(UserContext);
  const {basket, setBasket, setProductType} = useContext(AppContext);
  const [product, setProduct] = useState<BasketInterface>(oneProductInBasketDefault);
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    setValue((product.numberOfUnits * basketItem.packSize * basketItem.quantityOfProduct).toString());
  }, [basketItem.quantityOfProduct, basketItem.packSize]);

  useEffect(() => {
    // (async ()=>{
    //   const response = await fetch(URL)
    //   const data = await response.json()
    //   setProduct(data)
    // })()
    setProduct(exemplaryProductInBasket);

  }, []);

  const changeBasketQuantityOfProduct = async (value: number) => {
    if (user.role === 'user') {
      // const response = await fetch(URL, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(basket),
      // });

    }
    const newBasket = basket;
    newBasket[index].quantityOfProduct = value;
    localStorage.setItem('basket', JSON.stringify(newBasket));
    setBasket(newBasket);
    setFlag(!flag);
  };

  const changePackSize = (value: number) => {
    if (user.role === 'user') {


    }
    const newBasket = basket;
    newBasket[index].packSize = value;
    newBasket[index].quantityOfProduct = 1;
    localStorage.setItem('basket', JSON.stringify(newBasket));
    setBasket(newBasket);
    setFlag(!flag);
  };

  const removeProduct = () => {
    if (user.role === 'user') {


    }
    const newBasket = basket.filter((item: AddToBasket) => item.id !== basketItem.id);
    localStorage.setItem('basket', JSON.stringify(newBasket));
    setBasket(newBasket);
    setFlag(!flag);
  };

  return (
    <div className={style.oneProductContainer}>
      <div className={style.productInfo}>
        <img
          className={style.productInfoImage}
          src={`/images/products/${product?.image}`}
          alt="zdjęcie produktu"
        />
        <div className={style.productInfoNameBox}>
          <p className={style.productInfoName}>{product?.name}</p>
          <div className={style.productInfoTypeList}>
            {product?.type.map((item, index) => (
              <Link
                className={style.productInfoType}
                to="/shop"
                onClick={() => setProductType(item)}
                key={item}>{useFirstLetterBig(item)}
                {(product.type.length > 0 && index < product.type.length - 1)
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
            numberOfUnits={product.numberOfUnits}
            packSize={basketItem.packSize}
            unit={product.unit}
            state={product.state}
            quantityOfProduct={basketItem.quantityOfProduct}
            setQuantityOfProducts={changeBasketQuantityOfProduct}
            value={value}
            setValue={setValue}
          />
        </div>
        <div className={style.productOrderPackSize}>
          <PackSizeDropdownMenu
            numberOfUnits={product.numberOfUnits}
            packSize={basketItem.packSize}
            changePackSize={changePackSize}
          />
        </div>
        <div className={style.productOrderPrice}>
          <p
            className={style.productOrderPriceText}
          >cena: <span>{useConvertPriceToString(product.price * basketItem.quantityOfProduct * basketItem.packSize)}</span>
          </p>
        </div>
        <div className={style.productOrderRemove}>
          <button
            className={style.productOrderRemoveButton}
            onClick={removeProduct}
          ><CloseIcon className={style.closeIcon}/>
          </button>
        </div>
      </div>
    </div>
  );
};