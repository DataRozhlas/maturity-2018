title: "Učíte se na maturitu? Data prozradí, od které zkoušky se na vaší škole nejčastěji vyhazuje"
perex: "Zkoušku z matematiky každoročně nezvládne pětina, na některých učebních oborech i polovina maturantů. Za pět let státních maturit se podíl neúspěšných téměř nezměnil."
published: "30. dubna 2018"
coverimg: https://dev.datarozhlas.cz/maturity-2018/images/flickrnda.jpg
coverimg_note: "Foto <a href='https://www.flickr.com/photos/tomfbh/171221712/in/photolist-g8yfu-9i1Dc1-23iDjDQ-5d4we-2RcEL-Badpy-cP3UA-jDp1m-qc293N-r8WK61-fZcrp-78HdFm-7EjrEh-g8y9Z-5tm1wP-qRAYXR-jDps6-2UN3v-M3sWE-898NTe-9zrTwZ-pVRbFF-qp65co-FhsQVJ-24qyi5-pDAjMe-24Ub82M-TthpCb-4XC9u4-J6Zj79-T8agGd-TthoVE-TthpyJ-GmYV9v-Stm2Ez-T8agqG-fcBto-7ktnvv-6tjjRP-6MDH78-25ziWyc-eBWbNx-G6kpF7-cEJya3-5gYuK7-ceLocU-317AA-r8WNq7-g8yc4-wUizi/'>Tom</a> | Flickr (CC BY-NC 2.0)"
styles: []
libraries: [jquery, highcharts, "https://d3js.org/d3-dsv.v1.min.js", "https://d3js.org/d3-fetch.v1.min.js"]
options: [] #wide, noheader (, nopic)
---

Ve středu začínají na středních školách maturity. Všichni studenti mají společné státní maturity – povinnou češtinu a volitelný druhý předmět. U něj si můžou vybrat mezi matematikou, angličtinou, němčinou, francouzštinou, ruštinou a španělštinou.

Podívejte se, jak dopadly loňské maturity na všech českých středních školách.

<wide>

<h3>Vyberte školu</h3>

<div class="vopicikoule">

<div class="dropdown" id="kraj">
  <button class="btn-lg btn-default dropdown-toggle" id="krajButton" type="button" data-toggle="dropdown">Kraj
  <span class="caret"></span></button>
  <p class="postbutton" id="zvolenyKraj"></p>
  <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Jihočeský</a></li>
    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Jihomoravský</a></li>
    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Karlovarský</a></li>
    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Královéhradecký</a></li>
    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Liberecký</a></li>
    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Moravskoslezský</a></li>
    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Olomoucký</a></li>
    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Pardubický</a></li>
    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Praha</a></li>
    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Plzeňský</a></li>
    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Středočeský</a></li>
    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Ústecký</a></li>
    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Vysočina</a></li>
    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Zlínský</a></li>
  </ul>
</div>

<div class="dropdown" id="obor">
  <button class="btn-lg btn-default dropdown-toggle" id="oborButton" type="button" data-toggle="dropdown">Obor
  <span class="caret"></span></button>
  <p class="postbutton" id="zvolenyObor"></p>
  <ul class="dropdown-menu" role="menu" aria-labelledby="menu1"></ul>
</div>

<div class="dropdown" id="skola">
  <button class="btn-lg btn-default dropdown-toggle" id="skolaButton" type="button" data-toggle="dropdown">Škola
  <span class="caret"></span></button>
  <p class="postbutton" id="zvolenaSkola"></p>
  <ul class="dropdown-menu" role="menu" aria-labelledby="menu1"></ul>
</div>

</div>

<div id="tabulka"></div>

&nbsp;<div id="legenda" style="visibility: hidden;"><img src="https://dev.datarozhlas.cz/maturity-2018/images/legenda-small.png" style="max-width: 100%; float: left; margin-right: 20px">
_Percentil udává úspěšnost mezi všemi studenty, kteří dělali stejný test._ PRŮMĚRNÝ PERCENTIL _podobně říká, jak úspěšní byli studenti dané školy v porovnání se studenty jiných škol. Číslo za percentilem udává rozptyl mezi studenty, kteří zkoušku dělali._

