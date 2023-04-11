import { Link } from 'react-router-dom';

import { Category } from '../../types';

import { UseBasketContext } from '../../context/BasketContext';

import { useConvertPriceToString } from '../../hooks/useConvertPriceToString';
import { useFirstLetterBig } from '../../hooks/useFirstLetterBig';

import { ArrowLeftIcon } from '../common/SvgIcons/ArrowLeftIcon';
import { BasketIcon } from '../common/SvgIcons/BasketIcon';
import { CloseIcon } from '../common/SvgIcons/CloseIcon';

import style from './Product.module.css';

interface Props {
  image: string;
  name: string;
  category: Category;
  type: string[] | null;
  price: number;
  unit: string;
  setAddToBasket: (name: boolean) => void;
}

export const AddedToBasket = ({image, name, type, category, price, unit, setAddToBasket}: Props) => {

  const {fullPrice} = UseBasketContext();

  const categoryType = type?.map((item, index) => (
    <p className={style.addedToBasketCategoryTypeName} key={item}>
      {useFirstLetterBig(category)}&nbsp;{useFirstLetterBig(item)}
      {index < type?.length - 1 ? <span> ,&nbsp;</span> : null}
    </p>
  ));

  return (
    <div className={style.addedToBasket}>
      <h1 className={style.addedToBasketTitle}>
        Dodano do koszyka
        <CloseIcon
          className={style.addedToBasketClose}
          onClick={() => setAddToBasket(false)}
        />
      </h1>
      <p className={style.addedToBasketDelivery}>
        {fullPrice >= 80
          ? 'Darmowa dostawa'
          : `Do darmowej dostawy brakuje ${useConvertPriceToString(80 - fullPrice)} zł`
        }
      </p>
      <div className={style.addedToBasketProduct}>
        <img className={style.addedToBasketImage} src={`/images/products/${image}`} alt=""/>
        <div className={style.addedToBasketInfo}>
          <p className={style.addedToBasketName}>{name}</p>
          <div className={style.addedToBasketCategoryType}>{categoryType}</div>
        </div>
      </div>
      <p className={style.addedToBasketPrice}>
        {useConvertPriceToString(price)}<span> / {unit}</span>
      </p>
      <div className={style.addedToBasketButtonBox}>
        <button
          className={style.addedToBasketButton}
          onClick={() => setAddToBasket(false)}
        >
          <ArrowLeftIcon className={style.addedToBasketIcon}/>
          {window.screen.width < 500 ? 'kontynuuj' : 'kontynuuj zakupy'}
        </button>
        <Link
          className={style.addedToBasketButton}
          to="/basket"
          onClick={() => setAddToBasket(false)}
        >
          <BasketIcon className={style.addedToBasketIcon}/>
          {window.screen.width < 500 ? 'do koszyka' : 'przejdź do koszyka'}
        </Link>
      </div>
    </div>
  );
};