import { Link } from 'react-router-dom';

import { UseProductContext } from '../../../context/ProductContext';

import style from './Item.module.css';

interface Props {
  name: string;
  closeMenu: () => void;
}

export const ItemType = ({name, closeMenu}: Props) => {

  const {productType, setProductType, setCurrentPage} = UseProductContext();

  const selectType = () => {
    setProductType(name);
    setCurrentPage(0);
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