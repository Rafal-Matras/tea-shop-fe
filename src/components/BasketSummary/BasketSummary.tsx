import { useNavigate } from 'react-router-dom';

import { BasketSummaryUserData } from './BasketSummaryUserData';
import { BasketSummaryProduct } from './BasketSummaryProduct';

import { Progress } from '../common/Progress/Progress';
import { ArrowLeftIcon } from '../common/SvgIcons/ArrowLeftIcon';
import { ArrowRightIcon } from '../common/SvgIcons/ArrowRightIcon';

import style from './BasketSummary.module.css';

export const BasketSummary = () => {

  const navigate = useNavigate();
  const handleSentOrder = () => {

    navigate('/basket/done');
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleNext = () => {
    navigate('/basket/done');
  };

  return (
    <div className={style.container}>
      <Progress name="Podsumowanie" progressNumber={3}/>
      <h1 className={style.title}>Prosimy o sprawdzenie poprawności danych oraz zamówienia</h1>
      <BasketSummaryUserData/>
      <BasketSummaryProduct/>
      <div className={style.buttonBox}>
        <button
          className={style.button}
          onClick={handleBack}
        ><ArrowLeftIcon className={style.icon}/> Popraw dane
        </button>
        <button
          className={`${style.button} ${style.buttonNext}`}
          onClick={handleNext}
        >Zamawiam <ArrowRightIcon className={style.icon}/>
        </button>
      </div>
    </div>
  );
};