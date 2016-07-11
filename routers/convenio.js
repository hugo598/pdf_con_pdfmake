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


	router.route('/convenio')
	  .get( function ( req, res )
	  {

			var nombre 				= 'Hugo Casildo Pino';
			var administrador	= 'Carlos Arturo Amador Cuesta';
			var direccion 		= 'Calle Pedregal S/N';
			var no_medidor 		= '1025212';
			var monto 				= '5000';
			var hora 					=  '12:00';
			var dia 					= '05';
			var mes 					= 'Junio';
			var anio 					= '2016';
			var telefono 			= '5585313161';
			var ife 					= '90156156132';

			var printer   			= new PdfPrinter(fonts);
			var docDefinition =
			{
				pageSize: 'LEGAL',
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
					alignment: 'center',
					absolutePosition : { x :20,y :35 },
					style: 'header',
				},
				{
					text: 'SISTEMA OPERADOR INTERMUNICIPAL DE AGUA POTABLE Y SANEAMIENTO DE TEQUESQUITENGO',
					alignment: 'center',
					absolutePosition : { x :20,y :60 },
					style: 'subtitulo',
				},
				{
					text: 'No. de Convenio:',
					alignment: 'left',
					absolutePosition : { x :400,y :89 },
					style: 'bigger',
				},
				{
					canvas:
					[
						{
							type: 'line',
							x1: 470, y1: -3,
							x2: 560, y2: -3,
							lineWidth: 1
						}
					]
				},
				{
					text:
					[ 'CONVENIO QUE CELEBRAN POR UNA PARTE EL SISTEMA OPERADOR INTERMUNICIPAL DE TEQUESQUITENGO, MOR. Y POR LA OTRA, EL C. ',
					{text: nombre , style : 'normal_negrita' },
					' USUARIO DEL SERVICIO PUBLICO DE AGUA POTABLE Y SANEAMIENTO, EN ',
					{text: direccion , style : 'normal_negrita' },
					' LOCALIDAD DE TEQUESQUITENGO, MOR. DE CONFORMIDAD A LOS ARTICULOS 4 FRACCION XII, ARTICULO 26, FRACCION I, ARTICULOS 84, 85, 86, 87, 88, 89 Y 95 DE LA LEY ESTATAL DE AGUA POTABLE DEL ESTADO DE MORELOS, MEDIANTE DECRETO NÚMERO OCHO PUBLICADO EN EL PERIÓDICO OFICIAL “TIERRA Y LIBERTAD” NÚMERO 5035 DE FECHA QUINCE DE OCTUBRE DEL DOS MIL DOCE, SE PUBLICÓ LA LEY QUE CREA LA COMISIÓN ESTATAL DEL AGUA, COMO ORGANISMO PÚBLICO DESCENTRALIZADO DEL PODER EJECUTIVO DEL ESTADO DE MORELOS. ',
					],
					style : 'normal',
					alignment: 'justify',
					lineHeight: interlineado,
					margin: [0,20,0,20]
				},
				{
					text: 'SU REPRESENTANTE ESTÁ FACULTADO PARA CELEBRAR EL PRESENTE INSTRUMENTO JURÍDICO, EN TÉRMINOS DE LO DISPUESTO POR LOS ARTÍCULOS 1 Y 20 DE LA LEY QUE CREA LA COMISIÓN ESTATAL DEL AGUA COMO ORGANISMO PÚBLICO DESCENTRALIZADO DEL PODER EJECUTIVO DEL ESTADO DE MORELOS; Y 1, 5 FRACCIÓN X, 32, 33 FRACCIÓN IV, Y 40 FRACCIÓN XXII DE SU REGLAMENTO INTERIOR, DERIVADOS DE LOS CONVENIOS DE COORDINACIÓN CELEBRADO CON EL AYUNTAMIENTO DE JOJUTLA, MORELOS, DE FECHA VEINTIUNO DE ENERO DEL DOS MIL CATORCE Y CON EL AYUNTAMIENTO DE PUENTE DE IXTLA, MORELOS, DE FECHA VEINTISÉIS DE JUNIO DEL DOS CATORCE, CON EL OBJETO DE QUE ESTA COMISIÓN ESTATAL DEL AGUA EN SUSTITUCIÓN DE DICHO MUNICIPIO PRESTE LOS SERVICIOS PÚBLICOS DE AGUA POTABLE, DRENAJE Y TRATAMIENTO DE AGUAS RESIDUALES CORRESPONDIENTES A LOCALIDAD QUE SE ENCUENTRA INMERSA EN LA REGIÓN DEL LAGO DE TEQUESQUITENGO.',
					style : 'normal',
					alignment: 'justify',
					lineHeight: interlineado,
					margin: [0,0,0,20]
				},
				{
					text:
					['DERIVADO DEL CONVENIO ANTES CITADO, LA COMISIÓN ESTATAL DEL AGUA ES LA RESPONSABLE Y FACULTADA PARA APLICAR LAS CUOTAS Y TARIFAS A LOS USUARIOS DEL DESARROLLO INMOBILIARIO VILLAS TEQUES POR CONCEPTO DE LE FUE INSTALADO EL APARATO MEDIDOR No.  ',
					{text: ' ' + no_medidor + ' ' , style : 'normal_negrita', decoration: 'underline' },
					'  PARA FINES DE PAGO.\n\n',
					'  A SOLICITUD DEL USUARIO, SE ACORDO POR AMBAS PARTES FIJAR EL SISTEMA DE LIQUIDACION, ACEPTADO POR EL C.  ',
					{text: administrador, style : 'normal_negrita', decoration: 'underline' },
					'  SALDAR LA CANTIDAD DE  ',
					{text: ' $' + monto, style : 'normal_negrita', decoration: 'underline'},
					'  QUE ADEUTA EL TITULAR DEL CONTRATO  ',
					{text: nombre, style : 'normal_negrita', decoration: 'underline' },
					'  EQUIVALENTE A  ',
					{text: '3', style : 'normal_negrita', decoration: 'underline'},
					'  BIMESTRES, AL  ',
					{text: 'Fecha', style : 'normal_negrita', decoration: 'underline'},
					'  PERIODO DE  ',
					{text: 'Fecha - a Fecha ', style : 'normal_negrita', decoration: 'underline'},

					],
					style : 'normal',
					alignment: 'justify',
					lineHeight: interlineado,
					margin: [0,0,0,20]
				},
				{
					text: 'PARCIALIDADES',
					alignment: 'center',
					margin: [0,0,0,20],
					absolutePosition : { x :20,y :515 },
					style: 'header',
				},



				{
						style: 'tableExample',
						table: {
								widths: [110, 140, 130, 140],
								headerRows: 1,
								body: [
										[{ text: 'ANTICIPO', style: 'normal_negrita' }, { text: 'FECHA', style: 'normal_negrita'}, { text: 'IMPORTE', style: 'normal_negrita' }, { text: 'FECHA DE VENCIMIENTO', style: 'normal_negrita' }],
										[ {text: '1ra. PARCIALIDAD', style : 'normal_negrita' },'','','' ],
										[ {text: '2a. PARCIALIDAD', style : 'normal_negrita' }, '','',''],
										[ {text: '3a. PARCIALIDAD', style : 'normal_negrita' }, '','',''],
										[ {text: '4a. PARCIALIDAD', style : 'normal_negrita' }, '','',''],
										[ {text: '5a. PARCIALIDAD', style : 'normal_negrita' }, '','',''],

								]
						},
						layout: 'lightHorizontalLines'
				},
				{
					text: ['SUMA: $ ',
					{text: '                                        ' , decoration: 'underline'},
					],
					alignment: 'center',
					margin: [0,0,0,20],

					style: 'normal'
				},
				{
					text: ['NO HABIENDO OTRO ASUNTO QUE HACER CONSTAR, SE FIRMA DE CONFORMIDAD LA PRESENTE SIENDO LAS  ',
						{text: hora, style: 'normal_negrita', decoration: 'underline'},
						'  HRS. DEL DIA  ',
						{text: dia, style: 'normal_negrita', decoration: 'underline'},
						'  de  ',
						{text: mes, style: 'normal_negrita', decoration: 'underline'},
						'  de  ',
						{text: anio, style: 'normal_negrita', decoration: 'underline'},
						'  FIRMANDO AL CALCE LOS QUE INTERVIENEN (DEBO Y PAGARE A SU FECHA DE VENCIMIENTO) ',
					],
					alignment: 'justify',
					style: 'normal'
				},
				{
					alignment: 'center',
					margin: [0,30,0,80],

					columns: [
						{
							// width: 280,
							text: [nombre + '\n\n\n\n\n\n\n\n\n',
								{text: 'TELEFONO: ' + telefono + '\n', style: 'bigger'},
								{text: 'No. DE INDETIFICACION: ' + ife + '\n', style: 'bigger'},
							],
							style: 'bigger_bold',
						},
						{
							// width: 260,
							text: ['S.A.P.A.S.T.' + '\n\n\n\n\n\n\n\n\n',
							{text: 'SISTEMA OPERADOR INTERMUNICIPAL' , style: 'bigger'},

							],
							style: 'bigger_bold',
						}
					]
				},
				{
					canvas:
					[
						{
							type: 'line',
							x1: 35, y1: -120,
							x2: 250, y2: -120,
							lineWidth: 1
						},
						{
							type: 'line',
							x1: 320, y1: -120,
							x2: 535, y2: -120,
							lineWidth: 1
						}
					]
				},

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
					fontSize: 10,
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
