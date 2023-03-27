import { useRef, useState } from 'react';

import { useOnClickOutside } from '../../../hooks/useOneClickOut';

import { ArrowDownIcon } from '../SvgIcons/ArrowDownIcon';

import style from './PackSizeDropdownMenu.module.css';

interface Props{
  numberOfUnits:number;
  packSize:number;
  changePackSize:(number:number)=>void;
}

export const PackSizeDropdownMenu = ({numberOfUnits,packSize,changePackSize}:Props) => {

  const ref = useRef<HTMLParagraphElement | null>(null);
  const [activeMenu, setActiveMenu] = useState<boolean>(false);
  useOnClickOutside(ref, activeMenu, () => setActiveMenu(false));

  return (
    <div
      className={style.packSizeDropdownMenu}
      ref={ref}
      onClick={() => setActiveMenu(prev => !prev)}
    >
      <p
        className={style.packSize}
      >w torebkach <span>{numberOfUnits * packSize} g&nbsp;<ArrowDownIcon
        className={style.arrowDownIcon}/></span>
      </p>
      <div className={`${activeMenu ? style.packSizeMenuActive : style.packSizeMenu}`}>
        <p
          className={style.packSizeItem}
          onClick={() => changePackSize(1)}
        >{numberOfUnits} g
        </p>
        <p
          className={style.packSizeItem}
          onClick={() => changePackSize(5)}
        >{numberOfUnits * 5} g
        </p>
        <p
          className={style.packSizeItem}
          onClick={() => changePackSize(10)}
        >{numberOfUnits * 10} g
        </p>
      </div>
    </div>
  )
}