import { Link } from 'react-router-dom';

import { ProductsListInterface } from '../../types';

import { useConvertPriceToString } from '../../hooks/useConvertPriceToString';
import { useFirstLetterBig } from '../../hooks/useFirstLetterBig';

import style from './OneProductInList.module.css';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

interface Props {
  item: ProductsListInterface;
}

export const OneProductInList = ({item}: Props) => {

  const {setActiveProductType} = useContext(AppContext);
  const {id, name, category, type, price, image, numberOfUnits, unit, promo} = item;

  const categoryType = type
    ? type.map(item => (
      <p
        className={style.category}
        key={item}
      >{useFirstLetterBig(category)} {useFirstLetterBig(item)}
      </p>
    ))
    : <p className={style.category}>{useFirstLetterBig(category)}</p>;

  const clear = () => {
    setActiveProductType('');
    window.scrollTo(0, 0);
  };

  return (
    <Link
      className={style.productBox}
      to={`/product/:${id}`}
      onClick={clear}
    >{promo
      ? <img className={style.promo} src="/images/icons/promoIcon.png" alt="ikonka promocji"/>
      : null
    }
      <img
        className={style.image}
        src={`/images/products/${image}`}
        alt={`obrazek produktu ${name}`}
      />
      <h1 className={style.name}>{name}</h1>
      {categoryType}
      <div className={style.priceBox}>
        {promo
          ? <div className={style.pricePromoBox}>
            <p className={style.price}>{useConvertPriceToString(promo)}</p>
            <p className={style.pricePromo}>{useConvertPriceToString(price)}</p>
          </div>
          : <p className={style.price}>{useConvertPriceToString(price)}</p>
        }
        <p className={style.unit}>&nbsp;/ {numberOfUnits} {unit}</p>
      </div>
    </Link>
  );
};