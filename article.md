title: "Co se na poslední chvíli doučit? Podívejte se, jak dopadly státní maturity na vaší škole loni"
perex: ""
published: "25. dubna 2018"
coverimg: https://dev.datarozhlas.cz/maturity-2018/images/flickrnda.jpg
coverimg_note: ""
styles: []
libraries: [jquery, "https://d3js.org/d3-dsv.v1.min.js", "https://d3js.org/d3-fetch.v1.min.js"]
options: [] #wide, noheader (, nopic)
---

<wide><h3>Vyberte školu</h3></wide>

<wide><div class="vopicikoule">

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

</div></wide>

<wide><div id="tabulka"></div></wide>

<wide><div id="legenda" style="visibility: hidden;"><img src="https://dev.datarozhlas.cz/maturity-2018/images/legenda-small.png" style="max-width: 100%; float: left; margin-right: 20px">_Percentil udává úspěšnost mezi všemi studenty, kteří dělali stejný test._ PRŮMĚRNÝ PERCENTIL _podobně říká, jaká je pozice dané školy mezi školami v oboru (například studentů čtyřletého gymnázia na dané škole mezi všemi studenty čtyřletých gymnázií). Číslo za percentilem udává rozptyl mezi studenty, kteří zkoušku dělali._

_V rámci státních maturit je povinná pouze zkouška z češtiny a jednoho dalšího předmětu: na výběr je matematika, angličtina, němčina, francouzština, španělština a ruština._ VOLBA PŘEDMĚTU _ukazuje, jaká část studentů si vybrala konkrétní předmět. Právě podíl studentů, kteří si předmět vybrali, znemožňuje jednoduché srovnání škol: u srovnatelně kvalitních škol bude mít pravděpodobně lepší výsledek ta, kde se pro zkoušku rozhodne menší část talentovanějších a lépe připravených studentů._

_S výjimkou matematiky se maturitní zkouška z předmětu skládá z didaktického testu, písemné práce a ústní zkoušky. O kterou jde, označuje sloupoec_ ZKOUŠKA. _Každá část se hodnotí zvlášť, proto každou najdete v samostatném řádku. Neúspěch u jedné části znamená neúspěch maturity, nicméně stačí opravit právě tuhle část._

_Sloupec_ NEUSPĚLI _říká, kolik studentů zkoušku konalo a kolik ji nezvládlo._

_Zdroj dat: [Cermat](https://vysledky.cermat.cz/data/Default.aspx)_

</div></wide>
