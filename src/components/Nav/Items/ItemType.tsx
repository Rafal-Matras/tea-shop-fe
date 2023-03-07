import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { AppContext } from '../../../context/AppContext';

import style from './Item.module.css';

interface Props {
  name: string;
  closeMenu: () => void;
}

export const ItemType = ({name, closeMenu}: Props) => {

  const {productType, setProductType} = useContext(AppContext);

  const selectType = () => {
    setProductType(name);
    if (window.screen.width < 992) {
      closeMenu();
    }
  };

  return (
    <li
      className={`${style.productTypeItem} ${productType === name ? style.active : ''}`}
      onClick={selectType}
    ><Link className={style.productTypeText} to="/shop">{name}</Link>
    </li>
  );
};