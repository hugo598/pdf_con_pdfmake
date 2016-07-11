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


router.route('/factura')
  .get( function ( req, res )
  {


		var printer   		= new PdfPrinter(fonts);
		var cuenta 				= '01111';
		var total_pagar 	= '$ 500';
		var nombre				= 'CARLOS ARTURO AMADOR CUENTA';
		var direccion 		= 'Calle, Manzana: , lote: , Colonia: 253';
		var municipio 		= 'Municipio: 3, Estado: 20, Codigo Postal: 79461';
		var emision				= '09/07/2016';
		var bimestre 			= '5 - 2014 AL 6 -2014';
		var fecha_limite  = '01/08/2016';
		var fecha_recargos= '20/09/2016';
		var anomalia 			= 'Sin medidor';
		var medidor 			= 'A0001';
		var lectura_ante 	= '112';
		var lectura_actu 	= '125';
		var consumo 			= '10';
		var tarifa 				= 'DOMESTICA CLASE 3';
		var uso 					= 'DOMESTICA CLASE 3';
		var tipo_servicio = 'SERVICIO MEDICO';
		var estado_serv		= 'NORMAL';


		var tabla_cuenta_y= 93;
		var tabla_toma_y	= 189;
		var tabla_desg_y	= 333;
		var referencia_y	= 580;
		var tabla_tam_2_x = 230;

    var docDefinition = {
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
              h: 75,
              color : gris_oscuro ,
            },
            {
              type: 'rect',
              x: -2,
              y: 59,
              w: 577,
              h: 75,
              color : gris_claro ,
            },
						{
							type: 'line',
							x1: -2, y1: 80,
							x2: 577, y2: 80,
							lineColor: gris_oscuro,
							lineWidth: 1.4
						},
          ],
					margin: [0, 0, 0, 30]
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
          text: 'CUENTA:',
          absolutePosition : { x :25,y :tabla_cuenta_y },
          // absolutePosition : { x :25,y :93 },
          style: 'normal_negrita',
        },
        {
          text: cuenta,
          absolutePosition : { x :80,y :tabla_cuenta_y },
          style: 'normal',
        },
        {
          text: 'TOTAL A PAGAR:',
          absolutePosition : { x :380,y :tabla_cuenta_y },
          style: 'normal_negrita',
        },
        {
          text: total_pagar,
          absolutePosition : { x :510,y :tabla_cuenta_y },
          style: 'normal',
        },
        {
          text: 'NOMBRE:',
          absolutePosition : { x :25,y :115 },
          style: 'normal_negrita',
        },
        {
          text: nombre,
          absolutePosition : { x :80,y :115 },
          style: 'normal',
        },
        {
          text: 'CALLE:',
          absolutePosition : { x :25,y :130 },
          style: 'normal_negrita',
        },
        {
          text: direccion,
          absolutePosition : { x :80,y :130 },
          style: 'normal',
        },
        {
          text: 'MUNICIPIO:',
          absolutePosition : { x :25,y :145 },
          style: 'normal_negrita',
        },
        {
          text: municipio,
          absolutePosition : { x :80,y :145 },
          style: 'normal',
        },
				{
					text: 'EMISION:',
					absolutePosition : { x :380,y :115 },
					style: 'normal_negrita',
				},
				{
					text: emision,
					absolutePosition : { x :510,y :115 },
					style: 'normal',
				},
				{
					text: 'FECHA LIMITE	:',
					absolutePosition : { x :380,y :130 },
					style: 'normal_negrita',
				},
				{
					text: emision,
					absolutePosition : { x :510,y :130 },
					style: 'normal',
				},
				{
					text: 'RECARGOS A PARTIR DE:	:',
					absolutePosition : { x :380,y :145 },
					style: 'normal_negrita',
				},
				{
					text: emision,
					absolutePosition : { x :510,y :145 },
					style: 'normal',
				},
				{
          canvas:
          [
            {
              type: 'rect',
              x: -2,
              y: -9,
              w: 579,
              h: 123,
              color : gris_oscuro ,
            },
            {
              type: 'rect',
              x: -2,
              y: -9,
              w: 577,
              h: 122,
              color : gris_claro ,
            },
						{
							type: 'line',
							x1: -2, y1: 12,
							x2: 577, y2: 12,
							lineColor: gris_oscuro,
							lineWidth: 1.4
						},
          ],
					margin: [0, 0, 0, 30]

        },
				{
					text : 'INFORMACION DE LA TOMA:',
					absolutePosition : { x :25,y :tabla_toma_y },
					style: 'normal_negrita',
				},
				{
					text : 'COMPORTAMIENTO DEL CONSUMO:',
					absolutePosition : { x :380,y :tabla_toma_y },
					style: 'normal_negrita',
				},
				{
					text : 'ANOMALIA:',
					absolutePosition : { x :25,y :tabla_toma_y + 25 },
					style: 'chica_negrita',
				},
				{
					text : anomalia,
					absolutePosition : { x :140,y :tabla_toma_y + 25 },
					style: 'chica',
				},
				{
					text : 'SERIE MEDIDOR:',
					absolutePosition : { x :25,y :tabla_toma_y + 40 },
					style: 'chica_negrita',
				},
				{
					text : medidor,
					absolutePosition : { x :140,y :tabla_toma_y + 40 },
					style: 'chica',
				},
				{
					text : 'TARIFA:',
					absolutePosition : { x :25,y :tabla_toma_y + 55 },
					style: 'chica_negrita',
				},
				{
					text : tarifa,
					absolutePosition : { x :140,y :tabla_toma_y + 55 },
					style: 'chica',
				},
				{
					text : 'USO:',
					absolutePosition : { x :25,y :tabla_toma_y + 70 },
					style: 'chica_negrita',
				},
				{
					text : uso,
					absolutePosition : { x :140,y :tabla_toma_y + 70 },
					style: 'chica',
				},
				{
					text : 'TIPO DE SERVICIO:',
					absolutePosition : { x :25,y :tabla_toma_y + 85 },
					style: 'chica_negrita',
				},
				{
					text : tipo_servicio,
					absolutePosition : { x :140,y :tabla_toma_y + 85 },
					style: 'chica',
				},
				{
					text : 'ESTADO DEL SERVICIO:',
					absolutePosition : { x :25,y :tabla_toma_y +  100 },
					style: 'chica_negrita',
				},
				{
					text : estado_serv,
					absolutePosition : { x :140,y :tabla_toma_y +  100 },
					style: 'chica',
				},
				{
					text : 'BIMESTRE(S)',
					absolutePosition : { x :380,y :tabla_toma_y + 25  },
					style: 'chica_negrita',
				},
				{
					text : bimestre,
					absolutePosition : { x :510,y :tabla_toma_y + 25  },
					style: 'chica',
				},
				{
					text : 'LECTURA ANTERIOR	',
					absolutePosition : { x :380,y :tabla_toma_y + 40 },
					style: 'chica_negrita',
				},
				{
					text : lectura_ante,
					absolutePosition : { x :510,y :tabla_toma_y + 40 },
					style: 'chica',
				},
				{
					text : 'LECTURA ACTUAL',
					absolutePosition : { x :380,y :tabla_toma_y + 55 },
					style: 'chica_negrita',
				},
				{
					text : lectura_actu,
					absolutePosition : { x :510,y :tabla_toma_y + 55 },
					style: 'chica',
				},
				{
					text : 'CONSUMO(M3)',
					absolutePosition : { x :380,y :tabla_toma_y + 70 },
					style: 'chica_negrita',
				},
				{
					text : consumo,
					absolutePosition : { x :510,y :tabla_toma_y + 70 },
					style: 'chica',
				},
				{
					canvas:
					[
						{
							type: 'rect',
							x: -2,
							y: -9,
							w: 579,
							h: 200,
							color : gris_oscuro ,
						},
						{
							type: 'rect',
							x: -2,
							y: -9,
							w: 577,
							h: 199,
							color : gris_claro ,
						},
						{
							type: 'line',
							x1: -2, y1: 12,
							x2: 577, y2: 12,
							lineColor: gris_oscuro,
							lineWidth: 1.4
						},
						{
							type: 'line',
							x1: -2, y1: 112,
							x2: 260, y2: 112,
							lineColor: gris_oscuro,
							lineWidth: 1.4
						},
						{
							type: 'line',
							x1: -2, y1: 129,
							x2: 260, y2: 129,
							lineColor: gris_oscuro,
							lineWidth: 1.4
						},
					],
					margin: [0, 0, 0, 40]
				},
				{
					text: 'INFORMACION DE LA TOMA',
					absolutePosition : { x :25, y : tabla_desg_y },
					style: 'normal_negrita',
				},
				{
					text : 'COMPORTAMIENTO DEL CONSUMO:',
					absolutePosition : { x :380,y : tabla_desg_y },
					style: 'normal_negrita',
				},
				{
					text: '*DETALLE BIMESTRE ACTUAL	',
					absolutePosition : { x :25, y : tabla_desg_y + 25},
					style: 'normal_negrita',
				},
				{
					text : '283.00',
					absolutePosition : { x :tabla_tam_2_x,y :tabla_desg_y + 25 },
					style: 'chica',
				},
				{
					text: '*DESCARGA SANITARIA (10%)',
					absolutePosition : { x :25, y : tabla_desg_y + 40},
					style: 'normal_negrita',
				},
				{
					text : '283.00',
					absolutePosition : { x :tabla_tam_2_x,y :tabla_desg_y + 40 },
					style: 'chica',
				},
				{
					text: '**IMPUESTO AL DESARROLLO SOCIAL (1.2%)	',
					absolutePosition : { x :25, y : tabla_desg_y + 55},
					style: 'normal_negrita',
				},
				{
					text : '283.00',
					absolutePosition : { x :tabla_tam_2_x,y :tabla_desg_y + 55 },
					style: 'chica',
				},
				{
					text: 'RECONEXION',
					absolutePosition : { x :25, y : tabla_desg_y + 70},
					style: 'normal_negrita',
				},
				{
					text : '283.00',
					absolutePosition : { x :tabla_tam_2_x,y :tabla_desg_y + 70 },
					style: 'chica',
				},
				{
					text: 'MULTAS',
					absolutePosition : { x :25, y : tabla_desg_y + 85},
					style: 'normal_negrita',
				},
				{
					text : '283.00',
					absolutePosition : { x :tabla_tam_2_x,y :tabla_desg_y + 85 },
					style: 'chica',
				},
				{
					text: 'OTROS CONCEPTOS',
					absolutePosition : { x :25, y : tabla_desg_y + 100},
					style: 'normal_negrita',
				},
				{
					text : '283.00',
					absolutePosition : { x :tabla_tam_2_x,y :tabla_desg_y + 100 },
					style: 'chica',
				},
				{
					text: 'SUBTOTAL',
					absolutePosition : { x :25, y : tabla_desg_y + 115},
					style: 'titulo',
				},
				{
					text : '283.00',
					absolutePosition : { x :tabla_tam_2_x,y :tabla_desg_y + 115 },
					style: 'titulo',
				},
				{
					text: 'REZAGO',
					absolutePosition : { x :25, y : tabla_desg_y + 132},
					style: 'normal_negrita',
				},
				{
					text : '283.00',
					absolutePosition : { x :tabla_tam_2_x,y :tabla_desg_y + 132 },
					style: 'chica',
				},
				{
					text: 'RECARGOS',
					absolutePosition : { x :25, y : tabla_desg_y + 147},
					style: 'normal_negrita',
				},
				{
					text : '283.00',
					absolutePosition : { x :tabla_tam_2_x,y :tabla_desg_y + 147 },
					style: 'chica',
				},
				{
					text: '(-)CORRECCION	',
					absolutePosition : { x :25, y : tabla_desg_y + 162},
					style: 'normal_negrita',
				},
				{
					text : '283.00',
					absolutePosition : { x :tabla_tam_2_x,y :tabla_desg_y + 162 },
					style: 'chica',
				},
				{
					text: '*** TOTAL A PAGAR',
					absolutePosition : { x :25, y : tabla_desg_y + 177},
					style: 'normal_negrita',
				},
				{
					text : '283.00',
					absolutePosition : { x :tabla_tam_2_x,y :tabla_desg_y + 177 },
					style: 'chica',
				},
				{
					text:'Bancomer',
					absolutePosition : { x :25 ,y :referencia_y },
					style: 'chica'
				},
				{
					text:'CIE 582122',
					absolutePosition : { x :110 ,y :referencia_y },
					style: 'chica'
				},
				{
					text:'Banamex',
					absolutePosition : { x :25 ,y :referencia_y + 15 },
					style: 'chica'
				},
				{
					text:'PA: 128513 GOB OAXACA IMP E',
					absolutePosition : { x :110 ,y :referencia_y + 15 },
					style: 'chica'
				},
				{
					text:'Banorte',
					absolutePosition : { x :25 ,y :referencia_y + 30 },
					style: 'chica'
				},
				{
					text:'03600',
					absolutePosition : { x :110 ,y :referencia_y + 30 },
					style: 'chica'
				},
				{
					text:'Scotiabank',
					absolutePosition : { x :25 ,y :referencia_y + 45 },
					style: 'chica'
				},
				{
					text:'1063',
					absolutePosition : { x :110 ,y :referencia_y + 45 },
					style: 'chica'
				},
				{
					text:'Santander',
					absolutePosition : { x :25 ,y :referencia_y + 60 },
					style: 'chica'
				},
				{
					text:'1092',
					absolutePosition : { x :110 ,y :referencia_y + 60 },
					style: 'chica'
				},
				{
					text:'HSBC',
					absolutePosition : { x :25 ,y :referencia_y + 75 },
					style: 'chica'
				},
				{
					text:'4047',
					absolutePosition : { x :110 ,y :referencia_y + 75 },
					style: 'chica'
				},
				{
					text: ['- SU PAGO CON ESTE DOCUMENTO SOLO ES VALIDA HASTA LA FECHA LIMITE QUE SE INDICA EN LA PARTE SUPERIOR\n',
					'- ANTES DE REALIZAR SU PAGO, VERIFIQUE SUS DATOS FISCALES EN NUESTRAS OFICINAS\n',
					'- SU FACTURA ELECTRONICA ESTA DISPONIBLE PARA DESCARFAR EN EL SITIO DE INTERNET:\n',
					'www.finanzasoaxaca.gob.mx/cfdi/consulta_cfdi.jsp\n'
					],
					absolutePosition : { x :25 ,y :referencia_y + 150 },
					style: 'pie'
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
    			fontSize: 9,
    			normal: true,
    		},
    		normal_negrita: {
    			fontSize: 9,
    			bold: true,
    		},
    		chica: {
    			fontSize: 8,
    			normal: true,
    		},
    		pie: {
    			fontSize: 6,
    			normal: true,
    		},
    		chica_negrita: {
    			fontSize: 8,
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
