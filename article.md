title: "Jak si vedou maturanti: Podívejte se na loňské výsledky státních maturit"
perex: ""
published: "26. dubna 2018"
coverimg: https://interaktivni.rozhlas.cz/brexit/media/cover.jpg
coverimg_note: "Foto <a href='#'>ČTK</a>"
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

<div><img src="https://dev.datarozhlas.cz/maturity-2018/images/legenda.png" id="legenda" style="max-width: 100%; visibility: hidden;"></div>
