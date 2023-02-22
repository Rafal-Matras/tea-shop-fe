import { Link } from 'react-router-dom';

import { ProductsListInterface } from '../../types';

import { useConvertPriceToString } from '../../hooks/useConvertPriceToString';

import { CheckIcon } from '../common/SvgIcons/CheckIcon';
import { ErrorIcon } from '../common/SvgIcons/ErrorIcon';
import { CloseIcon } from '../common/SvgIcons/CloseIcon';

import style from './OneProductInList.module.css';

interface Props {
  item: ProductsListInterface;
}

export const OneProductInList = ({item}: Props) => {

  const {id, name, price, image, numberOfUnits, unit, state, promo} = item;

  let viewState;

  if (state > 10) {
    viewState = <p className={style.state}><CheckIcon className={style.checkIcon}/> W magazynie</p>;
  } else if (state > 0) {
    viewState = <p className={style.state}><ErrorIcon className={style.errorIcon}/> Ostatnie sztuki</p>;
  } else {
    viewState = <p className={style.state}><CloseIcon className={style.closeIcon}/> brak w magazynie</p>;
  }

  return (
    <Link className={style.productBox} to={`/product/:${id}`} onClick={() => window.scrollTo(0, 0)}>
      {promo
        ? <img className={style.promo} src="/images/icons/promoIcon.png" alt="ikonka promocji"/>
        : null
      }
      <img
        className={style.image}
        src={`/images/products/${image}.webp`}
        alt={`obrazek produktu ${name}`}
      />
      <h1 className={style.name}>{name}</h1>
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
      {viewState}
    </Link>
  );
};