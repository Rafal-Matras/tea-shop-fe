import { ReactNode } from 'react';

import style from './Checkbox.module.css';

interface Props {
  children: ReactNode;
  active: 0 | 1,
  change: (value: 0 | 1) => void;
}

export const Checkbox = ({children, active, change}: Props) => {

  return (
    <div className={style.container}>
      <label className={style.label}>
        <input
          className={style.input}
          type="checkbox"
          tabIndex={-1}
          checked={active === 1}
          onChange={() => change(active === 1 ? 0 : 1)}
        />
        <span className={style.checkmark} tabIndex={0}></span>
        {children}
      </label>
    </div>
  );
};