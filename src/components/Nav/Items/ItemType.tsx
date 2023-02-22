import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { AppContext } from '../../../context/AppContext';

import style from './Item.module.css';

interface Props {
  name: string;
  closeMenu: () => void;
}

export const ItemType = ({name, closeMenu}: Props) => {

  const {setProductType} = useContext(AppContext)

  const selectType = () => {
    setProductType(name)
    closeMenu()
  }

  return (
    <li
      className={style.productTypeItem}
      onClick={selectType}
    ><Link className={style.productTypeText} to="/shop">{name}</Link>
    </li>
  );
};