import { useNavigate } from 'react-router-dom';

import { BasketSummaryUserData } from './BasketSummaryUserData';
import { BasketSummaryProduct } from './BasketSummaryProduct';

import { Progress } from '../common/Progress/Progress';
import { ArrowLeftIcon } from '../common/SvgIcons/ArrowLeftIcon';
import { ArrowRightIcon } from '../common/SvgIcons/ArrowRightIcon';

import style from './BasketSummary.module.css';
import { UseUserContext } from '../../context/UserContext';
import { UseBasketContext } from '../../context/BasketContext';

export const BasketSummary = () => {

  const navigate = useNavigate();
  const {user} = UseUserContext();
  const {setBasket} = UseBasketContext();

  const handleBack = () => {
    navigate(-1);
    window.scrollTo(0, 0);
  };

  const handleNext = async () => {
    if (user.role === 'user') {
      const response = await fetch('URL', {
        method: 'delete',
      });
    }
    setBasket([]);
    localStorage.clear();
    navigate('/basket/done');
    window.scrollTo(0, 0);
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