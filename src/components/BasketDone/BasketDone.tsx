import style from './BasketDone.module.css';
import { Progress } from '../common/Progress/Progress';

export const BasketDone = () => {

  return (
    <div className={style.container}>
      <Progress name='Zakończenie' progressNumber={4}/>
      <p className={style.text}>Dziękujemy za złożenie zamówienia!</p>
      <p className={style.text}>Na podany adres e-mail wysłaliśmy potwierdzenie zamówienia. O zmianach statusu
        zamówienia będziemy informować pocztą elektroniczną.</p>
      <p className={style.text}>Zapraszamy na kolejne zakupy w naszym sklepie!</p>
      <p className={style.text}>Pozdrawiamy<br/>Obsługa Sklepu HerbacianyZakątek</p>
    </div>
  );
};