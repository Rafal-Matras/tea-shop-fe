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

  const {setProductType} = UseProductContext();
  const [product, setProduct] = useState<BasketOneProductInterface>(oneProductInBasketDefault);
  const {id, name, image, category, type, price,promo, state, numberOfUnits, unit} = basketItem.product;
  const categoryText = () => {
    if (product.category === 'herbaty') return 'Herbata';
    if (product.category === 'kawy') return 'Kawa';
    if (product.category === 'zioła') return 'Zioła';
    if (product.category === 'akcesoria') return 'Akcesoria'
  };

  useEffect(() => {
    const newProduct: BasketOneProductInterface = {
      id,
      name,
      image,
      category,
      type,
      price,
      promo,
      state,
      numberOfUnits,
      unit,
    };
    setProduct(newProduct);
  }, []);

  return (
    <tr className={style.oneProductSummaryContainer}>
      <td className={style.tdImageAndName}>
        <img className={style.image} src={`/images/products/${category}/${product.image}`} alt=""/>
        <div className={style.productInfoNameBox}>
          <p className={style.productInfoName}>{product.name}</p>
          <div className={style.productInfoTypeList}>
            {product.type.map((item, index) => (
              <Link
                className={style.productInfoType}
                to="/shop"
                onClick={() => setProductType(item)}
                key={item}>{categoryText()} {useFirstLetterBig(item)}
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
        >{basketItem.packSize * basketItem.count * product.numberOfUnits} {product.unit}
        </p>
      </td>
      <td className={style.tdProductSummaryUnitPrice}>
        <p className={style.oneProductSummaryUnitPrice}
        ><span>{useConvertPriceToString(+(product.price - product.price * product.promo).toFixed(2))} / </span>{product.numberOfUnits} {product.unit}
        </p>
      </td>
      <td className={style.tdProductSummaryPrice}>
        <p className={style.oneProductSummaryPrice}
        >
          <span>cena: </span>
          {useConvertPriceToString(+(product.price - product.price * product.promo).toFixed(2) * basketItem.packSize * basketItem.count)} zł
        </p>
      </td>
    </tr>
  );
};