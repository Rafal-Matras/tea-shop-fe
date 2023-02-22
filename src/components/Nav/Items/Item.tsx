import { Link } from 'react-router-dom';

import { TypesOfProductsInterface } from '../../../types';

import { ArrowDownIcon } from '../../common/SvgIcons/ArrowDownIcon';

import style from './Item.module.css';
import { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';

interface Props {
  item: TypesOfProductsInterface;
  onlyProductType?: boolean;
  activeProductType: string;
  selectProductType: (name: string) => void;
}

export const Item = ({item, onlyProductType, activeProductType, selectProductType}: Props) => {

  const {setProductName} = useContext(AppContext);

  const setProduct = () => {
    setProductName(item.name);
    selectProductType(item.name);
  };

  return (
    // item.types.length > 0
    //   ?
      <li
        className={onlyProductType && activeProductType !== item.name
          ? style.productItemDisable
          : style.productItem
        }
        onClick={setProduct}>
        <Link
        className={activeProductType === item.name
          ? style.activeProductItemText
          : style.productItemText}
        to='/shop'
      >
        <img className={style.productIcon} src={`/images/icons/${item.icon}.png`} alt="ikonka produktu"/>
        {item.name}
          {item.types.length > 0?<ArrowDownIcon className={style.arrowDownIcon}/>:null}
      </Link>
      </li>
      // : <li
      //   className={onlyProductType && activeProductType !== item.name ?
      //     style.productItemDisable : style.productItem}
      //   onClick={setProduct}>
      //   <Link
      //     className={style.productItemText}
      //     to="/shop"
      //   > <img className={style.productIcon} src={`/images/icons/${item.icon}.png`} alt="ikonka produktu"/>
      //     {item.name}
      //   </Link>
      // </li>
  );
};
