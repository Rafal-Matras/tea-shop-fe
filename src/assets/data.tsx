import { SliderInterface, TeaTypeInterface, TypesOfProductsInterface } from '../types';

export const productType: TypesOfProductsInterface[] = [
  {
    name: 'herbaty',
    types: ['czarna', 'zielona', 'czerwona', 'biała', 'żułta', 'niebieska', 'specjalna','świąteczna', 'earl grey', 'owocowa', 'japońska', 'oolong', 'rooibos', 'yerba mate','matcha', 'kwitnąca'],
    icon: 'herbata',
  },
  {
    name: 'kawy',
    types: ['klasyczna', 'smakowa', 'świąteczna'],
    icon: 'kawa',
  },
  {
    name: 'zioła',
    types: ['adaptogeny', 'afrodyzjaki', 'relaks i sen', 'trawienie', 'odchudzanie', 'odporność', 'wzmocnienie', 'zdrowie'],
    icon: 'ziola',
  },
  {
    name: 'akcesoria',
    types: ['porcelana', 'kawiarki', 'puszki', 'szklanki z podwujnym dnem', 'zaparzacze', 'filtry do herbaty', 'filtry do kawy', 'akcesoria do yerba mate','akcesoria do matchy', 'inne'],
    icon: 'akcesoria',
  },
  {name: 'na prezent', types: [], icon: 'prezenty'},
  {name: 'promocje', types: [], icon: 'promocja'},
];

