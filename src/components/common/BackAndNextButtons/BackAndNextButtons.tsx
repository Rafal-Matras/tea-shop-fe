import { SyntheticEvent } from 'react';

import { ArrowLeftIcon } from '../SvgIcons/ArrowLeftIcon';
import { ArrowRightIcon } from '../SvgIcons/ArrowRightIcon';

import style from './BackAndNextButtons.module.css';

interface Props {
  textBack?: string;
  textNext: string;
  icons?: boolean;
  handleBack: () => void;
  handleNext: (e: SyntheticEvent) => void;
}

export const BackAndNextButtons = ({textBack = 'Powrót', textNext, icons = true, handleBack, handleNext}: Props) => {

  return (
    <div className={style.buttonBox}>
      <button
        className={style.buttonBack}
        type="button"
        onClick={handleBack}
      >{icons ? <ArrowLeftIcon className={style.icon}/> : null}{textBack}
      </button>
      <button
        className={style.buttonNext}
        type="button"
        onClick={handleNext}>
        {textNext}{icons ? <ArrowRightIcon className={style.icon}/> : null}
      </button>
    </div>
  );
};