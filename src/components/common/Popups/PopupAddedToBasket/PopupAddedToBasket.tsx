import { Link } from 'react-router-dom';

import { Category } from '../../../../types';

import { UseBasketContext } from '../../../../context/BasketContext';

import { useConvertPriceToString } from '../../../../hooks/useConvertPriceToString';
import { useFirstLetterBig } from '../../../../hooks/useFirstLetterBig';

import { ArrowLeftIcon } from '../../SvgIcons/ArrowLeftIcon';
import { BasketIcon } from '../../SvgIcons/BasketIcon';
import { CloseIcon } from '../../SvgIcons/CloseIcon';

import style from './PopupAddedToBasket.module.css';
import { ChangeQuantityBox } from '../../ChangeQuantityBox/ChangeQuantityBox';

interface Props {
  image: string;
  name: string;
  category: Category;
  type: string[] | null;
  price: number;
  unit: string;
  setAddedToBasket: (name: boolean) => void;
}

export const PopupAddedToBasket = ({image, name, type, category, price, unit, setAddedToBasket}: Props) => {

  const {fullPrice} = UseBasketContext();

  const categoryType = type?.map((item, index) => (
    <p className={style.categoryTypeName} key={item}>
      {useFirstLetterBig(category)}&nbsp;{useFirstLetterBig(item)}
      {index < type?.length - 1 ? <span> ,&nbsp;</span> : null}
    </p>
  ));

  return (
    <div className={style.container}>
      <div className={style.box}>
        <h1 className={style.title}>Dodano do koszyka</h1>
        <p className={style.delivery}>
          {fullPrice >= 80
            ? 'Darmowa dostawa'
            : `Do darmowej dostawy brakuje ${useConvertPriceToString(80 - fullPrice)} zł`
          }
        </p>
        <div className={style.product}>
          <img className={style.image} src={`/images/products/${category}/${image}`} alt=""/>
          <div className={style.info}>
            <p className={style.name}>{name}</p>
            <div className={style.categoryType}>{categoryType}</div>
          </div>
        </div>
        <p className={style.price}>
          {useConvertPriceToString(price)}<span> / {unit}</span>
        </p>
        <div className={style.buttonBox}>
          <button
            className={style.button}
            onClick={() => setAddedToBasket(false)}
          >
            <ArrowLeftIcon className={style.icon}/>
            {window.screen.width < 500 ? 'kontynuuj' : 'kontynuuj zakupy'}
          </button>
          <Link
            className={style.button}
            to="/basket"
            onClick={() => setAddedToBasket(false)}
          >
            <BasketIcon className={style.icon}/>
            {window.screen.width < 500 ? 'do koszyka' : 'przejdź do koszyka'}
          </Link>
        </div>
      </div>
    </div>
  );
};
