import { useEffect, useState } from 'react';

import {  TypesOfProductsInterface } from '../../types';

import { UseProductContext } from '../../context/ProductContext';

import { Item } from './Items/Item';
import { MobileRestItems } from './Items/MobileRestItems';
import { ItemType } from './Items/ItemType';

import { CloseIcon } from '../common/SvgIcons/CloseIcon';

import {productType} from '../../assets/data';

import style from './Nav.module.css';

interface Props {
  activeMenu: boolean;
  setActiveMenu: (name: boolean) => void;
}

export const Nav = ({activeMenu, setActiveMenu}: Props) => {

  const {activeProductType, setActiveProductType} = UseProductContext();
  const [typesOfProducts, setTypesOfProducts] = useState<TypesOfProductsInterface[]>([]);
  const [productTypes, setProductTypes] = useState<string[]>([]);
  const [onlyProductType, setOnlyProductType] = useState<boolean>(false);

  useEffect(() => {
    if (typesOfProducts.length < 1) {
      setTypesOfProducts(productType);
    }
  }, []);

  useEffect(() => {
    const activeProductTypes = typesOfProducts.find(item => item.name === activeProductType);
    if (activeProductTypes) {
      setProductTypes(activeProductTypes.types);
    } else {
      setProductTypes([]);
    }
  }, [activeProductType]);

  const closeMenu = () => {
    setActiveMenu(false);
    setActiveProductType('');
    setOnlyProductType(false);
    window.scrollTo(0, 0);
  };

  const selectProductType = (name: string) => {
    if (activeProductType === name) {
      setActiveProductType('');
      setOnlyProductType(false);
    } else {
      setActiveProductType(name);
      setOnlyProductType(true);
    }
    if (name === 'na prezent' || name === 'promocje') {
      closeMenu();
    }
  };

  return (
    <nav className={`${style.container} ${activeMenu ? style.activeMenu : null}`}>
      <div className={style.close} onClick={closeMenu}>
        <CloseIcon
          className={style.closeIcon}/>
      </div>
      <ul className={style.productsList}>
        {typesOfProducts.map(item => (
          <Item
            key={item.name}
            item={item}
            onlyProductType={onlyProductType}
            selectProductType={selectProductType}
          />
        ))}
        <MobileRestItems
          onlyProductType={onlyProductType}
          closeMenu={closeMenu}
        />
      </ul>
      <ul className={style.productTypesList}>
        {productTypes.map(item => (
          <ItemType
            key={item}
            name={item}
            closeMenu={closeMenu}
          />
        ))}
      </ul>
    </nav>
  );
};