export const teaTypes: TeaTypeInterface[] = [
  {
    name: 'Herbata Biała',
    type: 'biała',
    image: 'biała.jpg',
    description: 'Herbaty białe to wysokogatunkowe herbaty cieszące się wielkim uznaniem wśród smakoszy herbat. Sposób jej obróbki oraz fakt, że...',
    fullDescription: <><p><strong>Herbaty białe</strong> to wysokogatunkowe herbaty cieszące się wielkim uznaniem wśród
      smakoszy herbat. Sposób jej obróbki oraz fakt, że produkowana jest ona jedynie z pąków listków wpływa na jej silne
      właściwości, ale również dość wysoką cenę.</p>
      <h2>Herbata biała - smak i aromat</h2>
      <p><strong>Biała herbata</strong> charakteryzuje się delikatnym smakiem i aromatem. Jej smak, barwa i aromat są
        wynikiem delikatnej obróbki pąków listków.</p>
      <h2>Jak powstaje herbata biała?</h2>
      <p><strong>Herbata biała</strong> powstaje wyłącznie z pąków liści, które zbierane są z krzewów wczesną wiosną.
        Pora zbiorów ma znaczenie, ponieważ wczesną wiosną pąki liści nie wykształciły jeszcze chlorofilu. Zebrane pąki
        liści poddawane są obróbce. Najpierw poddawane są one delikatnej fermentacji (około 10-15 %), potem procesom
        więdnięcia i suszenia. Sposób obróbki pąków listków ma wpływ na barwę, smak oraz jej silne właściwości
        prozdrowotne.</p>
      <h2>Herbata biała - regiony upraw</h2>
      <p>Głównym producentem herbaty białej są Chiny. To właśnie Chińczycy przez wieki wypracowali tradycyjną metodę
        uprawy, obróbki i przygotowywania białej herbaty.</p>
      <h2>Jak zaparzyć herbatę białą?</h2>
      <p>Susz herbaty białej należy zalać przegotowaną wodą o temperaturze 70 – 85 st. C w zależności od rodzaju herbaty
        i parzyć około 2-7 minut. Proponowana dawka suszu to łyżeczka lub półtorej łyżeczki suszu białej herbaty na 200
        ml wody – najlepiej wody źródlanej lub przefiltrowanej.</p>
      <p><strong>Ważne:</strong> W celu uzyskania silniejszego naparu herbaty należy dodać więcej herbaty do zaparzenia,
        a nie parzyć dłużej.</p></>,
  },
  {
    name: 'Herbata Zielona',
    type: 'zielona',
    image: 'zielona.jpg',
    description: 'Herbaty zielone są najpopularniejsze w Chinach i Japonii. Jednak w Polsce zyskuje ona coraz większą sławę. Fakt ten wynika przede wszystkim z jej...',
    fullDescription: <><p><strong>Herbaty zielone</strong> są najpopularniejsze w Chinach i Japonii. Jednak w Polsce
      zyskuje ona coraz większą sławę. Fakt ten wynika przede wszystkim z jej właściwości zdrowotnych.</p>
      <p>Największą popularnością cieszą się następujące herbaty zielone: Genmaicha, Gunpowder i Sencha. Jednakże na
        rynku występują również inne rodzaje zielonych herbat np.: Matcha, Hojicha i Longjing (Smocze Źródło).</p>
      <h2>Herbata zielona - smak i aromat</h2>
      <p><strong>Herbata zielona</strong> jest delikatniejsza w smaku niż herbaty czarne, ale w bardziej wyczuwalną
        goryczką. Oczywiście każdy rodzaj herbaty zielonej charakteryzuje się swoim szczególnym smakiem. Herbaty zielone
        zostają często wzbogacone o dodatki. Najczęściej jest to kwiat lotosu i jaśmin.</p>
      <h2>Jak powstaje herbata zielona?</h2>
      <p><strong>Herbata zielona</strong> powstaje z liści tych samych krzewów herbacianych co herbata czarna. Jednakże
        liście zielonej herbaty poddawane są innym procesom obróbki niż herbaty czarne. Herbata zielona nie jest
        poddawana procesowi utleniania dzięki czemu jej liście zachowują swoją zieloną barwę i są dużo bogatsze w
        witaminy i mikroelementy niż herbaty czarne. Liście zielonej herbaty od razu po jej zbiorze poddawane są
        procesowi zwanemu deenzymacją. Proces ten zachodzi poprzez działanie pary wodnej – tak dzieje się w Japonii, lub
        poprzez prażenie liści zielonej herbaty na rozgrzanych metalowych patelniach – tak wygląda ten proces w Chinach.
        Następnie liście poddawane kształtowaniu i suszeniu.</p>
      <h2>Herbata zielona - regiony upraw</h2>
      <p>Głównymi producentami herbaty zielonej są Chiny i Japonia. Również w Wietnamie i Korei Południowej uprawiane są
        herbaty zielone.</p>
      <h2>Jak zaparzyć herbatę zieloną?</h2>
      <p>Susz herbaty zielonej należy zalać przegotowaną wodą o temperaturze 70 – 80 st. C w zależności od rodzaju
        herbaty i parzyć około 1-3 minut. Proponowana dawka suszu to łyżeczka suszu zielonej herbaty na 200 ml wody –
        najlepiej wody źródlanej lub przefiltrowanej.</p>
      <p><strong>Ważne:</strong> W celu uzyskania silniejszego naparu herbaty zielonej należy dodać więcej herbaty do
        zaparzenia, a nie parzyć dłużej.</p>
    </>,
  },
  {
    name: 'Herbata Czarna',
    type: 'czarna',
    image: 'czarna.jpg',
    description: 'Herbata czarna to z pewnością najpopularniejsza herbata w Europie. Podobnie sytuacja wygląda w USA. W tych regionach też jest nazywana herbatą czarną,...',
    fullDescription: <><p><strong>Herbata czarna</strong> to z pewnością najpopularniejsza herbata w Europie. Podobnie
      sytuacja wygląda w USA. W tych regionach też jest nazywana herbatą czarną, natomiast w państwach, skąd pochodzi,
      nazywana jest herbatą czerwoną. Różnica wynika z tego, że jedni nazwali herbatę od koloru liści gotowych do
      zaparzenia, a drudzy od czerwonawego koloru naparu.</p>
      <h2>Herbata czarna - smak i aromat</h2>
      <p>Napar herbaty czarnej na ogół ma żywy, mocny smak i aromat. Herbaty czarne zostają często wzbogacone o
        uszlachetniające dodatki, wśród których można znaleźć m.in.: owoce, pąki roślin, przyprawy i aromaty.</p>
      <h2>Jak powstaje herbata czarna?</h2>
      <p><strong>Herbata czarna</strong> powstaje z liści krzewów herbacianych Camellia sinensis. Liście zebrane z tych
        krzewów poddawane są procesom obróbki. Warto zwrócić uwagę, że procesy te różnią się w zależności od regionu –
        każdy region ma swoje tradycje i zwyczaje. Jednakże wśród podstawowych procesów obróbki liści herbaty wyróżnia
        się: więdnięcie, zwijanie, fermentowanie (utlenianie), suszenie i sortowanie.</p>
      <h2>Herbata czarna – co przesądza o jej jakości?</h2>
      <p>O jakości herbaty czarnej przesądzają liście, jakie są wykorzystywane do jej produkcji. Najwyższej jakości
        herbata to ta, która powstaje z całych liści, z górnej części krzewu herbacianego. Z kolei herbata produkowana z
        dużych liści z dolnych, czasem połamanych liści krzewu będzie gorszej jakości. Najniższej jakości herbata to ta,
        która powstaje z pyłku.</p>
      <h2>Herbata czarna - regiony upraw</h2>
      <p>Chiny, Indie i Sri Lanka to obecnie najwięksi producenci herbaty czarnej. Z tych regionów pochodzą również
        najpopularniejsze rodzaje czarnej herbaty, wśród których wyróżnia się: Yunnan, Assam, Darjeeling i Ceylon.
        Herbaty czarne produkowane są także na plantacjach afrykańskich.</p>
      <h2>Jak zaparzyć herbatę czarną?</h2>
      <p>Susz herbaty należy zalać przegotowaną wodą o temperaturze 90 – 96 st. C (w zależności od rodzaju herbaty) i
        parzyć około 2-3 minut. Nie należy przekraczać tego czasu, ponieważ taki napar może negatywnie oddziaływać na
        organizm. Proponowana dawka suszu to pół łyżeczki/łyżeczka na 200 ml.</p>
      <p><strong>Ważne:</strong> W celu uzyskania silniejszego naparu herbaty czarnej należy dodać więcej herbaty do
        zaparzenia, a nie parzyć dłużej.</p></>,
  },
  {
    name: 'Herbata Czwerwona',
    type: 'czerwona',
    image: 'czerwona.jpg',
    description: 'Herbata czerwona jest jednym z najstarszych gatunków herbat. W Chinach w prowincji Junnan, gdzie uprawiana jest czerwona herbata Pu-erh , do...',
    fullDescription: <><p><strong>Herbata czerwona</strong> jest jednym z najstarszych gatunków herbat. W Chinach w
      prowincji Junnan, gdzie
      uprawiana jest czerwona herbata Pu-erh, do dzisiejszego dnia rośnie Qingdao - prastare drzewo liczące 2000 lat. Ma
      ono 32m wysokości i ponad metr średnicy. To właśnie z jego liści wytwarza się doskonałej jakości herbaty czerwone.
    </p>
      <p>W naszym regionie do herbat czerwonych zalicza się także herbaty Oolong (Ulung, Wulung). Opis herbaty Oolong
        znajduję się w oddzielnej zakładce.</p>
      <p><strong>Herbata czerwona Pu Erh</strong> słynie ze swoich silnych właściwości leczniczych, a zwłaszcza z
        właściwości
        odchudzających. Zostały one także udowodnione przez francuskich naukowców którzy w swoich badaniach potwierdzili
        jej właściwości dotyczące spalania tkanki tłuszczowej. Zgodnie z ich badaniami 88% pacjentów pijących regularnie
        tę herbatę w ciągu miesiąca straciło 3,2-10,8 kg. Szczególnie interesujący był fakt, że spadek wagi nastąpił
        przy
        zachowaniu normalnego sposobu odżywiania i co równie ważne spadek wagi utrzymywał się. Ponadto już w starym
        chińskim traktacie lekarskim zwanym Bencao Shyi napisnao: „(…) długotrwałe picie herbaty czyni człowieka
        szczęśliwym, dbając o to by nie stał się zbyt ciężki, ani zbyt tłusty”.</p>
      <h2>Herbata czerwona Pu Erh - smak i aromat</h2>
      <p>Napar herbaty czerwonej Pu Erh cechuje się ziemisto-korzennym smakiem i aromatem. Nie wszystkim ten smak może
        przypaść do gustu dlatego też, wzbogaca się ten rodzaj herbaty o dodatki uszlachetniające w postaci ziół czy
        owoców. Częstym dodatkiem jest Żeńszeń lub Żurawina.</p>
      <h2>Jak powstaje herbata czerwona Pu Erh?</h2>
      <p>Po zebraniu listków herbaty poddawane są one obróbce, którą rozpoczyna proces więdnięcia liści. Po utracie
        wilgoci
        listki herbaty umieszczane są w specjalnych bambusowych koszach i potrząsane w celu otarcia brzegów blaszek
        liściowych co w konsekwencji ułatwia przebieg procesu fermentacji. Po kilku godzinach proces fermentacji zostaje
        przerwany i rozpoczyna się suszenie liści.</p>
      <p>Po wyżej opisanej obróbce liście herbaty Pu Erh trafiają do specjalnie przygotowywanych pomieszczeń w celu
        leżakowania na kilka do kilkudziesięciu lat. W tym czasie dojrzewająca Pu Erh nabiera wyjątkowych właściwości.
        Udowodniono, że zdrowotne działanie herbaty czerwonej Pu Erh jest tym skuteczniejsze, im dłużej pozwala jej się
        dojrzewać. Herbata Pu-Erh może leżakować nawet kilkadziesiąt lat.</p>
      <h2>Herbata czerwona - regiony upraw</h2>
      <p><strong>Herbaty czerwone Pu Erh</strong> powstają w Chinach w prowincji Junnan.</p>
      <h2>Jak zaparzyć herbatę czerwoną?</h2>
      <p>Susz herbaty czerwonej Pu Erh należy zalać przegotowaną wodą o temperaturze 95 st. C i parzyć około 3-5 minut.
        Proponowana dawka to łyżeczka suszu czerwonej herbaty Pu Erh na 200 ml wody – najlepiej wody źródlanej lub
        przefiltrowanej.</p>
      <p><strong>Ważne:</strong> Nie należy słodzić czerwonych herbat Pu Erh, ponieważ jej właściwości zdrowotne ulegają
        wtedy redukcji.</p></>,
  },
  {
    name: 'Herbata Żułta',
    type: 'żułta',
    image: 'żułta.jpg',
    description: 'Herbata żółta jest mało znana na starym kontynencie. Jest też trudno dostępna ze względu na  fakt, że jest produkowana w niewielkich...',
    fullDescription: <><p><strong>Herbata żółta</strong> jest mało znana na starym kontynencie. Jest też trudno dostępna
      ze względu na fakt, że jest produkowana w niewielkich ilościach.</p>
      <p><strong>Herbatę żółtą</strong> nazywa się również herbatą cesarską. Jest to wynik zaszłości historycznych.
        Kiedyś w Chinach tylko na dworze cesarskim herbata ta mogła być spożywana. Ponadto kolor żółty to kolor
        cesarski.</p>
      <h2>Herbata żółta - smak i aromat</h2>
      <p><strong>Herbata żółta</strong> ma delikatny, świeży smaki i aromat. Jej smak, barwa i aromat są wynikiem
        delikatnej obróbki pąków listków.</p>
      <h2>Jak powstaje herbata żółta i jakie są rodzaje herbaty żółtej?</h2>
      <p><strong>Herbaty żółte</strong> powstają z młodziutkich pędów, pączków liści i dopiero co rozwijających się
        liści krzewów herbacianych. Po ich zbiorze są one poddawane procesowi więdnięcia lub od razu procesowi suszenia.
        Suszenie może odbywać się w cieniu lub na słabym słońcu. Zbiory poddawane są też procesowi zwanemu Men Dui czyli
        fermentacji nienzymatycznej.</p>
      <p><strong>Herbata zółta</strong> posiada wiele odmian. Różnią się między sobą stopniem fermentacji i momentem
        przebiegu procesu Men
        Dui. Herbaty żółte dzieli się ze względu na dojrzałość liści i według tej klasyfikacji wyodrębnia się:</p>
      <p> ● Herbaty żółte pąkowe – powstają jedynie z pąków, także z pędów o jednym pąku i jednym liściu.</p>
      <p> ● Herbaty żółte drobnoliściowe – powstają z pąków i młodych liści.</p>
      <p> ● Herbaty żółte liściowe – powstają z pędów o jednym pąku i kilku dojrzałych liści.</p>
      <h2>Herbata żółta - regiony upraw</h2>
      <p><strong>Herbata żółta</strong> produkowana jest w niewielkich ilościach, głównie w Chinach w prowincji Fujian i
        na Tajwanie.</p>
      <h2>Jak zaparzyć herbatę żółtą?</h2>
      <p>Susz herbaty żółtej należy zalać przegotowaną wodą o temperaturze 70 – 80 st. C w zależności od rodzaju herbaty
        i
        parzyć około 3-5 minut. Proponowana dawka suszu to łyżeczka łyżeczki suszu białej herbaty na 200 ml wody –
        najlepiej wody źródlanej lub przefiltrowanej.</p></>,
  },
  {
    name: 'Herbata Owocowa',
    type: 'owocowa',
    image: 'owocowa.jpg',
    description: 'Herbaty owocowe to smaczne i aromatyczne mieszanki wyselekcjonowanych owoców . Herbaty owocowe na ogół przygotowywane są na bazie hibiskusa....',
    fullDescription: <><p><strong>Herbaty owocowe</strong> to smaczne i aromatyczne mieszanki wyselekcjonowanych owoców.
      Herbaty owocowe na ogół przygotowywane są na bazie hibiskusa. Dzięki hibiskusowi, herbaty owocowe bogate są w
      witaminę C.</p>
      <p><strong>Herbaty owocowe</strong> mają wyśmienity smak i przyjemny owocowy aromat. Można je pić na ciepło i
        zimno. Część z nich nadaje się doskonale jako baza do herbaty mrożonej.</p>
      <p><strong>Herbaty owocowe</strong> mogą być spożywane o każdej porze dnia. Nadają się doskonale również dla
        dzieci.</p>
      <h2>Sposób przygotowania herbaty owocowej:</h2>
      <p><strong>Herbatę owocową</strong> należy parzyć około 4-7 min., w temperaturze wody 95 st. C.
        Proponowana dawka to pół łyżeczki na filiżankę (100 ml).</p></>,
  },
  {
    name: 'Herbata Oolong',
    type: 'oolong',
    image: 'oolong.jpg',
    description: 'Herbata Oolong to herbata półfermentowana (utleniona) łącząca cechy herbaty czarnej i herbaty zielonej. Herbata Oolong jest bardzo popularna w...',
    fullDescription: <><p><strong>Herbata Oolong</strong> to herbata półfermentowana (utleniona) łącząca cechy herbaty
      czarnej i herbaty zielonej. Herbata Oolong jest bardzo popularna w Chinach. Na naszym kontynencie zainteresowanie
      nią też stale rośnie. W Polsce herbatę Oolong nazywana jest też herbatą czerwoną.</p>
      <h2>Herbata Oolong - smak i aromat</h2>
      <p><strong>Herbaty Oolong</strong> są znane przede wszystkim ze swojego słodkiego smaku i kwiatowego aromatu.</p>
      <h2>Jak powstaje herbata Oolong?</h2>
      <p>Liście herbaty Oolong tuż po zbiorze poddawane są procesowi więdnięcia, a gdy utraci wilgoć umieszczane są one
        w
        bambusowych koszach. Kosze te są silnie potrząsane tak by doprowadzić do otarcia krawędzi blaszek liściowych, co
        z
        kolei ułatwia fermentację. Fermentacja trwa kilka godzin. Następnie liście są poddawane procesowi suszenia w
        wysokiej temperaturze. Herbaty Oolong w Chinach przechodzą fermentację w około 20%, na Tajwanie zaś w około 60%.
        Warto zwrócić uwagę, że herbaty Oolong nie przechodzą procesu zwijania.</p>
      <h2>Herbata Oolong - regiony upraw</h2>
      <p>Herbatę Oolong produkuje się w Chinach i na Tajwanie.</p>
      <h2>Jak zaparzyć herbatę Oolong?</h2>
      <p><strong>Herbaty Oolong</strong> należy parzyć około 3-5 min., w temperaturze wody 90 st. C. Proponowana dawka
        to łyżeczka suszu na 200 ml wody – najlepiej źródlanej lub przefiltrowanej.</p></>,
  },
  {
    name: 'Herbata Specjalna',
    type: 'specialna',
    image: 'specjalna.jpg',
    description: 'Herbaty specjalne to mieszanki ziołowe lub owocowe. Herbaty specjalne są na ogół aromatyczne. Ich smak i aromat zależy od składników w...',
    fullDescription: <><p><strong>Herbaty specjalne</strong> to mieszanki ziołowe lub owocowe.</p>
      <p><strong>Herbaty specjalne</strong> są na ogół aromatyczne. Ich smak i aromat zależy od składników w niej
        zawartych. Mogą być jednoskładnikowe lub wieloskładnikowe.</p></>,
  },
  {
    name: 'Herbata Rooibos',
    type: 'rooibos',
    image: 'rooibos.jpg',
    description: 'Rooibos to herbata nie zawierająca teiny. Produkowana z liści czerwonokrzewu afrykańskiego (Aspalathus linearis). Rooibos nazywany jest herbatą ze względu...',
    fullDescription: <><p>Rooibos to herbata nie zawierająca teiny. Produkowana z liści czerwonokrzewu afrykańskiego
      (Aspalathus linearis). Rooibos nazywany jest herbatą ze względu na sposób przyrządzania, natomiast krzew
      aspalathus linearis z którego powstaje Rooibos nie jest spokrewniony z krzewami herbacianymi camellia
      sinensis.</p>
      <p>Napar Rooibos charakteryzuje się słodkim, kwiatowym aromatem oraz orzeźwiającym smakiem. Jest doskonały do
        picia
        na zimno, jak również na gorąco. Można go pić przez cały dzień, nawet przed snem, ponieważ nie zawiera
        działającej
        pobudzająco teiny. Ponadto warto zwrócić uwagę, że Rooibos działa odprężająco i polecany jest osobom, które mają
        problemy ze snem.</p>
      <h2>Sposób przygotowania Rooibos:</h2>
      <p><strong>Herbatę Rooibos</strong> należy parzyć 3-5 min., w temperaturze wody 90-95 st. C.
        Proponowana dawka to łyżeczka na filiżankę.</p></>,
  },
  {
    name: 'Herbata Yerba Mate',
    type: 'yerba mate',
    image: 'yerba-mate.jpg',
    description: 'Yerba Mate to w pełni naturalny napój uzyskiwany z liści wiecznie zielonego krzewu - ostrokrzewu paragwajskiego. Napar Yerba Mate został odkryty... type:',
    fullDescription: <><p><strong>Yerba Mate</strong> to w pełni naturalny napój uzyskiwany z liści wiecznie zielonego
      krzewu - ostrokrzewu paragwajskiego. Napar Yerba Mate został odkryty przez Indian z plemienia Guarani. Już oni
      dostrzegli jego niezwykłe właściwości. Dzisiaj Yerba Mate ma coraz więcej fanów na całym świecie, także w Polsce.
    </p>
      <h2>Smak Yerba Mate</h2>
      <p>Na rynku oferowanych jest około 200 różnych marek i różnią się one właściwościami, smakiem i aromatem. Cześć z
        nich jest mocna o tradycyjnym smaku, a część delikatniejsza i np. wzbogacona o dodatki.</p>
      <h2>Jak powstaje Yerba Mate i skąd pochodzi?</h2>
      <p>Ostrokrzew paragwajski z którego powstaje Yerba Mate to roślina osiągająca kilka metrów wysokości o na ogół
        twardych i spiczastych liściach. Proces przygotowania Yerba Mate zaczyna się od suszenia ściętych gałęzi. Odbywa
        się to nad ogniem lub w suszarkach bębnowych. W następnej kolejności oddziela się liście od gałęzi by je
        rozdrobnić lub zmielić.</p>
      <p>Krzewy ostrokrzewu paragwajskiego hodowane są w Ameryce Południowej. Ich plantacje rozciągają się od podnóży
        wschodnich Andów aż po wybrzeże Oceanu Atlantyckiego.</p>
      <h2>Sposób przygotowania Yerba Mate</h2>
      <p>Należy wsypać susz Yerba Mate do specjalnego naczynia do picia Yerba Mate. Susz powinien zajmować około 3/4 lub
        1/2 objętości naczynia. Następnie należy włożyć bombillę i zalać susz wodą o temperaturze od 70 do 80 st. C. Po
        3
        minutach napar jest gotowy do spożycia. Nie należy mieszać naparu.</p></>,
  },
];

export const sliderList: SliderInterface[] = [
  {id: 1, image: 'blackTea.jpg', product: 'herbaty', productType: 'czarna'},
  {id: 2, image: 'newProducts.jpg', product: 'nowości', productType: ''},
  {id: 3, image: 'coffeeClassic.jpg', product: 'kawy', productType: 'klasyczna'},
  {id: 4, image: 'greenTea.jpg', product: 'herbaty', productType: 'zielona'},
  {id: 5, image: 'redTea.jpg', product: 'herbaty', productType: 'czerwona'},
  {id: 6, image: 'coffee.jpg', product: 'kawy', productType: ''},
  {id: 7, image: 'blueTea.jpg', product: 'herbaty', productType: 'niebieska'},
  {id: 8, image: 'gift.jpg', product: 'na prezent', productType: ''},
];