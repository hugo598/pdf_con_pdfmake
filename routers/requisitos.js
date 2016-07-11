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

router.route('/requisitos')
  .get( function ( req, res )
  {


    var printer   = new PdfPrinter(fonts);

    var docDefinition = {
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
            	h: 25,
              color : gris_oscuro ,
            },
            {
            	type: 'rect',
            	x: -2,
            	y: 59,
              w: 577,
            	h: 25,
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
          width: 375,
          absolutePosition : { x :155,y :35 },
    			style: 'header',
    		},
        {
    			text: 'SISTEMA OPERADOR INTERMUNICIPAL DE AGUA POTABLE Y SANEAMIENTO DE TEQUESQUITENGO',
          width: 375,
          absolutePosition : { x :141,y :60 },
    			style: 'subtitulo',
    		},
				{
					text: 'REQUISITOS PARA LA CONTRATACIÓN DE LOS SERVICIOS DE AGUA POTABLE Y DRENAJE.',
					alignment: 'center',
					absolutePosition : { x :20,y :90 },
					style: 'header',
				},
				{
					text: 'EN TOMAS DE MEDIA PULGADA',
					style: 'header',
					margin: [0,25,0,10],
				},
				{
					text: 'Para casa-habitación',
					style: 'normal_negrita',
				},
				{
					ul: ['Acreditar la propiedad y/o la posesión del inmueble, mediante copia de escritura, ó compra-venta debidamente requisitada, ó carta de posesión, cesión de derechos firmada por el comisariado ejidal.\n',
								 'Copia del pago de impuesto predial al corriente en su caso\n',
								 'Copia de identificación oficial vigente del propietario.\n',
								 'Que no exista adeudo en el inmueble para el cual se solicita el nuevo contrato.\n\n',
								 'Si renta, lo anterior más:.\n',
								 'Copia del contrato de arrendamiento.\n',
								 'Autorización por escrito del arrendador.\n',
								 'Copia de identificación oficial vigente del arrendatario.\n\n',
							],
							style: 'normal'
				},
				{
					text: ['Para servicio comercial:\n',
								'Personas físicas:\n',],
					style : 'normal_negrita'
				},
				{
					ul :  ['Acreditar la propiedad y/o la posesión del inmueble, mediante copia de escritura, ó compra-venta debidamente requisitada, ó carta de posesión, cesión de derechos firmada por el comisariado ejidal.',
								 'Copia de identificación oficial vigente del propietario.\n',
								 'Que no exista adeudo en el inmueble para el cual se solicita el nuevo contrato.\n',
								 'Licencia de funcionamiento y/o alta de hacienda.\n',
								 'Copia del pago del impuesto predial al corriente en su caso\n\n',
							 ],
					style: 'normal'
				},
				{
					text: 'Personas morales:\n',
					style : 'normal_negrita'
				},
				{
					ul :  ['Acreditar la propiedad y/o la posesión del inmueble, mediante copia de escritura, ó compra-venta debidamente requisitada, ó carta de posesión, cesión de derechos firmada por el comisariado ejidal.\n',
								 'Copia de identificación oficial vigente del propietario.\n',
								 'Copia del pago del impuesto predial al corriente en su caso\n',
								 'Que no exista adeudo en el inmueble para el cual se solicita el nuevo contrato.\n',
								 'Licencia de funcionamiento y/o alta de hacienda.\n',
								 'Copia del acta constitutiva de la empresa.\n',
								 'Copia del poder notarial del representante legal.\n',
								 'Copia de identificación oficial vigente del representante legal.\n\n',
								 'Si rentan, lo anterior más:\n',
								 'Copia del contrato de arrendamiento.\n',
								 'Autorización por escrito del arrendador.\n',
								 'Copia de identificación oficial vigente del arrendatario.\n',],
					style: 'normal'
				},
				{
					text: 'EN TOMAS MAYORES A MEDIA PULGADA',
					style: 'header',
					margin: [0,20,0,10],
				},
				{
					ul: ['Original y dos copias de:\n',
								 'Oficio de solicitud de factibilidad de los servicios de agua potable y drenaje, dirigido al Sistema Operador Intermunicipal de Agua Potable y Saneamiento de Tequesquitengo y cumplir con los requisitos de la misma.\n',
								 'Copia de oficio de factibilidad emitido por el Sistema Operador Intermunicipal de Agua Potable y Saneamiento de Tequesquitengo.\n',
								 'Croquis de ubicación del inmueble.\n',
								 'Memoria de cálculo.\n',
								 'Juego de planos hidráulicos y sanitarios y especificación de los metros cuadrados de áreas verdes para riego.\n',
								 'Pago del estudio de factibilidad.\n\n',
							],
							style : 'normal',
				},
				{
					text: 'Personas morales:\n',
					style : 'normal_negrita'
				},
				{
					ul:	['Acreditar la propiedad y/o la posesión del inmueble, mediante copia de escritura, ó compra-venta debidamente requisitada, ó carta de posesión, cesión de derechos firmada por el comisariado ejidal.\n',
							 'Copia de identificación oficial vigente del propietario.\n',
							 'Copia del pago del impuesto predial al corriente en su caso\n',
							 'Que no exista adeudo en el inmueble para el cual se solicita el nuevo contrato.\n',
							 'Licencia de funcionamiento y/o alta de hacienda.\n',
							 'Copia del acta constitutiva de la empresa.\n',
							 'Copia del poder notarial del representante legal.\n',
							 'Copia de identificación oficial vigente del representante legal.\n',
							 'Si rentan, lo anterior más:\n',
							 'Copia del contrato de arrendamiento.\n',
							 'Autorización por escrito del arrendador.\n',
							 'Copia de identificación oficial vigente del arrendatario.\n\n',
							],
						style : 'normal',
				},
				{
					text: 'En el caso de las personas físicas, presentar además tres copias de:\n',
					style : 'normal_negrita'
				},
				{
					ul:	['Escritura del inmueble.\n',
							'Identificación oficial vigente del propietario.\n',
							'En el caso de las personas morales, presentar además tres copias de:\n',
							'Escritura del inmueble.\n',
							'Identificación oficial vigente del propietario.\n',
							'Acta constitutiva de la empresa.\n',
							'Poder notarial del representante legal.\n',
							'Identificación oficial vigente del representante legal\n',
					],
					style: 'normal',
				},
				{
					text:[
						{text: 'Nota: ',style: 'normal_negrita' },
						'Se debe cubrir el importe que establezca el Sistema Operador Intermunicipal de Agua Potable y Saneamiento de Tequesquitengo con fundamento en la Ley Estatal de Agua del Estado de Morelos.'
					],
					style : 'normal',
					margin: [0,20,0,10],

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
    			fontSize: 15,
    			italics: true,
    		},
    		normal: {
    			fontSize: 10.5,
    			normal: true,
    		},
    		normal_negrita: {
    			fontSize: 10,
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
