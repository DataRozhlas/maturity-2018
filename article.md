title: "Co se na poslední chvíli doučit? Podívejte se, jak dopadly státní maturity na vaší škole loni"
perex: ""
published: "25. dubna 2018"
coverimg: https://www.flickr.com/photos/tomfbh/171221712/in/photolist-g8yfu-9i1Dc1-23iDjDQ-5d4we-2RcEL-Badpy-cP3UA-jDp1m-qc293N-r8WK61-fZcrp-78HdFm-7EjrEh-g8y9Z-5tm1wP-qRAYXR-jDps6-2UN3v-M3sWE-898NTe-9zrTwZ-pVRbFF-qp65co-FhsQVJ-24qyi5-pDAjMe-24Ub82M-TthpCb-4XC9u4-J6Zj79-T8agGd-TthoVE-TthpyJ-GmYV9v-Stm2Ez-T8agqG-fcBto-7ktnvv-6tjjRP-6MDH78-25ziWyc-eBWbNx-G6kpF7-cEJya3-5gYuK7-ceLocU-317AA-r8WNq7-g8yc4-wUizi
coverimg_note: ""
styles: []
libraries: [jquery, "https://d3js.org/d3.v3.min.js", "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"]
options: [] #wide, noheader (, nopic)
---

<link rel="stylesheet" href="./styles/vopicikoule.css">

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

<wide><img src="https://dev.datarozhlas.cz/maturity-2018/images/legenda-small.png" id="legenda" style="max-width: 100%; visibility: hidden;"></wide>
