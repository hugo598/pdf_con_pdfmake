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


		router.route('/drenaje')
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
						text: 'No. DE SOLICITUD',
						alignment: 'left',
						absolutePosition : { x :490,y :85 },
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
								x1: 465, y1: -15,
								x2: 568, y2: -15,
								lineWidth: 1
							}
						]
					},
					{
						text: 'SOLICITUD DE CONEXIÓN DE DRENAJE',
						alignment: 'center',
						// width: 375,
						absolutePosition : { x :30,y :95 },
						style: 'bigger_bold',
						margin: [0,0,0,10],
					},
					{
						table:
						{
							widths: [ 328, 110, 110 ],
							headerRows: 1,
							// keepWithHeaderRows: 1,
							body: [
									[{ text: 'SERVICIO SOLICITADO', style: 'header_table', colSpan: 3, alignment: 'center' }, {}, {}],
									[{ text: 'DOMESTICO              COMERCIAL              INDUSTRIAL', style: 'body_table', alignment: 'center' }, { text: 'GIRO:', style: 'body_table_left', alignment: 'left' }, { text: 'Contrato:', style: 'body_table_left', alignment: 'left' }],
							]
						},

					},
					{
						canvas :
						[
							{
								type: 'rect',
								x: 38,
								y: -20,
								w: 15,
								h: 15,
								// color : gris_claro ,
								lineWidth: 1
							},
							{
								type: 'rect',
								x: 123,
								y: -20,
								w: 15,
								h: 15,
								// color : gris_claro ,
								lineWidth: 1
							},
							{
								type: 'rect',
								x: 208,
								y: -20,
								w: 15,
								h: 15,
								// color : gris_claro ,
								lineWidth: 1
							},
						]
					},
					{
						table:
						{
							widths: [ 140, 140, 150, 110 ],
							headerRows: 1,
							// keepWithHeaderRows: 1,
							body: [
									[{ text: 'DATOS DEL PROPIETARIO DEL PREDIO', style: 'header_table', colSpan: 4, alignment: 'center' }, {}, {}, {}],
									// ['APELLIDO PATERNO:', 'APELLIDO MATERNO:', 'NOMBRE ( S ):', 'TELEFONO:'],
									[{ text: 'APELLIDO PATERNO:', style: 'body_table_left', alignment: 'left' }, { text: 'APELLIDO MATERNO:', style: 'body_table_left', alignment: 'left' }, { text: 'NOMBRE ( S ):', style: 'body_table_left', alignment: 'left' },{text: 'TELEFONO:', style: 'body_table_left', alignment: 'left'}],
							]
						},
						margin: [0,10,0,-1],
					},
					{
						table:
						{
							widths: [ 205, 90, 90, 155 ],
							headerRows: 1,
							// keepWithHeaderRows: 1,
							body: [
								[{ text: 'DOMICILIO EN DONDE SE INSTALARA LA TOMA', style: 'header_table', colSpan: 4, alignment: 'center' }, {}, {}, {}],
								[{ text: 'CALLE:', style: 'body_table_left', alignment: 'left' }, { text: 'No. EXTERIOR:', style: 'body_table_left', alignment: 'left' }, { text: 'No. INTERIOR:', style: 'body_table_left', alignment: 'left' }, { text: 'COLONIA O FRACCIONAMIENTO', style: 'body_table_left', alignment: 'left' }],
							]
						},
						margin: [0,0,0,-1],
					},
					{
						table:
						{
							widths: [ 448, 110 ],
							// widths: [ 423, 135 ],
							headerRows: 1,
							// keepWithHeaderRows: 1,
							body: [
									[{ text: 'UBICACIÓN DEL PREDIO', style: 'header_table', colSpan: 2, alignment: 'center' }, {}],
									[{ text: 'ENTRE CALLES DE:', style: 'body_table_left', alignment: 'left' }, { text: 'DRENAJE:', style: 'body_table_left', alignment: 'left' }	],
							]
						},
						margin: [0,0,0,-1],
					},
					{
						table:
						{
							widths: [ 239,200, 110 ],
							// widths: [ 243,180, 135 ],
							headerRows: 1,
							// keepWithHeaderRows: 1,
							body: [
									[{ text: 'REFERENCIAS PERSONALES', style: 'header_table', colSpan: 3, alignment: 'center' }, {}, {}],
									[{ text: 'NOMBRE COMPLETO:', style: 'body_table_left', alignment: 'left' }, { text: 'DOMICILIO:', style: 'body_table_left', alignment: 'left' }, { text: 'TELEFONO:', style: 'body_table_left', alignment: 'left' }	],
							]
						},
						margin: [0,0,0,-1],
					},
					{
						table:
						{
							widths: [ 205, 90, 90, 155 ],
							headerRows: 1,
							// keepWithHeaderRows: 1,
							body: [
								[{ text: 'DOMICILIO ACTUAL DEL PROPIETARIO', style: 'header_table', colSpan: 4, alignment: 'center' }, {}, {}, {}],
								[{ text: 'CALLE:', style: 'body_table_left', alignment: 'left' }, { text: 'No. EXTERIOR:', style: 'body_table_left', alignment: 'left' }, { text: 'No. INTERIOR:', style: 'body_table_left', alignment: 'left' }, { text: 'COLONIA O FRACCIONAMIENTO', style: 'body_table_left', alignment: 'left' }],
							]
						},
						margin: [0,0,0,-1],
					},

					{
						table:
						{
							widths: [ 105, 105, 105, 106, 110 ],
							// widths: [ 205, 90, 90, 155 ],
							headerRows: 1,
							// keepWithHeaderRows: 1,
							body: [
								[{ text: 'PARA USO EXCLUSIVO DEL SISTEMA', style: 'header_table', colSpan: 5, alignment: 'center' }, {}, {}, {}, {}],
								[{ text: 'No. ACUERDO:', style: 'body_table_left', alignment: 'left' }, { text: 'No. CONVENIO:', style: 'body_table_left', alignment: 'left' }, { text: 'FECHA:', style: 'body_table_left', alignment: 'left' }, { text: 'No. RECIBO DE PAGO', style: 'body_table_left', alignment: 'left' }, { text: 'IMPORTE', style: 'body_table_left', alignment: 'left' }],
							]
						},
						margin: [0,0,0,-1],
					},
					{
						table:
						{
							widths: [ 567 ],
							headerRows: 1,
							// keepWithHeaderRows: 1,
							body: [
								[{ text: 'INSPECCION', style: 'header_table', alignment: 'center' }],
								[{text:'OBSERVACIONES: ', style: 'header_table', alignment: 'left'}],
								[{text:' ', style: 'header_table'}],
							]
						},
						margin: [0,0,0,-1],
					},
					{
						table:
						{
							widths: [ 448, 110 ],
							// widths: [ 567 ],
							headerRows: 1,
							// keepWithHeaderRows: 1,
							body: [
								[{text: ' ', style: 'header_table', alignment: 'center' },{ text: 'FIRMA DEL INSPECTOR', style: 'body_table_left', alignment: 'left' },],
							]
						},
						margin: [0,0,0,-1],
					},
					{
						text: 'ESTOY CONFORME DE QUE SE COBREN LAS TARIFAS EN VIGOR Y LAS QUE SE ESTABLEZCAN PARA MANTENIMIENTO DE DRENAJE Y ALCANTARILLADO.',
						style: 'normal',
						alignment: 'justify',
						margin: [0,8,0,0],
					},
					{
						text: 'USUARIO APODERADO',
						style: 'normal',
						absolutePosition : { x :90,y :570 },
					},
					{
						text: 'TEQUESQUITENGO, MOR., A _______ DE __________________________',
						style: 'normal',
						// absolutePosition : { x :280,y :600 },
						alignment: 'right',
						margin: [0,30,0,0],
					},
					{
						canvas:[
							{
								type: 'line',
								x1: 55	, y1: -10,
								x2: 190, y2: -10,
								lineWidth: 1
							}
						]
					},
					{
						canvas:[
							{
								type: 'rect',
								x: 0,
								y: 5,
								w: 380,
								h: 170,
								// color : gris_claro ,
								lineWidth: 1
							},
							{
								type: 'line',
								x1: 0	, y1: 25,
								x2: 380, y2: 25,
								lineWidth: 1
							}
						]
					},
					{
						text: 'CROQUIS DE LOCALIZACIO DEL PREDIO',
						style: 'normal',
						absolutePosition : { x :115,y :590 },
						// alignment: 'center',
						// margin: [0,30,0,0],
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
