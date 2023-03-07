import { ReactNode } from 'react';

import { CheckIcon } from '../SvgIcons/CheckIcon';
import { ErrorIcon } from '../SvgIcons/ErrorIcon';
import { CloseIcon } from '../SvgIcons/CloseIcon';

import style from './AvailableProduct.module.css';

interface Props {
  unit: string;
  state: number;
  orderState?: number;
}

export const AvailableProduct = ({unit, state, orderState}: Props) => {

  let viewState: ReactNode;
  let number: number;
  if (!orderState && orderState !== 0) {
    number = state;
  } else {
    number = orderState;
  }

  if ((unit === 'szt' && number > 10) || (unit === 'g' && number > 550)) {
    viewState = <p className={style.state}><CheckIcon className={style.checkIcon}/> produkt dostępny</p>;
  } else if (number > 0) {
    viewState = <p className={style.state}><ErrorIcon className={style.errorIcon}/> ostatnie sztuki</p>;
  } else {
    viewState = <p className={style.state}><CloseIcon className={style.closeIcon}/> brak w magazynie</p>;
  }

  return (
    <>
      {viewState}
    </>
  );
};