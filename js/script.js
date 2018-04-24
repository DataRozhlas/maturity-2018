var kraj, obor, skola, gdata;

$('#kraj a').click(function(event){
	event.preventDefault();
	kraj = $(this).text();
	document.getElementById("zvolenyKraj").innerHTML = kraj;
	document.getElementById("krajButton").style.backgroundColor = "#4FBA8A";
	document.getElementById("oborButton").style.backgroundColor = "#FFF";
	document.getElementById("zvolenyObor").innerHTML = '';
	document.getElementById("skolaButton").style.backgroundColor = "#FFF";
	document.getElementById("zvolenaSkola").innerHTML = '';
	nactiVysledky();
});

function nactiVysledky() {

	var nacist;

	switch(kraj) {
		case 'Jihočeský':
			nacist = 'jc';
			break;
		case 'Jihomoravský':
			nacist = 'jm';
			break;
		case 'Karlovarský':
			nacist = 'kv';
			break;
		case 'Královéhradecký':
			nacist = 'kh';
			break;
		case 'Liberecký':
			nacist = 'lb';
			break;
		case 'Moravskoslezský':
			nacist = 'ms';
			break;
		case 'Olomoucký':
			nacist = 'ol';
			break;
		case 'Pardubický':
			nacist = 'pb';
			break;
		case 'Praha':
			nacist = 'pr';
			break;
		case 'Plzeňský':
			nacist = 'pz';
			break;
		case 'Středočeský':
			nacist = 'sc';
			break;
		case 'Ústecký':
			nacist = 'us';
			break;
		case 'Vysočina':
			nacist = 'vy';
			break;
		case 'Zlínský':
			nacist = 'zl';
			break;
	}

	nacist = './data/kraj/' + nacist + '.csv';

	d3.csv(nacist, function(data) {

		data.forEach(function(d) {
			d.konali = +d.konali;
			d.neuspeli = +d.neuspeli;
			d.volba = +d.volba;
			d.prumer = +d.prumer;
			d.odchylka = +d.odchylka;
		});

		gdata = data;

		nactiOborButton();

	});

};



function nactiOborButton() {

	var obory = gdata.map(function(d) {
		return d.obor;
	});

	obory = obory.filter(onlyUnique);

	var text = '<button class="btn-lg btn-default dropdown-toggle" id="oborButton" type="button" data-toggle="dropdown">Obor '
	text += '<span class="caret"></span></button>'
	text += '<p class="postbutton" id="zvolenyObor"></p>'
	text += '<ul class="dropdown-menu" role="menu" aria-labelledby="menu1">'

	for (var i=0; i < obory.length; i++) {
		text += '<li role="presentation"><a role="menuitem" tabindex="-1" href="#">' + obory[i] + '</a></li>'
	}

	text += '</ul>'

	document.getElementById("obor").innerHTML = text;

	$('#obor a').click(function(event){
		event.preventDefault();
		obor = $(this).text();
		document.getElementById("zvolenyObor").innerHTML = obor;
		document.getElementById("oborButton").style.backgroundColor = "#4FBA8A";
		document.getElementById("skolaButton").style.backgroundColor = "#FFF";
		document.getElementById("zvolenaSkola").innerHTML = '';
		nactiSkolaButton();
	});

};



function nactiSkolaButton() {

	var skoly = gdata.filter(function(x) {
		return x.obor == obor;
	});

	skoly = skoly.map(function(d) {
		return d.skola;
	});

	skoly = skoly.filter(onlyUnique);

	var text = '<button class="btn-lg btn-default dropdown-toggle" id="skolaButton" type="button" data-toggle="dropdown">Škola'
	text += '<span class="caret"></span></button>'
	text += '<p class="postbutton" id="zvolenaSkola"></p>'
	text += '<ul class="dropdown-menu" role="menu" aria-labelledby="menu1">'

	for (var i=0; i < skoly.length; i++) {
		text += '<li role="presentation"><a role="menuitem" tabindex="-1" href="#">' + skoly[i] + '</a></li>'
	}

	text += '</ul>'

	document.getElementById("skola").innerHTML = text;

	$('#skola a').click(function(event){
		event.preventDefault();
		skola = $(this).text();
		document.getElementById("zvolenaSkola").innerHTML = skola;
		document.getElementById("skolaButton").style.backgroundColor = "#4FBA8A";
		zobrazVysledky();
	});

};



function zobrazVysledky() {

	var skoly =  gdata.filter(function(x) {
		return ((x.obor == obor) && (x.skola == skola));
	});

	var text = makeTableHTML(skoly);

	document.getElementById("tabulka").innerHTML = text;

	document.getElementById("legenda").style.visibility = "visible";

};



function makeTableHTML(myArray) {

	var result = "<table border=1>";
	result += "<tr><th>PŘEDMĚT</th><th>ZKOUŠKA</th><th>VOLBA PŘEDMĚTU</th><th>PRŮMĚRNÝ PERCENTIL</th><th>NEUSPĚLI</th></tr>";

	for (var i=0; i < myArray.length; i++) {

		var uspesnost = myArray[i].prumer;

		var barva;

		switch(true) {
			case uspesnost < 20:
				barva = '#F84045';
				break;
			case uspesnost < 40:
				barva = '#FF7858';
				break;
			case uspesnost < 60:
				barva = '#FFCE6D';
				break;
			case uspesnost < 80:
				barva = '#4FBA8A';
				break;
			default:
				barva = '#18807A';
		}

		result += "<tr bgcolor=" + barva + ">";
		result += "<td>" + myArray[i].predmet + "</td>";
		result += "<td>" + myArray[i].typ + "</td>";
		result += "<td>" + myArray[i].volba + " %</td>";
		result += "<td>" + myArray[i].prumer + ' ± ' + myArray[i].odchylka + "</td>";
		result += "<td>" + myArray[i].neuspeli + ' z ' + myArray[i].konali + "</td>";
		result += "</tr>";
	}

	result += "</table>";

	return result;

};



function onlyUnique(value, index, self) {
	return self.indexOf(value) === index;
}