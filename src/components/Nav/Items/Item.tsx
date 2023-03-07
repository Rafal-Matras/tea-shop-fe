import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AppContext } from '../../../context/AppContext';

import { TypesOfProductsInterface } from '../../../types';

import { ArrowDownIcon } from '../../common/SvgIcons/ArrowDownIcon';

import style from './Item.module.css';

interface Props {
  item: TypesOfProductsInterface;
  onlyProductType?: boolean;
  selectProductType: (name: string) => void;
}

export const Item = ({item, onlyProductType, selectProductType}: Props) => {

  const {setProductName,setProductType,activeProductType} = useContext(AppContext);

  const setProduct = () => {
    setProductName(item.category);
    setProductType('')
    selectProductType(item.name);
  };

  return (
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
  );
};
