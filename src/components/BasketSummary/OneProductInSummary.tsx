import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { BasketInterface, BasketOneProductInterface } from '../../types';

import { UseProductContext } from '../../context/ProductContext';

import { useFirstLetterBig } from '../../hooks/useFirstLetterBig';
import { useConvertPriceToString } from '../../hooks/useConvertPriceToString';

import { oneProductInBasketDefault } from '../../assets/defaultData';

import style from './BasketSummary.module.css';

interface Props {
  basketItem: BasketInterface;
}

export const OneProductInSummary = ({basketItem}: Props) => {

  const {allProducts, setProductType} = UseProductContext();
  const [product, setProduct] = useState<BasketOneProductInterface>(oneProductInBasketDefault);

  useEffect(() => {
    const data = allProducts.find(item => item.id === basketItem.productId);
    if (!data) return;
    const newProduct: BasketOneProductInterface = {
      id: data.id,
      name: data.name,
      image: data.image,
      category: data.category,
      type: data.type,
      price: data.price,
      state: data.state,
      numberOfUnits: data.numberOfUnits,
      unit: data.unit,
    };
    setProduct(newProduct);
  }, []);

  return (
    <tr className={style.oneProductSummaryContainer}>
      <td className={style.tdImageAndName}>
        <img className={style.image} src={`/images/products/${product.image}`} alt=""/>
        <div className={style.productInfoNameBox}>
          <p className={style.productInfoName}>{product.name}</p>
          <div className={style.productInfoTypeList}>
            {product.type.map((item, index) => (
              <Link
                className={style.productInfoType}
                to="/shop"
                onClick={() => setProductType(item)}
                key={item}>{useFirstLetterBig(product.category)} {useFirstLetterBig(item)}
                {(product.type.length > 0 && index < product.type.length - 1)
                  ? ', '
                  : ''
                }
              </Link>
            ))}
          </div>
        </div>
      </td>
      <td className={style.tdProductSummaryQuantity}>
        <p className={style.oneProductSummaryQuantity}
        >{basketItem.packSize * basketItem.quantityOfProduct * product.numberOfUnits} {product.unit}
        </p>
      </td>
      <td className={style.tdProductSummaryUnitPrice}>
        <p className={style.oneProductSummaryUnitPrice}
        ><span>{useConvertPriceToString(product.price)} / </span>{product.numberOfUnits} {product.unit}
        </p>
      </td>
      <td className={style.tdProductSummaryPrice}>
        <p className={style.oneProductSummaryPrice}
        >
          <span>cena: </span>
          {useConvertPriceToString(product.price * basketItem.packSize * basketItem.quantityOfProduct)} zł
        </p>
      </td>
    </tr>
  );
};