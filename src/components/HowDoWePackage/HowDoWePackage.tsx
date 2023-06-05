import style from './HowDoWePackage.module.css';

export const HowDoWePackage = () => {

  return (
    <section className={style.container}>
      <h1 className={style.title}>Jak pakujemy?</h1>
      <img
        className={style.textImage}
        src="/images/onPage/torebka-doypack.webp"
        alt="zdjęcie przedstawiające opakowanie herbat"
      />
      <p className={style.text}>
        Wiemy jak ważne jest, aby herbata lub kawa zachowała swój smak i aromat przez długi czas.
      </p>
      <p className={style.text}>
        Dlatego <strong>produkty</strong> zamawiane w sklepie Herbaciany Zakątek <strong>pakujemy w eleganckie i
        szczelne opakowania Doypack</strong>.
      </p>
      <p className={style.text}>
        Opakowania Doypack są wyposażone w zamknięcie strunowe, które pozwala na wielokrotne otwieranie i zamykanie
        produktu.
      </p>
      <p className={style.text}>
        Opakowania te zapewniają skuteczną ochronę przed czynnikami zewnętrznymi. Natomiast wysoka barierowość
        opakowań <strong>zapewnia zachowanie smaku, aromatu i wartości odżywczych przez długi czas</strong>.
      </p>
      <p className={style.text}>
        Dbając o najwyższą jakość dostarczanego produktu opakowania są <strong>dodatkowo zgrzewane</strong>.
      </p>
      <p className={style.text}>
        Na każdym opakowaniu znajdują się dwie etykiety przednia i tylna. Na opakowaniu znajdziemy pełną informacją o
        produkcie - <strong>skład, instrukcję parzenia,</strong> kraj pochodzenia, wartości odżywcze oraz termin
        przydatności do spożycia.
      </p>
      <p className={style.text}>
        <strong>Wymiary opakowań:</strong>
      </p>
      <p className={style.text}>
        <span>●</span> 110 x 65 x 185 mm<br/>
        <span>●</span> 130 x 70 x 225 mm
      </p>
      <h2 className={style.textTitle}>Zalety opakowań Doypack</h2>
      <img className={style.image}
           src="/images/onPage/opakowanie-doypack-zalety.webp"
           alt="zdjęcie zalet opakowania doypack"
      />
      <h2 className={style.textTitle}>Pakowanie przesyłek</h2>
      <p className={style.text}>
        <strong>Dużą uwagę przywiązujemy do pakowania przesyłek.</strong> Starannie zabezpieczamy paczki, tak aby towar
        dotarł do klienta w nienaruszonym stanie.
      </p>
      <p className={style.text}>
        Produkty wkładane są do kartonowego pudełka i dodatkowo zabezpieczonego folią bąbelkową. Całość zaklejana jest
        firmowymi taśmami i wysyłana do Państwa priorytetem.
      </p>
      <p className={style.text}>
        Dzięki profesjonalnemu pakowaniu w naszych przesyłkach zamówione produkty są zawsze całe, a
        <strong>Państwo mogą się cieszyć smakiem i aromatem przez długi czas.</strong>
      </p>
        <img
          className={style.endImage}
          src="/images/onPage/pakowanie-paczek.webp"
          alt="zdjęcie przedstawiające sposób pakowania paczek"
        />
    </section>
  );
};