'use strict';
var express = require('express');
var router  = express.Router();
var PdfPrinter = require('pdfmake');
var fs = require('fs');
var path = require ('path');

var fonts = {
	Roboto: {
		normal: path.join(__dirname , 'fonts/'+'Raleway-Regular.ttf'),
		bold: path.join(__dirname , 'fonts/'+'Raleway-Bold.ttf'),
		italics: path.join(__dirname , 'fonts/'+'Raleway.ttf'),
		bolditalics: path.join(__dirname , 'fonts/'+'Raleway.ttf')
	}
};
var gris_oscuro = '#d9d4d4';
var gris_claro = '#f1f1f1';
var separacion= [0,0,0,6];
var interlineado = 1.2;


	router.route('/lecturista')
	  .get( function ( req, res )
	  {
			var no_contratos 	= '10';
			var registros 		= ['0001', 'Calle pedregal S/N', 'San Juan', '$ 132', '10002552', '05', '', '' ];
			var registros2 		= ['0002', 'Calle Domingo castrop N 2005 ', 'Reyes', '$ 132', '10002552', '05', '', '' ];
			var lecturista 		= 'Javier Morales';
			var printer   			= new PdfPrinter(fonts);
			var docDefinition =
			{
				pageSize: 'LETTER',
				pageOrientation: 'landscape',
				pageMargins: [ 20, 25, 20, 25 ],
				content: [
				{
					text : 'CEAGUA',
					alignment: 'center',
					style : 'titulo'
				},
				{
					text : 'Toma de Lectura Manual',
					alignment: 'center',
					style : 'subtitulo'
				},
				{
					text : 'Ruta 1',
					alignment: 'center',
					style : 'bigger_bold'
				},
				{
					text : ['Lecturista: ',{text: lecturista, style : 'bigger_bold'}],
					alignment: 'center',
					margin: [0,0,0,10],
					style : 'bigger'
				},
				{
						style: 'tableExample',
						table: {
								widths: [45, 180, 90, 65, 65, 45, 75, 75],
								headerRows: 1,
								body: [
										[{ text: 'Cuenta', style: 'normal_negrita' }, { text: 'Dirección', style: 'normal_negrita'}, { text: 'Colonia', style: 'normal_negrita' }, { text: 'Tarifa', style: 'normal_negrita' }, { text: 'No. Medidor', style: 'normal_negrita' }, { text: 'Secuencia', style: 'normal_negrita' }, { text: 'Lectura', style: 'normal_negrita' }, { text: 'Anomalia', style: 'normal_negrita' }],
										registros,
										registros2

								],
								style: 'normal'
						},
						layout: 'lightHorizontalLines'
				},
			],
			styles: {
				header: {
					fontSize: 11,
					bold: true
				},
				subtitulo: {
					fontSize: 12,
					bold: false
				},
				titulo: {
					fontSize: 20,
					normal: true
				},
				bigger: {
					fontSize: 11,
					normal: true,
				},
				bigger_bold: {
					fontSize: 11,
					bold: true,
				},
				normal: {
					fontSize: 8,
					normal: true,
				},
				subindice: {
					fontSize: 7,
					normal: true,
				},
				normal_negrita: {
					fontSize: 10,
					bold: true,
				},
				tableExample: {
					margin: [0, 5, 0, 15]
				}
			}
		};

			var pdfDoc = printer.createPdfKitDocument(docDefinition);
			pdfDoc.pipe( res );
			// pdfDoc.pipe(fs.createWriteStream('contrato.pdf'));
			pdfDoc.end();
		});


module.exports = router;
