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


	router.route('/constancia_no_adeudo')
	  .get( function ( req, res )
	  {
			var encargado 		= 'Arq. Ivan Rodriguez Director';
			var contribuyente = 'Juan Antonio Márquez Ramírez';

			var printer   		= new PdfPrinter(fonts);
			var docDefinition =
			{
				pageSize: 'LETTER',
				pageOrientation: 'portrait',
				pageMargins: [ 60, 40, 60, 40 ],
				content: [
				{
					text : 'CEAGUA',
					alignment: 'center',
					margin:[0,10,0,0],
					style : 'titulo'
				},
				{
					text : 'Constancia de no adeudo',
					alignment: 'center',
					style : 'subtitulo',
					margin:[0,5,0,70]
				},
				{
					text : ['El que suscribe ',{text: encargado, style : 'bigger_bold'},' de Finanzas de CEAGUA, hace constar por medio de la presente que el ',{text: 'C. ' + contribuyente, style : 'bigger_bold'}, ' no presenta ningún tipo de adeudo a la fecha, ni económico ni de bienes a esta institución. ' ],
					alignment: 'justify',
					margin: [0,0,0,20],
					style : 'bigger'
				},
				{
					text : 'Para llegar a esta afirmación se han revisado los registros de pago, por lo que no existe, por concepto de adeudos. ',
					margin: [0,0,0,20],
					alignment: 'justify',
					style : 'bigger'
				},
				{
					text : 'Se extiende la presenta constancia a petición del interesado y para los fines que a este convengan en el Estado de Morelos a los 13 días del mes de Julio del 2016. ',
					margin: [0,0,0,20],
					alignment: 'justify',
					style : 'bigger'
				},
				{
					text : 'ATENTAMENTE',
					margin: [0,140,0,0],
					alignment: 'center',
					style : 'bigger_bold'
				},
				{
					text : 'Arq. Ivan Rodriguez',
					margin: [0,90,0,5],
					alignment: 'center',
					style : 'bigger'
				},
				{
					text : 'Director de Finanzas',
					alignment: 'center',
					style : 'bigger'
				}

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
