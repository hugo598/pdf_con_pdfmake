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


		router.route('/orden_instalacion')
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
				var no_solicitud	= '15651615651';
				var contrato			= '0001';

				var tabla_med_y 	= 172;
				var tabla_med_X 	= 330;

				var printer   			= new PdfPrinter(fonts);
				var docDefinition =
				{
					pageSize: 'LETTER',
					pageMargins: [ 20, 25, 20, 15 ],
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
								h: 30,
								color : gris_oscuro ,
							},
							{
								type: 'rect',
								x: -2,
								y: 59,
								w: 577,
								h: 30,
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
						text: 'FOLIO:',
						alignment: 'left',
						absolutePosition : { x :525,y :85 },
						style: 'bigger',
					},
					{
						text: no_solicitud,
						alignment: 'center',
						absolutePosition : { x :490,y :100 },
						style: 'bigger',
					},
					{
						canvas:
						[
							{
								type: 'line',
								x1: 480, y1: -15,
								x2: 558, y2: -15,
								lineWidth: 1
							}
						]
					},
					{
						text: 'ORDEN DE INSTALACIÓN',
						alignment: 'center',
						// width: 375,
						absolutePosition : { x :30,y :95 },
						style: 'bigger_bold',
						margin: [0,0,0,10],
					},
					// {
					// 	table:
					// 	{
					// 		widths: [ 110, 110, 110, 110, 110 ],
					// 		headerRows: 0,
					// 		// keepWithHeaderRows: 1,
					// 		body: [
					// 				// [{ text: 'SERVICIO SOLICITADO', style: 'header_table', colSpan: 3, alignment: 'center' }, {}, {}],
					// 				// [{ text: 'MEDIDOR      TOMA NUEVA       DRENAJE     REHABILITACION DE TOMA  REHABILITACION DE DRENAJE     OTRO', style: 'body_table', alignment: 'center' }, {}, {}, {} ,{}],
					// 		]
					// 	},
					//
					// },
					{
						text: 'MEDIDOR               TOMA NUEVA              DRENAJE               REHABILITACION DE TOMA              REHABILITACION DE DRENAJE            OTRO',
						absolutePosition : { x :40,y :140 },
						style : 'normal_8',
					},
					{
						canvas :
						[
							{
								type: 'rect',
								x: 2,
								y: 12,
								w: 15,
								h: 15,
								// color : gris_claro ,
								lineWidth: 1
							},
							{
								type: 'rect',
								x: 70,
								y: 12,
								w: 15,
								h: 15,
								// color : gris_claro ,
								lineWidth: 1
							},
							{
								type: 'rect',
								x: 152,
								y: 12,
								w: 15,
								h: 15,
								// color : gris_claro ,
								lineWidth: 1
							},
							{
								type: 'rect',
								x: 218,
								y: 12,
								w: 15,
								h: 15,
								// color : gris_claro ,
								lineWidth: 1
							},
							{
								type: 'rect',
								x: 350,
								y: 12,
								w: 15,
								h: 15,
								// color : gris_claro ,
								lineWidth: 1
							},
							{
								type: 'rect',
								x: 493,
								y: 12,
								w: 15,
								h: 15,
								// color : gris_claro ,
								lineWidth: 1
							},
						]
					},
					// {
					// 	alignment: 'justify',
					// 	columns: [
					// 		{
					// 			width: 285,
					// 			text: 'NOMBRE DE LA PERSONA FISICA Y/O MORAL QUE TIENE REGISTRADO EL CONTRATO',
					// 			style: 'normal',
					// 			alignment: 'justify',
					// 			margin: [3,5,8,10],
					// 		},
					// 		{
					// 			width: 285,
					// 			text: 'asa',
					// 			style: 'normal',
					// 			margin: [8,5,0,10],
					//
					// 		}
					// 	],
					// 	margin: [0,10,0,0],
					//
					// 	// margin: [0,5,0,0]
					// },
					{
						text: 'NOMBRE DE LA PERSONA FISICA Y/O MORAL QUE TIENE REGISTRADO EL CONTRATO',
						margin: [0,20,0,10],
						style: 'normal_7',
					},
					{
						text: 'No. DEL MEDIDOR NUEVO',
						absolutePosition: {x : tabla_med_X, y : tabla_med_y},
						// margin: [0,20,0,10],
						style: 'normal_7',
					},
					{
						text: 'No. DEL MEDIDOR ANTERIOR',
						absolutePosition: {x : tabla_med_X, y : tabla_med_y + 15},
						// margin: [0,20,0,10],
						style: 'normal_7',
					},
					{
						text: 'DIAMETRO DEL MEDIDOR',
						absolutePosition: {x : tabla_med_X, y : tabla_med_y + 30},
						// margin: [0,20,0,10],
						style: 'normal_7',
					},
					{
						text: 'FECHA DE INSTALACION',
						absolutePosition: {x : tabla_med_X, y : tabla_med_y + 45},
						// margin: [0,20,0,10],
						style: 'normal_7',
					},
					{
						text: 'LECTURA INICIAL',
						absolutePosition: {x : tabla_med_X, y : tabla_med_y + 60},
						// margin: [0,20,0,10],
						style: 'normal_7',
					},
					{
						text: 'GIRO',
						absolutePosition: {x : tabla_med_X, y : tabla_med_y + 75},
						// margin: [0,20,0,10],
						style: 'normal_7',
					},
					{
						text: 'DOMICILIO COMPLETO',
						absolutePosition: {x : 20, y : tabla_med_y + 95},
						// margin: [0,20,0,10],
						style: 'normal_8',
					},
					{
						text: [{text: 'APLICA EN CASO DE INSTALACION DE MEDIDOR\n', style: 'normal_negrita', lineHeight: 1.4},
									'EN EL PRESENTE DOCUMENTO SE DEJA ASENTADO QUE EL APARATO MEDIDOR QUEDA INSTALADO Y FUNCIONANDO CORRECTAMENTE, ASI MISMO CUENTA CON TODAS SUS PARTES QUE LO COMPONEN COMO MICA, TAPA, PRECINTO, SELLO DE SEGURIDAD, CIFRAS CORRECTAS, ENTRE OTROS, NO PRESENTA FUGAS.\n\n',
									'SE PERCIBE AL ',{text: nombre, textDecoration: 'underline', style: 'normal_negrita'},
									' QUE EL NUMERO DE CONTRATO ',
									{text: contrato, style: 'normal_negrita'},
									' CORRESPONDIENTE A LA TOMA LOCALIZADA EN SU PROPIEDAD POR CONSIGUIENTE SE LE INSTALA EL MEDIDOR PARA CONTROLAR EL SUMINSTRO DE AGUA Y QUE EN CASO DE PRESENTAR DAÑOS Y/O RUPTURAS DEL APARATO MEDIDOR SE LE APLICARA LA LEY ESTATAL DE AGUA POTABLE CON FUNDAMENTO EN LOS ART. 74, 87, 88, 95 INCICO G ART. 104 Y 105 FRACCION II, ART. 112, 116 FRACC. I, II, III, IV, ART. 119 FRACC. IV, VII.'
						],
						style: 'normal',
						absolutePosition: {x : 20, y : tabla_med_y + 150},
						alignment: 'justify'
					},
					{
						text : 'Factura:',
						absolutePosition: {x : 420, y : tabla_med_y + 280},
						style: 'normal'
						// alignment: 'right'
					},
					{
						style: 'normal_7',
						absolutePosition: {x : 20, y : tabla_med_y + 320},
						table: {
								widths: [70, 50, 250, '*'],
								body: [
										[ {text: 'CANTIDAD', style: 'normal_negrita'}, {text: 'UNIDAD' , style: 'normal_negrita'}, {text: 'DESCRIPCION' , style: 'normal_negrita'}, {text: 'OBSERVACIONES' , style: 'normal_negrita'}],
										[ '1', 'PZA', 'ABRAZADERA DE FOYO Y/O PVC', ''],
										[ '1', 'PZA', 'ABRAZADERA DE FOYO Y/O PVC', ''],
										[ '1', 'PZA', 'ABRAZADERA DE FOYO Y/O PVC', ''],
										[ '1', 'PZA', 'ABRAZADERA DE FOYO Y/O PVC', ''],
										[ ' ', '', '', ''],
										[ ' ', '', '', ''],
										[ ' ', '', '', ''],
								]
						},
						layout: 'lightHorizontalLines'
					},
					{
						text: 'FIRMA DEL PROPIETARIO Y/O REPRESENTANTE LEGAL',
						style: 'normal_7',
						absolutePosition: {x : 50, y : tabla_med_y + 480},
					},
					{
						text: 'FIRMA DEL AUTORIZACION S.A.P.A.S.T. (CONTRATOS)',
						style: 'normal_7',
						absolutePosition: {x : 380, y : tabla_med_y + 480},
					},
					{
						text: 'FIRMA DE TRABAJADOR DEL S.A.P.A.S.T. (INSTALACION)',
						style: 'normal_7',
						absolutePosition: {x : 218, y : tabla_med_y + 540},
					},
					{
						text: 'C.C.P. DEPTO DE CONTRATACIONES\nC.C.P. ALMACEN\nC.C.P. USUARIO',
						style: 'normal_6',
						absolutePosition: {x : 20, y : tabla_med_y + 560},
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
					normal_8: {
						fontSize: 8,
						normal: true,
					},
					normal_7: {
						fontSize: 7,
						normal: true,
					},
					normal_6: {
						fontSize: 6,
						normal: true,
					},
					subindice: {
						fontSize: 7,
						normal: true,
					},
					subindice_2: {
						fontSize: 6,
						normal: true,
					},
					normal_negrita: {
						fontSize: 10,
						bold: true,
					},
					tableExample: {
						margin: [0, 5, 0, 15]
					},
					header_table: {
						fontSize: 10,
						bold: true,
						// margin: [0, 1, 0, 1]
					},
					body_table: {
						fontSize: 9,
						normal: true,
						margin: [0, 4, 0, 4]
					},
					body_table_left: {
						fontSize: 9,
						normal: true,
						margin: [-4, -2, 0, 12]
					}
				}
			};

			var pdfDoc = printer.createPdfKitDocument(docDefinition);
			pdfDoc.pipe( res );
			// pdfDoc.pipe(fs.createWriteStream('contrato.pdf'));
			pdfDoc.end();
		});


module.exports = router;
