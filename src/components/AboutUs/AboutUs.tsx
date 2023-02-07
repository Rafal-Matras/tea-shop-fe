import style from './AboutUs.module.css';

export const AboutUs = () => {

  return (
    <section className={style.container}>
      <h1 className={style.title}>Sklep z herbatą i kawą z całego świata</h1>

        <img className={style.image} src="/images/photo/about_us.webp" alt="zdjęcie szczęśliwej rodzinki"/>

        <h2 className={style.textTitle}>W 100% naturalne</h2>
        <p className={style.text}>Wszechobecne konserwanty, utwardzone tłuszcze, nadmiar soli, cukru i innych ulepszaczy w jedzeniu - to
          wszystko coraz bardziej przekonywało nas o tym, aby propagować ekologiczną żywność i zdrowy tryb życia na
          szerszą skalę. Dbanie o zdrowie stało się naszą pasją, którą po kolei zarażaliśmy nasze rodziny, sąsiadów i
          bliskich. Pomysł stworzenia miejsca, dzięki któremu także inni mogliby poznać wiele naturalnych i polecanych
          przez nas produktów, pojawił się zupełnie naturalnie. Tak powstał Herbaciany Zakątek - sklep, w którym
          prezentujemy najlepsze artykuły wytworzone w 100% z naturalnych składników.</p>
        <h2 className={style.textTitle}>Zdrowa jakość</h2>
        <p className={style.text}>W Herbacianym Zakątku znajdziesz tylko takie produkty, które bez wahania kupilibyśmy sobie i naszym rodzinom.
          Nadrzędną wartością, jaką kierujemy się przy wyborze poszczególnych artykułów, jest ich wysoka jakość,
          ekologiczne pochodzenie oraz działanie poprawiające zdrowie i wspomagające pracę organizmu. Wiele uwagi
          poświęcamy na to, aby wszystkie produkty były przechowywane, pakowane oraz transportowane zgodnie z
          europejskimi normami, z jak największą dbałością o ich świeżość i cenne właściwości.</p>
        <h2 className={style.textTitle}>Twój Herbaciany Zakątek</h2>
        <p className={style.text}>Do każdej osoby w naszym otoczeniu, a co za tym idzie, także do każdego klienta, wychodzimy z ogromnym
          szacunkiem i sympatią. Cieszymy się, że nas odwiedziłeś i chcesz nas poznać! Jesteśmy wdzięczni, że możemy
          podzielić się z tobą kawałkiem naszej codzienności. Mamy nadzieję, że już czujesz się tu jak u siebie i nasz
          kontakt nie skończy się na tej jednej wizycie. Długoterminowe relacje z klientami to przywilej w tej branży i
          mamy nadzieję, że my także będziemy mogli poznać ciebie. Do usłyszenia!</p>
        <h3 className={style.textCaption}>Załozyciele Herbacianego Zakątka</h3>
      </section>
  );
};