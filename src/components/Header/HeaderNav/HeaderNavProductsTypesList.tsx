import { ArrowDownIcon } from '../../common/SvgIcons/ArrowDownIcon';

import style from './HeaderNav.module.css';

interface Props {
  activeProductType: boolean;
  removeTypeList: () => void;
  productTypeTitle: string;
  productTypeList: string[];
  selectedTypeOfProduct: () => void;
}

export const HeaderNavProductsTypesList = (
  {activeProductType, removeTypeList, productTypeTitle, productTypeList, selectedTypeOfProduct}: Props) => {

  return (
    <div className={style.navBottom}>
      <p
        className={`${style.navBottomTitle}
           ${activeProductType ? style.activeNavBottomTitle : null}`}
        onClick={removeTypeList}
      >{productTypeTitle} <ArrowDownIcon className={style.arrowDownIcon}/>
      </p>
      <ul className={style.navBottomList}>
        {productTypeList.map(item => (
          <li
            key={item}
            className={style.navBottomItem}
            onClick={selectedTypeOfProduct}
          >{item}
          </li>
        ))}
      </ul>
    </div>
  );
};