import { useEffect, useState } from 'react';

import { TypesOfProductsInterface } from '../../types';

import { Item } from './Items/Item';
import { MobileRestItems } from './Items/MobileRestItems';
import { ItemType } from './Items/ItemType';

import { CloseIcon } from '../common/SvgIcons/CloseIcon';

import style from './Nav.module.css';

interface Props {
  activeMenu: boolean;
  setActiveMenu: (name: boolean) => void;
}

export const Nav = ({activeMenu, setActiveMenu}: Props) => {

  const productTypeDefault: TypesOfProductsInterface[] = [
    {
      id: '123',
      name: 'herbaty',
      types: ['czarna', 'zielona', 'czerwona', 'biała', 'żułta', 'niebieska', 'specialna', 'earl grey', 'owocowe', 'japońska', 'oolong', 'rooibos', 'yerba mate', 'kwitnąca'],
      icon: 'herbata',
    },
    {id: '234', name: 'kawy', types: ['klasyczne', 'smakowe', 'świąteczne', 'naturalne eko'], icon: 'kawa'},
    {
      id: '345',
      name: 'zioła',
      types: ['adaptogeny', 'afrodyzjaki', 'relaks i sen', 'trawienie', 'odchudzanie', 'odporność', 'wzmocnienie', 'zdrowie'],
      icon: 'ziola',
    },
    {
      id: '456',
      name: 'akcesoria',
      types: ['kubki', 'filiżanki', 'puszki', 'czajniki', 'zaparzaczei filtry do herbaty', 'zaparzacze i filtry do kawy', 'yerba mate', 'inne'],
      icon: 'akcesoria',
    },
    {id: '567', name: 'na prezent', types: [], icon: 'prezenty'},
    {id: '678', name: 'promocje', types: [], icon: 'promocja'},
  ];

  const [typesOfProducts, setTypesOfProducts] = useState<TypesOfProductsInterface[]>([]);
  const [activeProductType, setActiveProductType] = useState<string>('');
  const [productTypes, setProductTypes] = useState<string[]>([]);
  const [onlyProductType, setOnlyProductType] = useState<boolean>(false);

  useEffect(() => {
    if (typesOfProducts.length === 0) {

      setTypesOfProducts(productTypeDefault);
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
            key={item.id}
            item={item}
            onlyProductType={onlyProductType}
            activeProductType={activeProductType}
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