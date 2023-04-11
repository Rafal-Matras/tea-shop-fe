import { TitleBar } from '../../common/TitleBar/TitleBar';

import style from './TeaShopDesctription.module.css';

export const TeaShopDescription = () => {

  return (
    <section className={style.container}>
      <TitleBar title="Sklep z herbatą - herbaciany zakątek"/>
      <img className={style.image} src="/images/photo/herbata-opis.webp" alt="widok herbacianego pola"/>
      <p className={style.text}><strong>KerbacianyZakatek.pl to sklep internetowy z herbatami.</strong> Pomysł na naszą
        działalność zrodził się z zamiłowania do herbat i ziół. Picie oraz korzystanie z dobrodziejstw herbat i ziół to
        dla nas tradycja. Istniejemy już blisko 20 lat na rynku.</p>
      <p className={style.text}>W naszym sklepie można znaleźć <strong> wysokogatunkowe i aromatyczne
        herbaty.</strong> W ofercie są: czarne herbaty (np.: Darjeelling, Lapsang Souchong, Yunnan, Cejlon), zielone
        herbaty (np.: Sencha, Bancha, Genmaicha, Kukicha, Kokeicha), białe herbaty (np.: Pai Mu Tan, Fujian White, White
        Monkey, herbaty kwitnące), herbaty czerwone Pu Erh (np.: PuErh czyta, PuErh z dodatkami), oolong, wulung (np.:
        milk oolong, oolong formosa z Tajwanu), Rooibos (np.: czerwony, zielony, z ekologicznych upraw), żółte herbaty
        (np.: Sunon Yellow, Huang Da Cha), herbaty odchudzające, herbaty owocowe itp.</p>
      <p className={style.text}>W naszym sklepie dominują herbaty z Chin, Japonii, Indii, Cejlonu oraz RPA.</p>
      <p className={style.text}>Nasi Klienci najczęściej wybierają herbaty zielone, żółte i białe. To właśnie w nich się
        specjalizujemy.</p>
      <p className={style.text}>Poza herbatami, w sklepie można zakupić także różnego rodzaju kawy, zioła oraz akcesoria
        do zaparzania herbat. Na półkach z akcesoriami można znaleźć czajniki żeliwne, zaparzacze do herbat, naczynka do
        picia yerba mate, bombille, filtry itd.
        Dla zainteresowanych przygotowaliśmy także upominki i zestawy herbat na prezent.</p>
      <p className={style.text}><strong>Gwarantujemy produkty najwyższej jakości i profesjonalną obsługę.</strong></p>
      <p className={style.text}>Poznaj smaki i dusze naszych herbat. <strong>Obudź swoje zmysły!</strong></p>
    </section>
  );
};