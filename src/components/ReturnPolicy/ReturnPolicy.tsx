import rightOfWithdrawal
  from '../../assets/pdfFiles/informacja-dotyczace-korzystania-z-prawa-odstąpienia-od-umowy.pdf';
import formOfWithdrawal from '../../assets/pdfFiles/formularz-odstapienia.pdf';
import complaintForm from '../../assets/pdfFiles/formularz-reklamacji.pdf';

import style from './ReturnPolicy.module.css';

export const ReturnPolicy = () => {

  return (
    <section className={style.container}>
      <h1 className={style.title}>Polityka zwrotów</h1>
      <img
        className={style.image}
        src="/images/onPage/polityka-zwrotow.webp"
        alt="zdjęcie kobiety pijącej herbatę"
      />
      <p className={style.text}>
        <strong>Bezproblemowe zwroty i wymiany przez 30 dni</strong>
      </p>
      <p className={style.text}>
        Na wymianę lub zwrot towaru masz aż 30 dni od momentu otrzymania przesyłki. <strong>Nie musisz nawet podawać
        powodu zwrotu</strong> chociaż będziemy wdzięczni za przekazanie nam takiej informacji.
      </p>
      <p className={style.text}>
        Jeśli chcesz wymienić lub zwrócić produkt:
      </p>
      <ul className={style.list}>
        <li className={style.item}>
         Towar musi być nowy, bez oznak użytkowania.
        </li>
        <li className={style.item}>
           Pobierz z naszej strony formularz odstąpienia od umowy (<a href={formOfWithdrawal} target="_blank">formularz w formacie pdf</a>)
        </li>
        <li className={style.item}>
           Zapakuj produkty wraz z formularzem i fakturą i odeślij na adres:<br/>
          <strong>Herbaciany Zakątek S.C.</strong><br/>
          <strong>ul.Herbaciana 12 m 1</strong><br/>
          <strong>01 - 123 Warszawa</strong><br/>
        </li>
        <li className={style.item}>
           Po otrzymaniu przez nas przesyłki - zwracamy Ci pieniądze lub wysyłamy pożądany przez Ciebie
          produkt.
        </li>
      </ul>
      <p className={style.text}>
        <strong>Każda reklamacja jest rozpatrywana na korzyść klienta.</strong> Wadliwy produkt wymieniamy niezwłocznie
        na nasz koszt (włącznie z kosztem dostawy). Pokryjemy również koszty odesłania wadliwego produktu do nas.
      </p>
      <p className={style.text}>
        Jeżeli wymiana produktu nie będzie możliwa zaproponujemy wybór innego z naszej oferty lub zwrot pełnej wpłaconej
        kwoty.
      </p>
      <p className={style.text}>
        <strong>Pliki do pobrania:</strong>
      </p>
      <ul className={style.list}>
        <li className={style.item}>
          <a href={rightOfWithdrawal} target="_blank">
            Informacja dotyczące korzystania z prawa odstąpienia od umowy.pdf
          </a>
        </li>
        <li className={style.item}>
          <a href={formOfWithdrawal} target="_blank">
            Formularz odstąpienia.pdf
          </a>
        </li>
        <li className={style.item}>
          <a href={complaintForm} target="_blank">
            Formularz reklamacji.pdf
          </a>
        </li>
      </ul>
    </section>
  );
};