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

	nacist = 'https://dev.datarozhlas.cz/maturity-2018/data/kraj/' + nacist + '.csv';

	d3.csv(nacist).then(function(data) {

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

	var skoly = gdata.filter(function(x) {
		return ((x.obor == obor) && (x.skola == skola));
	});

	var text = makeTableHTML(skoly);

	document.getElementById("tabulka").innerHTML = text;

	document.getElementById("legenda").style.visibility = "visible";

};



function makeTableHTML(myArray) {

	var result = "<table border=1>";
	result += "<tr><th>PŘEDMĚT</th><th>ZKOUŠKA</th><th>ZVOLILO</th><th>PRŮMĚRNÝ PERCENTIL</th><th>NEUSPĚLI</th></tr>";

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




var gymnazia_mat = [
  ['rok 2013', 32.5],
  ['rok 2017', 37.6]
]

var gymnazia_aj = [
  ['rok 2013', 65.9],
  ['rok 2017', 59.8]
]

var gymnazia_ost = [
  ['rok 2013', 1.6],
  ['rok 2017', 2.6]
]

var technicke_mat = [
  ['rok 2013', 60.5],
  ['rok 2017', 31.7]
]

var technicke_aj = [
  ['rok 2013', 38.1],
  ['rok 2017', 67.9]
]

var technicke_ost = [
  ['rok 2013', 1.4],
  ['rok 2017', 0.4]
]

var ostatni_mat = [
  ['rok 2013', 33.0],
  ['rok 2017', 10.5]
]

var ostatni_aj = [
  ['rok 2013', 57.7],
  ['rok 2017', 86.1]
]

var ostatni_ost = [
  ['rok 2013', 9.3],
  ['rok 2017', 3.3]
]

var colors = ['#ECA038', '#A38456', '#EA614A', '#008836', '#20649B', '#6B96CA', '#A87A93', '#D19C95'];

$(function () {
    $('#gymnazia').highcharts({

    chart: {
        type: 'line'
    },

    title: {
        text: 'Gymnázia'
    },

    subtitle: {
        text: ''
    },

    xAxis: {
        type: 'category',
        categories: ['rok 2013', 'rok 2017']
    },

    yAxis: {
        title: {
            text: 'Podíl maturantů'
        },
        labels: {
            format: '{value} %'
        },
        max: 100
    },

    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: předmět si zvolilo <b>{point.y} %</b> maturantů</b>'
    },

    exporting: {
        enabled: false
    },

    credits: {
        enabled: false
    },

    series: [{
        name: 'Matematika',
        data: gymnazia_mat,
        marker: {
            symbol: 'circle'
        },
        color: colors[0]
    }, {
        name: 'Angličtina',
        data: gymnazia_aj,
        marker: {
            symbol: 'circle'
        },
        color: colors[2]
    }, {
        name: 'Jiný jazyk',
        data: gymnazia_ost,
        marker: {
            symbol: 'circle'
        },
        color: colors[3]
    }]
});

    $('#technicke').highcharts({

    chart: {
        type: 'line'
    },

    title: {
        text: 'Technické SOŠ a SOU'
    },

    subtitle: {
        text: ''
    },

    xAxis: {
        type: 'category',
        categories: ['rok 2013', 'rok 2017']
    },

    yAxis: {
        title: {
            text: ''
        },
        labels: {
            enabled: false
        },
        max: 100
    },

    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: předmět si zvolilo <b>{point.y} %</b> maturantů</b>'
    },

    exporting: {
        enabled: false
    },

    credits: {
        enabled: false
    },

    series: [{
        name: 'Matematika',
        data: technicke_mat,
        marker: {
            symbol: 'circle'
        },
        color: colors[0]
    }, {
        name: 'Angličtina',
        data: technicke_aj,
        marker: {
            symbol: 'circle'
        },
        color: colors[2]
    }, {
        name: 'Jiný jazyk',
        data: technicke_ost,
        marker: {
            symbol: 'circle'
        },
        color: colors[3]
    }]
});

    $('#ostatni').highcharts({

    chart: {
        type: 'line'
    },

    title: {
        text: 'Ostatní SOŠ a SOU'
    },

    subtitle: {
        text: ''
    },

    xAxis: {
        type: 'category',
        categories: ['rok 2013', 'rok 2017']
    },

    yAxis: {
        title: {
            text: ''
        },
        labels: {
            enabled: false
        },
        max: 100
    },

    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: předmět si zvolilo <b>{point.y} %</b> maturantů</b>'
    },

    exporting: {
        enabled: false
    },

    credits: {
        href : 'https://vysledky.cermat.cz/data/Default.aspx',
        text : 'Zdroj: Cermat'
    },

    series: [{
        name: 'Matematika',
        data: ostatni_mat,
        marker: {
            symbol: 'circle'
        },
        color: colors[0]
    }, {
        name: 'Angličtina',
        data: ostatni_aj,
        marker: {
            symbol: 'circle'
        },
        color: colors[2]
    }, {
        name: 'Jiný jazyk',
        data: ostatni_ost,
        marker: {
            symbol: 'circle'
        },
        color: colors[3]
    }]
});

});