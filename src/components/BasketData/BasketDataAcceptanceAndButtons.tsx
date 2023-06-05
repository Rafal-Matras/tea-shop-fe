import { Link } from 'react-router-dom';

import { Checkbox } from '../common/Checkbox/Checkbox';
import { ArrowRightIcon } from '../common/SvgIcons/ArrowRightIcon';
import { ArrowLeftIcon } from '../common/SvgIcons/ArrowLeftIcon';

import style from './BasketData.module.css';

interface Props {
  accept: 0 | 1;
  setAccept: (number: 0 | 1) => void;
  isAccepted: boolean;
  handleNext:()=>void;
  buttonName: string;
  showAccepted: boolean;
}

export const BasketDataAcceptanceAndButtons = ({accept, setAccept,isAccepted,handleNext, buttonName, showAccepted,}: Props) => {

  return (
    <>
      {showAccepted
        ? <>
          <h2 className={style.sectionTitle}>Akceptacje</h2>
          <div className={style.acceptanceCheckbox}>
            <Checkbox
              active={accept}
              change={setAccept}
            ><p
            >Zapoznałem się i akceptuję &nbsp;
              <Link
                className={style.acceptanceLink}
                to="/regulations"
                target="_blank">
                regulamin
              </Link> oraz&nbsp;
              <Link
                className={style.acceptanceLink}
                to="/privacy-policy"
                target="_blank">
                politykę prywatności
              </Link>
            </p>
            </Checkbox>
            <p className={isAccepted ? style.errorMassageOn : style.errorMassageOff}
            >Potwierdz zapoznanie się z regulaminem i polityką prywatności.
            </p>
          </div>
        </>
        : null
      }
      <div className={style.buttonBox}>
        <Link
          className={style.button}
          to="/basket"
        ><ArrowLeftIcon className={style.arrowIcon}/>Powrót
        </Link>
        <button
          className={`${style.button} ${style.buttonNext}`}
          onClick={handleNext}
          type="button"
        >{buttonName} <ArrowRightIcon className={style.arrowIcon}/>
        </button>
      </div>
      ;
    </>
  );
};