_V rámci státních maturit je povinná pouze zkouška z češtiny a jednoho dalšího předmětu: na výběr je matematika, angličtina, němčina, francouzština, španělština a ruština._ ZVOLILO _ukazuje, jaká část studentů si vybrala konkrétní předmět. Právě podíl studentů, kteří si předmět vybrali, znemožňuje jednoduché srovnání škol: u srovnatelně kvalitních škol bude mít pravděpodobně lepší výsledek ta, kde se pro zkoušku rozhodne menší část talentovanějších a lépe připravených studentů._

_S výjimkou matematiky se maturitní zkouška z předmětu skládá z didaktického testu, písemné práce a ústní zkoušky. O kterou jde, označuje sloupec_ ZKOUŠKA. _Každá část se hodnotí zvlášť, proto každou najdete v samostatném řádku. Neúspěch u jedné části znamená neúspěch maturity, nicméně stačí opravit právě tuhle část._

_Sloupec_ NEUSPĚLI _říká, kolik studentů zkoušku konalo a kolik ji nezvládlo._

_Zdroj dat: [Cermat 2017](https://vysledky.cermat.cz/data/Default.aspx)_

</div>

</wide>

## „Je to trochu nespravedlivé“

Data za všechny české školy pak odhalují řadu trendů. Například fakt, že se se státní maturitou potýkají hlavně odborné školy a učební obory. Zatímco na gymnáziích loni například zkoušku z matematiky nezvládly 4 procenta maturantů, na technických oborech neuspělo 22 procent, a na humanitních, ekonomických, zdravotnických a zemědělských školách dokonce 41 procent studentů.

Existují ovšem výjimky. Například střední odborné učiliště v Novém Strašecí: v roce 2013, kdy se státní maturity konaly poprvé, matematiku nezvládlo 12 ze 17 maturantů. Loni uspěli všichni.

„Přijali jsme celou řadu interních opatření, například změny hodinových dotací, akcentovali jsme také mezipředmětové vztahy,“ vysvětluje zlepšení ředitel učiliště Jan Nechutný. Vedle toho, že studentům nástavbových oborů přibyly hodiny matematiky, jim škola nabízí doučování a snaží se jim dodat sebedůvěru.

„Hlavní příčina úspěchu je ale motivace žáků, na té jsme hodně pracovali. Motivace žáků je klíčová,“ tvrdí ředitel. Jedním dechem ale dodává, že ne vždy uspěje. „Jednak tam byla motivace pozitivní, ale bohužel jsme museli sáhnout i k motivaci negativní. Se žáky, kteří maturitu spíš udělat nechtěli, než že by na ni neměli, jsme se museli rozloučit.“

„Upřímně řečeno, ono je to trochu nespravedlivé,“ stěžuje si Nechutný. „Říká se, že dvouletá nástavba má špatné výsledky. Neříkám, že nemá. Ale když se podíváte na strukturu hodinové dotace a srovnáte ji třeba s gymnázii, uvidíte propast: na gymnáziích mají jednak daleko větší dotaci předmětů, ze kterých maturují, jednak studují čtyři roky. Naši studenti pouze dva roky a kromě toho, že maturují ze všeobecně vzdělávacích předmětů, mají ještě praktickou část maturity a odborné předměty, kvůli kterým si šli to maturitní studium udělat. Takže mi přijde, že podmínky nejsou rovné.“

## Matematika, otloukánek státních maturit

Špatné výsledky testů z matematiky navíc dělají z předmětu otloukánka. Vybírá si ji stále méně studentů: před pěti lety z ní maturovalo 39 procent studentů, loni to bylo jen 24 procent. Mezi volitelnými předměty je proto stále dominantnější angličtina, kterou si loni vybralo jako svůj druhý předmět 73 procent studentů.

I tady je vidět propast mezi gymnázii a odbornými školami. U gymnázií je podíl matematiky i angličtiny dlouhodobě stabilní – poměrně vysoká úspěšnost znamená, že není třeba měnit zaběhnutý režim. Zato na technických a ještě víc humanitních odborných školách je patrný úprk od matematiky k angličtině.

<h3>Jak se změnila volba druhého předmětu mezi roky 2013 a 2017?</h3>

<wide>

<div style="max-width: 100%; overflow: hidden; display: block;">
  <div class="chart small" id="gymnazia"></div>
  <div class="chart small" id="technicke"></div>
  <div class="chart small" id="ostatni"></div>
</div>

</wide>

Klesá také popularita ostatních jazyků. Před pěti lety si například němčinu vybíral na zdravotnických, pedagogických a hotelových odborných školách každý třináctý student. Dnes je to každý třiatřicátý.