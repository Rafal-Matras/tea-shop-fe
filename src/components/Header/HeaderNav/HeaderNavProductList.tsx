import { ArrowDownIcon } from '../../common/SvgIcons/ArrowDownIcon';

import { ProductTypeInterface } from '../../../types';

import { HeaderNavExtraMobileMenu } from './HeaderNavExtraMobileMenu';

import style from './HeaderNav.module.css';

interface Props {
  productType:ProductTypeInterface[];
  activeProductType:boolean;
  selectProductType: (name: string, types: string[]) => void;
  setActiveMenu:(name:boolean)=>void
}

export const HeaderNavProductList = ({productType,activeProductType,selectProductType,setActiveMenu}: Props) => {

  return (
    <div className={`${style.navTop} ${activeProductType ? style.displayNone : null}`}>
      <ul className={style.navTopList}>
        {productType.map(item => (
          <li
            key={item.id}
            className={style.navTopItem}
            onClick={() => selectProductType(item.name, item.types)}
          ><img
            src={`/images/icons/${item.icon}.png`} alt="ikonka produktu"
          />{item.name}
            <ArrowDownIcon className={style.arrowDownIcon}/>
          </li>
        ))}
        <HeaderNavExtraMobileMenu
        setActiveMenu={setActiveMenu}
        />
      </ul>
    </div>
  );
};