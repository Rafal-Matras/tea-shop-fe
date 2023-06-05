import { Link } from 'react-router-dom';

import style from './DeliveryAndPayment.module.css';

export const DeliveryAndPayment = () => {

  return (
    <section className={style.container}>
      <h1 className={style.title}>Dostawa i Płatności</h1>
      <img className={style.image} src="/images/onPage/dostawa.webp" alt="zdjęcie pani kurier"/>
      <h2 className={style.textTitle}>Dostawa</h2>
      <p className={style.text}>
        Po złożeniu zamówienia towar jest pakowany w dobrze zabezpieczone, szczelne opakowanie. Dzięki temu przed długi czas zachowuje swoje właściwości i pozostaje bezpieczny przez cały proces wysyłki.</p>
      <p className={style.text}>
        Dokładamy wszelkich starań, aby zamówienie w nienaruszonym stanie docierało do adresata. Więcej informacji o procesie pakowania można znaleźć
        <Link className={style.textLink} to="/how-do-we-package"> tutaj.</Link>
      </p>
      <h2 className={style.textTitle}>Czas realizacji zamówień i dostaw</h2>
      <ol className={style.list}>
        <li className={style.listItem}>
          Termin realizacji zamówienia wynosi do 24 godzin roboczych od momentu zaksięgowania płatności, w przypadku obecności towaru w magazynie. W nielicznych przypadkach zdarza się, że zamówionego produktu chwilowo brakuje lub jest dostępny w mniejszej ilości. W takim wypadku czas wysyłki towaru może się nieznacznie przedłużyć, o czym od razu informujemy klientów.
        </li>
        <li className={style.listItem}>
          Przesyłki są wysyłane w formie przesyłki, średni czas dostawy wynosi 24-48 h od momentu zrealizowania zamówienia w sklepie.
        </li>
        <li className={style.listItem}>
          Klient ma prawo do oceny stanu przesyłki. W wypadku stwierdzenia uszkodzeń lub innych wad wynikających z nieprawidłowego sposobu transportu, należy nie przyjmować przesyłki i niezwłocznie skontaktować się ze sklepem, który podejmiedziałania mające na celu wyjaśnienie sprawy.
        </li>
      </ol>
      <h2 className={style.orderTitle}>Cennik Dostawy</h2>
      <h2 className={style.tableTitle}>Kurier DHL / GLS / InPost</h2>
      <table className={style.table}>
        <thead>
        <tr>
          <th>&nbsp;</th>
          <th>
            <p className={style.normalText}>Zakupy poniżej 80 zł</p>
            <p className={style.mobileText}> &lt; 80 zł</p>
          </th>
          <th>
            <p className={style.normalText}>Zakupy powyżej 80 zł</p>
            <p className={style.mobileText}> &gt; 80 zł</p>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td><p>Płatność przelewem</p></td>
          <td><p>8,99 zł</p></td>
          <td><p><strong>gratis</strong></p></td>
        </tr>
        <tr>
          <td><p>Płatność za pobraniem</p></td>
          <td><p>12,99 zł</p></td>
          <td><p>12,99 zł</p></td>
        </tr>
        </tbody>
      </table>
      <h2 className={style.tableTitle}>Paczkomaty InPost</h2>
      <table className={style.table}>
        <thead className={style.thead}>
        <tr>
          <th>&nbsp;</th>
          <th>
            <p className={style.normalText}>Zakupy poniżej 80 zł</p>
            <p className={style.mobileText}> &lt; 80 zł</p>
          </th>
          <th>
            <p className={style.normalText}>Zakupy powyżej 80 zł</p>
            <p className={style.mobileText}> &gt; 80 zł</p>
          </th>
        </tr>
        </thead>
        <tbody className={style.tBody}>
        <tr>
          <td><p>Płatność przelewem</p></td>
          <td><p>9,99 zł</p></td>
          <td><p><strong>gratis</strong></p></td>
        </tr>
        <tr>
          <td><p>Płatność za pobraniem</p></td>
          <td><p>12,99 zł</p></td>
          <td><p>12,99 zł</p></td>
        </tr>
        </tbody>
      </table>
      <h2 className={style.tableTitle}>Odbiór w Żabce</h2>
      <table className={style.table}>
        <thead className={style.thead}>
        <tr>
          <th>&nbsp;</th>
          <th>
            <p className={style.normalText}>Zakupy poniżej 80 zł</p>
            <p className={style.mobileText}> &lt; 80 zł</p>
          </th>
          <th>
            <p className={style.normalText}>Zakupy powyżej 80 zł</p>
            <p className={style.mobileText}> &gt; 80 zł</p>
          </th>
        </tr>
        </thead>
        <tbody className={style.tBody}>
        <tr>
          <td><p>Płatność przelewem</p></td>
          <td><p>9,99 zł</p></td>
          <td><p><strong>gratis</strong></p></td>
        </tr>
        <tr>
          <td><p>Płatność za pobraniem</p></td>
          <td><p>12,99 zł</p></td>
          <td><p>12,99 zł</p></td>
        </tr>
        </tbody>
      </table>
      <h2 className={style.textTitle}>Płatności</h2>
      <p className={style.text}>Dostępne są trzy formy płatności za zamówienia:</p>
      <ol className={style.list}>
        <li className={style.listItem}>
          <strong>Przelew bankowy:</strong> na nr konta bank <strong>00 0000 0000 0000 0000 0000 0000</strong> - w tytule przelewu prosimy o podanie numeru zamówienia oraz imienia i nazwiska składającego zamówienie, jeśli przelew jest wykonywany z innego konta.
        </li>
        <li className={style.listItem}>
          <strong>Płatnością elektroniczną przy użyciu systemu Przelewy24.pl</strong> - po złożeniu zamówienia dostępne jest przekierowanie do systemu płatności online, gdzie możliwe jest dokonanie wpłaty na konto.
        </li>
        <li className={style.listItem}>
          <strong>Płatnością za pobraniem</strong> - wpłata gotówką kurierowi.
        </li>
      </ol>
    </section>
  );
};