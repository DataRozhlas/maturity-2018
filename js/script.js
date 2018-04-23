var kraj, obor, skola, gdata;

$().ready(function(){
	$('#kraj a').click(function(){
		event.preventDefault();
		kraj = $(this).text();
		document.getElementById("zvolenyKraj").innerHTML = kraj;
		document.getElementById("krajButton").style.backgroundColor = "#4CAF50";
		document.getElementById("oborButton").style.backgroundColor = "#FFF";
		document.getElementById("zvolenyObor").innerHTML = '';
		document.getElementById("skolaButton").style.backgroundColor = "#FFF";
		document.getElementById("zvolenaSkola").innerHTML = '';
		nactiVysledky();
	});
});

$().ready(function(){
	$('#obor a').click(function(){
		event.preventDefault();
		obor = $(this).text();
		document.getElementById("zvolenyObor").innerHTML = obor;
		document.getElementById("oborButton").style.backgroundColor = "#4CAF50";
		document.getElementById("skolaButton").style.backgroundColor = "#FFF";
		document.getElementById("zvolenaSkola").innerHTML = '';
		nactiSkoly();
	});
});

$().ready(function(){
	$('#skola a').click(function(){
		event.preventDefault();
		skola = $(this).text();
		document.getElementById("zvolenaSkola").innerHTML = skola;
		document.getElementById("skolaButton").style.backgroundColor = "#4CAF50";
		zobrazVysledky();
	});
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

	});

};

function nactiSkoly() {

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
}

function zobrazVysledky() {

	var skoly =  gdata.filter(function(x) {
		return ((x.obor == obor) && (x.skola == skola));
	});

	var text = makeTableHTML(skoly);

	document.getElementById("tabulka").innerHTML = text;

};

function makeTableHTML(myArray) {

	var result = "<table border=1>";
	result += "<tr><td>předmět</td><td>typ</td><td>volba</td><td>průměr</td><td>odchylka</td><td>konali</td><td>neuspěli</td></tr>";

	for (var i=0; i < myArray.length; i++) {

		var uspesnost = myArray[i].prumer;

		var barva;

		switch(true) {
			case uspesnost < 20:
				barva = '#d7191c';
				break;
			case uspesnost < 40:
				barva = '#fdae61';
				break;
			case uspesnost < 60:
				barva = '#ffffbf';
				break;
			case uspesnost < 80:
				barva = '#a6d96a';
				break;
			default:
				barva = '#1a9641';
		}

		result += "<tr bgcolor=" + barva + ">";
		result += "<td>" + myArray[i].predmet + "</td>";
		result += "<td>" + myArray[i].typ + "</td>";
		result += "<td>" + myArray[i].volba + "</td>";
		result += "<td>" + myArray[i].prumer + "</td>";
		result += "<td>" + myArray[i].odchylka + "</td>";
		result += "<td>" + myArray[i].konali + "</td>";
		result += "<td>" + myArray[i].neuspeli + "</td>";
		result += "</tr>";
	}

	result += "</table>";

	return result;

};

function onlyUnique(value, index, self) {
	return self.indexOf(value) === index;
}
