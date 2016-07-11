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


	router.route('/notificacion')
	  .get( function ( req, res )
	  {
			var dia 			= '06';
			var mes 			= 'Junio';
			var anio 			= '2016';
			var contrato 	= '1001';
			var nombre 		= 'Hugo Casildo Pino';
			var calle 		= 'Calle Pedregal';
			var telefono 	= '734 -XX-XXX-XX';

			var no_notificacion = '1ra. NOTIFICACION';
			var fecha 					=  'Tequesquitengo, Mor., a  ' + dia + '  de  ' + mes + '  del  ' + anio;
			var printer   			= new PdfPrinter(fonts);

			var docDefinition =
			{
				pageSize: 'LETTER',
				pageMargins: [ 20, 25, 20, 25 ],
				content: [
				{
					canvas:
					[
						{
							type: 'rect',
							x: -2,
							y: -9,
							w: 579,
							h: 60,
							color : gris_oscuro ,
						},
						{
							type: 'rect',
							x: -2,
							y: -9,
							w: 577,
							h: 58,
							color : gris_claro ,
						},
						{
							type: 'rect',
							x: -2,
							y: 60,
							w: 579,
							h: 20,
							color : gris_oscuro ,
						},
						{
							type: 'rect',
							x: -2,
							y: 59,
							w: 577,
							h: 20,
							color : gris_claro ,
						}
					]
				},
				{
					image: path.join( __dirname, 'CEAgua_.png'),
					width: 110,
					absolutePosition : { x :23,y :23 }
				},
				{
					image: path.join( __dirname, 'CEAgua_.png'),
					width: 110,
					absolutePosition : { x :482,y :23 }
				},
				{
					text: 'COMISION ESTATAL DEL AGUA DEL ESTADO DE MORELOS',
					// width: 375,
					alignment: 'center',
					absolutePosition : { x :20,y :35 },
					// absolutePosition : { x :155,y :35 },
					style: 'header',
				},
				{
					text: 'SISTEMA OPERADOR INTERMUNICIPAL DE AGUA POTABLE Y SANEAMIENTO DE TEQUESQUITENGO',
					// width: 375,
					alignment: 'center',
					absolutePosition : { x :20,y :60 },
					// absolutePosition : { x :141,y :60 },
					style: 'subtitulo',
				},
				{
					text: 'ACTA DE NOTIFICACION',
					alignment: 'center',
					// width: 375,
					absolutePosition : { x :20,y :89 },
					style: 'bigger',
				},
				{
					text: no_notificacion,
					alignment: 'right',
					// width: 375,
					absolutePosition : { x :20,y :89 },
					style: 'bigger',
				},
				{
					text:
					[ 'TEQUESQUITENGO , MOR., A ',
						{text : '  ' + dia + '  ', decoration: 'underline'},
						' DE ',
						{text : '  ' + mes + '  ', decoration: 'underline'},
						' DEL ',
						{text : '  ' + anio + '  ', decoration: 'underline'},

					],
					margin: [0,15,0,0],
					alignment: 'justify',
					style: 'bigger',
				},
				{
					text:
					[ 'NOMBRE: ',
						{text : '   ' + nombre },
					],
					margin: [0,15,0,0],
					alignment: 'justify',
					style: 'bigger',
				},
				{
					canvas:
					[
						{
							type: 'line',
							x1: 53, y1: 0,
							x2: 575, y2: 0,
							lineWidth: 1
						}
					]
				},
				{
					text:
					[ 'CALLE: ',
						{text : '   ' + calle },
					],
					margin: [0,15,0,0],
					alignment: 'justify',
					style: 'bigger',
				},
				{
					canvas:
					[
						{
							type: 'line',
							x1: 47, y1: 0,
							x2: 375, y2: 0,
							lineWidth: 1
						},
						{
							type: 'line',
							x1: 405, y1: 0,
							x2: 575, y2: 0,
							lineWidth: 1
						}
					]
				},
				{
					text: 'No:',
					absolutePosition : { x :400,y :175 },
					style: 'bigger'
				},
				{
					text:
					[ 'COLONIA: ',
						{text : '   ' + calle },
					],
					margin: [0,15,0,0],
					alignment: 'justify',
					style: 'bigger',
				},
				{
					canvas:
					[
						{
							type: 'line',
							x1: 47, y1: 0,
							x2: 315, y2: 0,
							lineWidth: 1
						},
						{
							type: 'line',
							x1: 390, y1: 0,
							x2: 575, y2: 0,
							lineWidth: 1
						}
					]
				},
				{
					text: 'LOCALIDAD:',
					absolutePosition : { x :340,y :203 },
					style: 'bigger'
				},
				{
					text: 'ESTIMADO USUARIO:',
					margin: [0,25,0,0],
					style: 'bigger'
				},
				{
					text: 'EL SISTEMA OPERADOR INTERMUNICIPAL DE AGUA POTABLE Y SANEAMIENTO DE TEQUESQUITENGO, MOR., CON LAS FACULTADES QUE LE CONFIERE LA LEY ESTATAL DE AGUA POTABLE DEL ESTADO DE MORELOS Y CON EL OBJETO DE CUMPLIR CON LAS DISPOSICIONES CONTENIDAS EN LA MISMA Y LO CONTEMPLADO EN EL ARTICULO 105 DE DICHO ORDENAMIENTO, DE LA VISITA PRACTICADA ENCONTRAMOS QUE:',
					margin: [0,15,0,20],
					alignment: 'justify',
					style: 'bigger'
				},
				{
					canvas:
					[
						{
							type: 'line',
							x1: 0, y1: 0,
							x2: 575, y2: 0,
							lineWidth: 1
						},
						{
							type: 'line',
							x1: 0, y1: 20,
							x2: 575, y2: 20,
							lineWidth: 1
						},
						{
							type: 'line',
							x1: 0, y1: 40,
							x2: 575, y2: 40,
							lineWidth: 1
						},
						{
							type: 'line',
							x1: 0, y1: 60,
							x2: 575, y2: 60,
							lineWidth: 1
						},
						{
							type: 'line',
							x1: 0, y1: 80,
							x2: 575, y2: 80,
							lineWidth: 1
						},
						{
							type: 'line',
							x1: 0, y1: 100,
							x2: 575, y2: 100,
							lineWidth: 1
						},
						{
							type: 'line',
							x1: 0, y1: 120,
							x2: 575, y2: 120,
							lineWidth: 1
						},
						{
							type: 'line',
							x1: 0, y1: 140,
							x2: 575, y2: 140,
							lineWidth: 1
						}
					]
				},
				{
					text: ['POR LO CUAL, ESTA INCURRIENDO EN UNA INFRACCIÓN CONTEMPLADA EN EL ARTÍCULO 119, HACIENDOSE ACREEDOR A LA SANCIÓN PREVISTA EN EL ARTÍCULO 120 DE LA LEY INVOCADA, POR LO QUE LE SOLICITAMOS SE PRESENTE EN LAS OFICINAS DE ESTE SISTEMA OPERADOR INTERMUNICIPAL DE AGUA POTABLE Y SANEAMIENTO DE TEQUESQUITENGO S.A.P.A.S.T. EN UN PLAZO DE TRES DÍAS HÁBILES, EN CIRCUITO DEL LAGO NO. LOCALIDAD DE TEQUESQUITENGO. TELÉFONOS ',
						{text : telefono, style : 'bigger_bold' },
						'SI EN EL PLAZO DETERMINADO NO ACUDE A ACLARAR O REGULARIZAR DICHA SITUACIÓN PROCEDEREMOS CONFORME A LO ESTABLE',
					],
						margin: [0,20,0,30],
						alignment: 'justify',
						style: 'bigger'

				},
				{
					alignment: 'center',
					margin: [0,0,0,80],

					columns: [
						{
							// width: 280,
							text: 'INSPECTOR S.A.P.A.S.T.',
							style: 'bigger_bold',
						},
						{
							// width: 260,
							text: 'RECIBI DE CONFORMIDAD',
							style: 'bigger_bold',
						}
					]
				},

				{
					canvas:
					[
						{
							type: 'line',
							x1	: 40, y1: 0,
							x2	: 250, y2: 0,
							lineWidth: 1
						},
						{
							type: 'line',
							x1: 330, y1: 0,
							x2: 530, y2: 0,
							lineWidth: 1
						}
					]
				},
				{
					text	: ['C.C.p.Depto Juridico.- Para su Conocimiento\n',
					'C.c.p. Area Comercial.-Mismo fin\n',
					'C.c.p. Archivo'],
					margin: [0,25,0,10],

					style : 'subindice'
				}

			],
			styles: {
				header: {
					fontSize: 11,
					bold: true
				},
				subtitulo: {
					fontSize: 7,
					bold: false
				},
				titulo: {
					fontSize: 11,
					bold: true
				},
				bigger: {
					fontSize: 11,
					italics: true,
				},
				bigger_bold: {
					fontSize: 11,
					bold: true,
				},
				normal: {
					fontSize: 9,
					normal: true,
				},
				subindice: {
					fontSize: 7,
					normal: true,
				},
				normal_negrita: {
					fontSize: 9,
					bold: true,
				}
			}
		};

		var pdfDoc = printer.createPdfKitDocument(docDefinition);
    pdfDoc.pipe( res );
    // pdfDoc.pipe(fs.createWriteStream('contrato.pdf'));
    pdfDoc.end();

	});

module.exports = router;
