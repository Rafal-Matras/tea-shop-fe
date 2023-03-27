import { useContext } from 'react';

import { AppContext } from '../../../context/AppContext';

import { useConvertPriceToString } from '../../../hooks/useConvertPriceToString';

import style from './Progres.module.css';

interface Props {
  name: string;
  progressNumber: number;
}

export const Progress = ({name, progressNumber}: Props) => {

  const {fullPrice} = useContext(AppContext);
  const progress = () => {
    switch (progressNumber) {
      case 1:
        return style.progressNumber1;
      case 2:
        return style.progressNumber2;
      case 3:
        return style.progressNumber3;
      case 4:
        return style.progressNumber4;
    }
  };

  return (
    <div className={style.container}>
      <div className={style.mobile}>
        <div className={`${style.progressCircle} ${progress()}`}>
          <p>{progressNumber}</p>
          <div></div>
          <span>4</span>
        </div>
        <div className={style.textBox}>
          <p className={style.title}>{name}</p>
          <p className={style.title}>Razem: {useConvertPriceToString(fullPrice)} zł</p>
        </div>
      </div>
      <div className={style.desktop}>
        <p className={`${style.desktopProgress} ${progressNumber > 0 ? style.active : ''}`}>Koszyk</p>
        <p className={`${style.desktopProgress} ${progressNumber > 1 ? style.active : ''}`}>Rejestracja</p>
        <p className={`${style.desktopProgress} ${progressNumber > 2 ? style.active : ''}`}>Podsumowanie</p>
        <p className={`${style.desktopProgress} ${progressNumber > 3 ? style.active : ''}`}>Zakończenie</p>
      </div>

    </div>
  );
};