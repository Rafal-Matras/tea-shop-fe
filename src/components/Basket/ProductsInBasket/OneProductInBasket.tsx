import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { BasketInterface, BasketOneProductInterface } from '../../../types';

import { UseUserContext } from '../../../context/UserContext';
import { UseProductContext } from '../../../context/ProductContext';
import { UseBasketContext } from '../../../context/BasketContext';

import { useFirstLetterBig } from '../../../hooks/useFirstLetterBig';
import { useConvertPriceToString } from '../../../hooks/useConvertPriceToString';

import { ChangeQuantityBox } from '../../common/ChangeQuantityBox/ChangeQuantityBox';
import { PackSizeDropdownMenu } from '../../common/PackSizeDropdownMenu/PackSizeDropdownMenu';
import { CloseIcon } from '../../common/SvgIcons/CloseIcon';

import { oneProductInBasketDefault } from '../../../assets/defaultData';

import style from './ProductsInBasket.module.css';

interface Props {

  index: number;
  basketItem: BasketInterface;
  flag: boolean;
  setFlag: (flag: boolean) => void;
}

export const OneProductInBasket = ({ basketItem, index, flag, setFlag}: Props) => {

  const {user} = UseUserContext();
  const {allProducts,setProductType} = UseProductContext()
  const {basket, setBasket} = UseBasketContext();
  const [product, setProduct] = useState<BasketOneProductInterface>(oneProductInBasketDefault);
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    setValue((product.numberOfUnits * basketItem.packSize * basketItem.quantityOfProduct).toString());
  }, [basketItem.quantityOfProduct, basketItem.packSize,product]);

  useEffect(() => {
    const data = allProducts.find(item => item.id === basketItem.productId);
    if (!data) return;
    const newProduct: BasketOneProductInterface = {
      id: data.id,
      name: data.name,
      image: data.image,
      category:data.category,
      type: data.type,
      price: data.price,
      state: data.state,
      numberOfUnits: data.numberOfUnits,
      unit: data.unit,
    };
    setProduct(newProduct);
  }, []);

  const changeBasketQuantityOfProduct = async (value: number) => {
    const newBasket = basket;
    newBasket[index].quantityOfProduct = value;
    if (user.role === 'user') {


    }
    localStorage.setItem('basket', JSON.stringify(newBasket));
    setBasket(newBasket);
    setFlag(!flag);
  };

  const changePackSize = (value: number) => {
    const newBasket = basket;
    newBasket[index].packSize = value;
    newBasket[index].quantityOfProduct = 1;
    if (user.role === 'user') {


    }
    localStorage.setItem('basket', JSON.stringify(newBasket));
    setBasket(newBasket);
    setFlag(!flag);
  };

  const removeProduct = () => {
    const newBasket = basket.filter((item: BasketInterface) => item.id !== basketItem.id);
    if (user.role === 'user') {


    }
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
          <p className={style.productInfoName}>{product.name}</p>
          <div className={style.productInfoTypeList}>
            {product.type.map((item, index) => (
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