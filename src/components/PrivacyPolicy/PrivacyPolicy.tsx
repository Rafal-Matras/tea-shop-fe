import style from './PrivacyPolicy.module.css';

export const PrivacyPolicy = () => {

  return (
    <section className={style.container}>
      <h1 className={style.title}>Polityka prywatności</h1>
      <h2 className={style.textTitle}>I. Administrator danych</h2>
      <p className={style.text}>
        Administratorem danych osobowych przetwarzanych w związku z korzystaniem ze strony internetowej, korzystaniem sklepu internetowego jest Adam Nowak prowadzący działalność spółki cywilnej pod firmą Herbaciany Zakątek S.C. z miejscem prowadzenia działalności w Warszawie, ul. Herbaciana 12 m 1, 01 - 123 Warszawa, wpisanym do Centralnej Ewidencji i Informacji o Działalności Gospodarczej o numerze NIP: 1234567899, REGON 123456789
      </p>
      <h2 className={style.textTitle}>II. Cel przetwarzania danych</h2>
      <p className={style.text}>Przetwarzamy dane osobowe:</p>
      <ol className={style.orderList}>
        <li className={style.orderItem}>
          w zakresie niezbędnym do nawiązania i prawidłowej realizacji usługi świadczonej drogą elektroniczną,
        </li>
        <li className={style.orderItem}>
          w celu zawarcia umowy i realizacji składanych przez Klientów zamówień na towary znajdujące się w asortymencie sklepu internetowego, wykonania umowy, wykonania prawa do odstąpienia od umowy
        </li>
        <li className={style.orderItem}>
          w celu w celu rozpatrywania składanych reklamacji oraz zwrotu świadczeń w przypadku odstąpienia od umowy (zwrotu towaru);
        </li>
        <li className={style.orderItem}>
          w celu wykonania obowiązków określonych prawem, w szczególności prawem podatkowym
        </li>
        <li className={style.orderItem}>
          w przypadku subskrypcji newslettera – w celu realizacji usługi newsletteru.
        </li>
      </ol>
      <p className={style.text}>
        Podanie danych osobowych jest dobrowolne, jednakże brak zgody na przetwarzanie przez nas danych osobowych może uniemożliwić nam świadczenie usług drogą elektroniczną oraz dokonywanie zakupów w Sklepie Internetowym.</p>
      <h2 className={style.textTitle}>III. Podstawy prawne przetwarzania danych osobowych</h2>
      <p className={style.text}>
        W związku z tym, iż różne są cele przetwarzania danych, również podstawy prawne przetwarzania danych przez Administratora mogą być różne. Przetwarzamy dane osobowe na następujących podstawach prawnych:
      </p>
      <ol className={style.orderList}>
        <li className={style.orderItem}>
          w przypadku korzystania ze sklepu internetowego - w celu zawarcia i wykonania umowy – podstawa prawna to art. 6 ust. 1 lit b) RODO,
        </li>
        <li className={style.orderItem}>
          w przypadku składania reklamacji, odstąpienia od umowy wykonania umowy – podstawa prawna to art. 6 ust. 1 lit b) RODO – wykonanie umowy, oraz art. 6 ust. 1 lit c) – wykonanie obowiązków określonych prawem,
        </li>
        <li className={style.orderItem}>
          wykonanie obowiązku prawnego - podstawa prawna to art. 6 ust. 1 lit c) RODO.
        </li>
        <li className={style.orderItem}>
          w przypadku subskrypcji newsletteru – podstawa prawna to zgoda - 6 ust 1 lit a) RODO
        </li>
      </ol>
      <p className={style.text}>
        <strong>Przetwarzanie danych na podstawie uzasadnionego interesu</strong>
      </p>
      <p className={style.text}>
        Z uwagi na uzasadniony interes możemy przetwarzać dane osobowe w celach:
      </p>
      <ol className={style.orderList}>
        <li className={style.orderItem}>
          w celu prowadzenia sklepu internetowego oraz w zakresie niezbędnym do nawiązania i prawidłowej realizacji usługi świadczonej drogą elektroniczną – podstawa prawna to art. 6 ust .1 lit c) RODO;
        </li>
        <li className={style.orderItem}>
          archiwalnych (dowodowych), będących realizacją naszego prawnie uzasadnionego interesu związanego z zapewnieniem niezakłóconego prowadzenia działalności, jak również zabezpieczenia informacji na wypadek prawnej potrzeby wykazania faktów - podstawa prawna  art. 6 ust. 1 lit. f) RODO;
        </li>
        <li className={style.orderItem}>
          w celu ewentualnego ustalenia, dochodzenia lub obrony przed roszczeniami, będącego realizacją naszego prawnie uzasadnionego w tym interesu - podstawa prawna z art. 6 ust. 1 lit. f) RODO;
        </li>
        <li className={style.orderItem}>
          w celach analitycznych – dla tworzenia analiz, zestawień na potrzeby wewnętrzne, planowania i rozwoju działalności, w tym procesów budowania renomy Administratora, w celu optymalizacji i usprawnienia obsługi korzystających ze strony, sklepu internetowego - podstawa prawna z art. 6 ust. 1 lit. f ) RODO;
        </li>
      </ol>
      <h2 className={style.textTitle}>III. Kto może być odbiorcą danych osobowych</h2>
      <p className={style.text}>
        W związku z prowadzeniem działalności wymagającej przetwarzania danych osobowych, dane te mogą być udostępniane innym podmiotom. W szczególności dane osobowe mogą być udostępniane następującym podmiotom:
      </p>
      <ul className={style.list}>
        <li className={style.item}>
          podmioty świadczące usługi informatyczne i zapewniające oprogramowanie,
        </li>
        <li className={style.item}>
          podmioty świadczące usługi prawne, księgowe,
        </li>
        <li className={style.item}>
          podmioty świadczące usługi pocztowe lub kurierskie, podmioty, którym przekazanie danych jest konieczne dla realizacji umowy,
        </li>
        <li className={style.item}>
          organy państwowe, samorządowe oraz inne instytucje publiczne w związku z realizacją obowiązków określonych prawem.
        </li>
      </ul>
      <h2 className={style.textTitle}>IV. Okres przetwarzania danych osobowych</h2>
      <p className={style.text}>
        Okres przetwarzania danych przez Administratora zależy od podstawy prawnej przetwarzania i celu przetwarzania.
      </p>
      <ul className={style.list}>
        <li className={style.item}>
          w przypadku, gdy podstawę przetwarzania stanowi niezbędność do zawarcia i wykonania umowy, dane będą przetwarzane do momentu zakończenia jej obowiązywania;
        </li>
        <li className={style.item}>
          gdy podstawą przetwarzania stanowią przepisy prawa – okres ich przetwarzania określa prawo;
        </li>
        <li className={style.item}>
          w przypadku przetwarzania danych na podstawie uzasadnionego interesu Administratora – dane przetwarzane są przez okres umożliwiający jego realizację lub do zgłoszenia skutecznego sprzeciwu względem przetwarzania danych;
        </li>
        <li className={style.item}>
          w przypadku udzielonej zgody – do momentu jej cofnięcia.
        </li>
      </ul>
      <h2 className={style.textTitle}>V. Organ nadzoru w zakresie danych osobowych</h2>
      <p className={style.text}>
        Informujemy, iż organem nadzoru w zakresie zgodności z prawem przetwarzania danych osobowych jest Prezes Urzędu Ochrony Danych Osobowych.
      </p>
      <h2 className={style.textTitle}>VI. Prawa osób, których dane dotyczą</h2>
      <p className={style.text}>
        Osobom, których dane dotyczą na zadach określonych przepisami prawa przysługują następujące prawa:
      </p>
      <ul className={style.list}>
        <li className={style.item}>
          dostępu do treści swoich danych osobowych oraz ich poprawiania i sprostowania;
        </li>
        <li className={style.item}>
          do usunięcia danych osobowych;
        </li>
        <li className={style.item}>
          ograniczenia przetwarzania danych osobowych;
        </li>
        <li className={style.item}>
          przenoszenia danych osobowych – gdy przetwarzanie danych następuje na podstawie zgody, umowy oraz jest dokonywane automatycznie;
        </li>
        <li className={style.item}>
          wniesienia sprzeciwu wobec ich przetwarzania;
        </li>
        <li className={style.item}>
          do wniesienia skargi do organu nadzorczego - Prezesa Urzędu Ochrony Danych Osobowych;
        </li>
        <li className={style.item}>
          cofnięcia w każdym czasie zgody na przetwarzanie danych;
        </li>
      </ul>
      <h2 className={style.textTitle}>VII. Zgłaszanie żądań związanych z realizacją praw</h2>
      <p className={style.text}>
        Wniosek dotyczący realizacji praw do danych osobowych, można złożyć:
      </p>
      <ul className={style.list}>
        <li className={style.item}>
          w formie korespondencji na adres: Herbaciany Zakątek S.C. ul. Herbaciana 12 m1, 01-123 Warszawa
        </li>
        <li className={style.item}>
          drogą e-mailową, na adres: info@herbaciany-zakatek.pl
        </li>
      </ul>
      <h2 className={style.textTitle}>Polityka dotycząca Ciasteczek</h2>
      <p className={style.text}>
        Przez używanie niniejszej strony wyrażasz zgodę na używanie ciasteczek zgodnie z tą Polityką Ciasteczek. Jeżeli nie wyrażasz zgody na używanie przez stronę ciasteczek, musisz zmienić ustawienia swojej przeglądarki albo zrezygnować z używania niniejszej strony.
      </p>
      <p className={style.text}>
        <strong>Co to są ciasteczka?</strong><br/>
        Ciasteczka (ang. cookies) to małe pliki, które są zapisywane i przechowywane na Twoim komputerze, tablecie albo smartphonie w trakcie przeglądania przez Ciebie stron internetowych. Ciasteczko przeważnie zawiera nazwę danej strony internetowej, czas istnienia ciasteczka oraz unikatowy numer, który służy do identyfikacji przeglądarki, z której nastąpiło wejście na daną stronę internetową.
      </p>
      <p className={style.text}>
        <strong>W jakim celu wykorzystujemy cookies?</strong><br/>
        Strona używa ciasteczek w różnych celach:
      </p>
      <ul className={style.list}>
        <li className={style.item}>
          aby ułatwić i usprawnić użytkowanie niniejszej strony,
        </li>
        <li className={style.item}>
          aby treści wyświetlanie na niniejszej stronie zostały dostosowane do preferencji użytkownika
        </li>
        <li className={style.item}>
          do celów statystycznych, aby możliwe było ulepszanie niniejszej strony
        </li>
      </ul>
      <p className={style.text}>
        Wykorzystujemy ciasteczka tylko na te sposoby, nie identyfikując na ich podstawie tożsamości użytkownika.
      </p>
      <p className={style.text}>
        <strong>Jak długo trwa przechowywanie danych w ciasteczkach?</strong><br/>
        Na stronie mogą być wykorzystywane dwa rodzaje ciasteczek – sesyjne oraz stałe. Ciasteczka pierwszego typu pozostaną na Twoim urządzeniu wyłącznie w trakcie użytkowania strony. Ciasteczka stałe pozostają na Twoim urządzeniu tyle czasu, ile trwa ich „życie”, do chwili. Kiedy zostaną przez Ciebie usunięte.
      </p>
      <p className={style.text}>
        <strong>Typy ciasteczek wykorzystywanych na stronie</strong>
      </p>
      <ul className={style.list}>
        <li className={style.item}>
          Ciasteczka niezbędne do działania strony - konieczne do bezbłędnego działania strony. Umożliwiają poruszanie się po stronie i korzystanie z jej elementów, np. mogą zapamiętać wykonaną wcześniej czynność.
        </li>
        <li className={style.item}>
          Ciasteczka zwiększające efektywność - gromadzenie danych na temat sposobów korzystania ze strony przez jej użytkowników, m.in. odwiedzanych przez nich obszarów, spędzanego na stronie czasu, napotykanych błędów. Dzięki temu możemy poprawiać funkcjonalność strony.
        </li>
        <li className={style.item}>
          Ciasteczka ulepszające działanie - przechowywanie informacji na temat Twoich preferencji (np. zapamiętywanie loginu), dzięki czemu możliwe jest wyświetlanie treści dostosowanych do indywidualnych oczekiwań użytkownika.
        </li>
        <li className={style.item}>
          Ciasteczka reklamowe - dzięki nim wyświetlane są reklamy, które spełniają Twoje oczekiwania i odpowiadają na Twoje potrzeby. Ciasteczka te umożliwiają nam mierzenie efektów kampanii marketingowych.
        </li>
      </ul>
      <p className={style.text}>
        <strong>Czy wykorzystujemy ciasteczka podmiotów trzecich?</strong><br/>
        Tak, używając strony możesz trafić na ciasteczka, które wywodzą się z zewnętrznych stron jak np. portale społecznościowe, a także od podmiotów, które zamieszczają reklamy na stronie. Szczegóły dotyczące tych ciasteczek znajdziesz na stronach internetowych poszczególnych podmiotów trzecich.
      </p>
      <p className={style.text}>
        <strong>Czy mogę usunąć ciasteczka?</strong><br/>
        Domyślnym ustawieniem w większości przeglądarek jest przyjmowanie ciasteczek. W każdej chwili masz możliwość zmiany ustawień przeglądarki, by zablokować ciasteczka całkowicie albo częściowo, np. wyłącznie od stron trzecich lub aby za każdym razem dostawać informację o przyjmowaniu ciasteczek. Nie zapominaj, że blokada ciasteczek może mieć niekorzystny wpływ na wygodę użytkowania strony, a także wiązać się z brakiem możliwości korzystania z niektórych elementów strony.
      </p>
      <p className={style.text}>
        <strong>Zmiana ustawień ciasteczek</strong>
        Jeśli nie zezwalasz na przyjmowanie ciasteczek od strony, możesz usunąć Cookies. Każda przeglądarka internetowa umożliwia zablokowanie ciasteczek:
      </p>
      <p className={style.text}>
        <strong>Mozilla Firefox</strong><br/>
        W górnym menu „Narzędzia" kliknij "Opcje", a następnie zakładkę "Prywatność". Ta przeglądarka umożliwia zablokowanie ciasteczek całkowicie bądź częściowo.
      </p>
      <p className={style.text}>
        <strong>Google Chrome</strong><br/>
        Prawy górny róg przeglądarki oznaczony jest trzema poziomymi liniami – jest to menu, z którego należy wybrać „Narzędzia”, a następnie „Wyczyść dane przeglądania…”. Poza opcją usunięcia ciasteczek możemy również kliknąć „Więcej informacji”, dzięki czemu uzyskamy dostęp do informacji na temat funkcji prywatności przeglądarki.
      </p>
      <p className={style.text}>
        <strong>Microsoft Edge</strong><br/>
        Korzystając z menu "Narzędzia", należy wybrać "Opcje internetowe", a następnie zakładkę "Prywatność". Dzięki suwakowi można określić poziom prywatności lub też zmieniać ustawienia konkretnych stron posługując się przyciskiem „Witryny”.
      </p>
      <p className={style.text}>
        <strong>Opera</strong><br/>
        W lewym górnym rogu przeglądarki znajduje się przycisk „Opera”. Należy otworzyć menu, wybrać „Ustawienia”, a następnie "Wyczyść historię przeglądania...". Poza możliwością usunięcia ciasteczek, jest tam też przycisk "Zarządzaj ciasteczkami...", aby uzyskać dostęp do szczegółowych opcji dla konkretnych stron.
      </p>
      <p className={style.text}>
        <strong>Apple Safari</strong><br/>
        Z menu "Safari" wybieramy "Preferencje" , a następnie "Prywatność". Znajdują się tam różne opcje związane z ciasteczkami.
      </p>
      <p className={style.text}>
        <strong>Telefony komórkowe, tablety i inne urządzenia mobilne</strong><br/>
        Tego typu urządzenia obsługują ciasteczka na różne sposoby. W związku z tym zalecamy wizytę na stronie producenta danego urządzenia, by zapoznać się z opcjami prywatności.
      </p>
    </section>
  )
}