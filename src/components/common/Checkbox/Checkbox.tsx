import { ReactNode } from 'react';

import style from './Checkbox.module.css';

interface Props {
  children: ReactNode;
  active: boolean;
  change: (name: boolean) => void;
}

export const Checkbox = ({children, active, change}: Props) => {

  return (
    <div className={style.container} >
      <label className={style.label} >
        <input
          className={style.input}
          type="checkbox"
          tabIndex={-1}
          onChange={() => change(!active)}
        />
        <span className={style.checkmark} tabIndex={0}></span>
        {children}
      </label>
    </div>
  );
};