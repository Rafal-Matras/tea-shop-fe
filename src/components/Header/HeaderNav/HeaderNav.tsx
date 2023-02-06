import { useEffect, useState } from 'react';

import { CloseIcon } from '../../common/SvgIcons/CloseIcon';

import { HeaderNavProductList } from './HeaderNavProductList';
import { HeaderNavProductsTypesList } from './HeaderNavProductsTypesList';

import { ProductTypeInterface } from '../../../types';

import style from './HeaderNav.module.css';

interface Props {
  activeMenu: boolean;
  setActiveMenu: (name: boolean) => void;
}

export const HeaderNav = ({activeMenu, setActiveMenu}: Props) => {

  const productTypeDefault: ProductTypeInterface[] = [
    {
      id: '123',
      name: 'herbaty',
      types: ['czarna', 'zielona', 'biała', 'żułta', 'czerwona', 'niebieska', 'earl grey', 'owocowe', 'japońska', 'oolong', 'rooibos', 'yerba mate', 'kwitnąca'],
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

  const [productType, setProductType] = useState<ProductTypeInterface[]>([]);
  const [productTypeList, setProductTypeList] = useState<string[]>([]);
  const [activeProductType, setActiveProductType] = useState<boolean>(false);
  const [productTypeTitle, setProductTypeTitle] = useState<string>('');

  useEffect(() => {
    (async () => {
      // const response = await fetch('url');
      // const data: Promise<ProductTypeInterface> = response.json();

      setProductType(productTypeDefault);
    })();
  }, []);

  const selectProductType = (type: string, typeList: string[]) => {
    if (type === 'na prezent' || type === 'promocje') {
      setActiveMenu(false);
      setActiveProductType(false);
    } else {
      setActiveProductType(true);
    }
    setProductTypeTitle(type);
    setProductTypeList(typeList);

  };
  const closeMenu = () => {
    setActiveMenu(false);
    setActiveProductType(false);
    setProductTypeList([]);
  };

  const removeTypeList = () => {
    setActiveProductType(false);
    setProductTypeList([]);
  };

  const selectedTypeOfProduct = () => {
    closeMenu();

  };

  return (
    <nav className={`${style.nav} ${activeMenu ? style.navActive : null}`}>
      <div className={style.closeIconBox} onClick={closeMenu}>
        <CloseIcon className={style.closeIcon}/>
      </div>
      <HeaderNavProductList
        productType={productType}
        activeProductType={activeProductType}
        selectProductType={selectProductType}
        setActiveMenu={setActiveMenu}
      />
      <HeaderNavProductsTypesList
        activeProductType={activeProductType}
        removeTypeList={removeTypeList}
        productTypeTitle={productTypeTitle}
        productTypeList={productTypeList}
        selectedTypeOfProduct={selectedTypeOfProduct}
      />
    </nav>
  );
};