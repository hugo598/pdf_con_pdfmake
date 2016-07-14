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

router.route('/contrato')
  .get( function ( req, res )
  {

    var nombre    = 'Hugo';
    var apaterno  = 'Casildo';
    var amaterno  = 'Pino';
    var direccion = 'Calle Pedregal S/N Barrio San Juan, Coyotepec';
		var servicio	= 'SERVICIO AGUA';
		var giro 			= 'DOMESTICO CLASE 1';
		var dia 			= '06';
		var mes 			= 'Junio';
		var anio 			= '2016';
		var contrato 	= '1001';

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
            	h: 37,
              color : gris_oscuro ,
            },
            {
            	type: 'rect',
            	x: -2,
            	y: 59,
              w: 577,
            	h: 37,
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
					text: 'SERVICIO:',
          absolutePosition : { x :25,y :95 },
    			style: 'normal_negrita',
				},
				{
					text: servicio,
          absolutePosition : { x :75,y :95 },
    			style: 'normal',
				},
				{
					text: 'GIRO:',
					absolutePosition : { x :215,y :95 },
					style: 'normal_negrita',
				},
				{
					text: giro,
					absolutePosition : { x :250,y :95 },
					style: 'normal',
				},
				{
					text: 'CONTRATO:',
					absolutePosition : { x :500, y:95 },
					style: 'normal_negrita',
				},
				{
					text: contrato,
					// width: 55,
					alignment: 'center',
					absolutePosition : { x :465, y:105 },
					style: 'normal',
				},
        {
    			text: ['CONTRATO que celebra por una parte EL SISTEMA OPERADOR INTERMUNICIPAL DE AGUA POTABLE Y SANEAMIENTO DE TEQUESQUITENGO, MOR. representada por ',
                ' __ que. en lo sucesivo se denominará EL SISTEMA y por la otra ' ,
                {text: nombre + ' ' + apaterno + ' ' + amaterno, fontSize: 10, bold: true },
                ' a quien en lo sucesivo de este CONTRATO se denominará EL USUARIO y cuyo objeto será el suministro de agua potable, drenaje y saneamiento segun sea el caso, con arreglo a las siguientes:'],
          alignment: 'justify',
          margin: [0, 18, 0, 8],
    			style: 'normal',
    		},
        {
          text: 'CLAUSULAS:',
          alignment: 'center',
          style: 'titulo',
          margin: [0, 0, 0, 15],
        },
        {
          text:
          [{text: 'PRIMERA.-',bold: true},
            ' El servicio será conectado en: ',
            {text : direccion, fontSize: 10, bold: true}
          ],
          alignment: 'justify',
          margin: separacion,
          lineHeight: interlineado,
          style: 'normal'
        },
        {
          text: [{text: 'SEGUNDA.-', bold: true},
              'EL USUARIO se obliga a permitir que el personal autorizado de EL SISTEMA puede efectuar las lecturas correspondientes y las reparaciones del medidor que fueren necesarias.'],
          alignment: 'justify',
          margin: separacion,
          lineHeight: interlineado,
          style: 'normal'
        },
        {
          text: [{text: 'TERCERA.-', bold: true},
              'La lectura de los medidores se hará por periodos bimestrales, en caso de que no pueda tomarla por razones no imputables a su trabajo, el Lecturista lo indicará en la boleta, por lo que EL USUARIO se obliga a remitir a nuestras oficinas su lectura en los cinco días posteriores de la notificación.'],
          alignment: 'justify',
          margin: separacion,
          lineHeight: interlineado,
          style: 'normal'
        },
        {
          text: [{text: 'CUARTA.-', bold: true},
              'El lecturista entregará en el predio del usuario, giro o establecimiento, el recibo de consumo a efecto de que a partir de ese momento cubra el importe del mismo; usuario no lo recibiera en su oportunidad deberá presentarse en las oficinas del SISTEMA para solicitar un duplicado y pueda efectuar el pago.'],
          alignment: 'justify',
          margin: separacion,
          lineHeight: interlineado,
          style: 'normal'
        },
        {
          text: [{text: 'QUINTA.-', bold: true},
              'EL USUARIO pagará bimestralmente su recibo de consumo en base a las tarifas que se encuentran aprobadas o las que en el futuro se establezcan. EL USUARIO cubrirá el pago correspondiente en las oficinas de EL SISTEMA, en moneda nacional de curso legal dentro del plazo señalado en su recibo de consumo correspondiente al bimestre inmediato anterior o de la fecha que se comunique al adeudo correspondiente, y en caso de no hacer los pagos, en tiempo y forma, los adeudos pasaran hacer créditos fiscales, que serán cobrados en términos de la Ley Estatal del Agua Potable, Código Fiscal del Estado de Morelos y demás leyes aplicables.'],
          alignment: 'justify',
          margin: separacion,
          lineHeight: interlineado,
          style: 'normal'
        },
        {
          text: [{text: 'SEXTA.-', bold: true},
              'EL SISTEMA cobrará al USUARIO la tarifa mínima vigente cuando existan desperfectos en el medidor no imputables a él.'],
          alignment: 'justify',
          margin: separacion,
          lineHeight: interlineado,
          style: 'normal'
        },
        {
          text: [{text: 'SÉPTIMA.-', bold: true},
              'La falta de pago puntual del recibo del consumo motivará al cobro de recargos, así como en los casos que EL SISTEMA lo estime conveniente, la limitación o cancelación del servicio, de acuerdo a lo dispuesto en la ley de Agua Potable del Estado de Morelos.'],
          alignment: 'justify',
          margin: separacion,
          lineHeight: interlineado,
          style: 'normal'
        },
        {
          text: [{text: 'OCTAVA.-', bold: true},
              'En caso de que el USUARIO deje de pagar el recibo de consumo durante dos bimestres consecutivos, se hará efectivo su cobro mediante el procedimiento económico-coactivo aplicado conforme a las disposiciones legales en vigor a través de la Oficina Ejecutora correspondiente del Estado. La facultad económica-coactiva se encausará, en contra del predio que se consigna en el presente contrato sin que sea obstáculo el que sustituya a EL USUARIO en los derechos de propiedad a posesión.'],
          alignment: 'justify',
          margin: separacion,
          lineHeight: interlineado,
          style: 'normal'
        },
        {
          text: [{text: 'NOVENA.-', bold: true},
              'En caso de que al USUARIO se le conecte el servicio y no se le instale medidor, mientras e_sto no se pueda instalar, pagará la cuota correspondiente prevista en la Ley Tarifaria vigente.'],
          alignment: 'justify',
          margin: separacion,
          lineHeight: interlineado,
          style: 'normal'
        },
        {
          text: [{text: 'DÉCIMA.-', bold: true},
              'En caso de que la lectura no se pueda tomar y los consumos a determinar por desperfectos en el medidor causados por el USUARIO o por terceras personas, el pago del consumo será el que resulte de calcular las horas del servicio proporcionadas por el diámetro de la toma y de acuerdo a la tarifa vigente, independiente de que EL SISTEMA imponga las sanciones que procedan en cada caso, entre ellas, el pago del importe de la reparación y reposición del medidor.'],
          alignment: 'justify',
          margin: separacion,
          lineHeight: interlineado,
          style: 'normal'
        },
        {
          text: [{text: 'DECIMA PRIMERA.-', bold: true},
              'EL USUARIO es el propietario del medidor que se instala en su toma para verificación de lecturas, por lo tanto se compromete a construir un nicho al frente de su predio en la parte exterior, con el objeto de que el medidor sea protegido contra robo, manipulaciones y cualquier clase de deterioro.'],
          alignment: 'justify',
          margin: separacion,
          lineHeight: interlineado,
          style: 'normal'
        },
        {
          text: [{text: 'DECIMA SEGUNDA.-', bold: true},
              'EL USUARIO se compromete a no retirar, ni modificarla instalación del medidor y únicamente permitirá que el mismo sea revisado, reparado, retirado o reubicado por el personal de EL SISTEMA.'],
          alignment: 'justify',
          margin: separacion,
          lineHeight: interlineado,
          style: 'normal'
        },
        {
          text: [{text: 'DECIMA TERCERA.-', bold: true},
              'Cuando el medidor Instalado sufra algún daño o escape de agua EL USUARIO deberá reportarlo a EL SISTEMA para que este proceda a su reparación, en la inteligencia de que dicho costo ser cubierto por EL USUARIO.'],
          alignment: 'justify',
          margin: separacion,
          lineHeight: interlineado,
          style: 'normal'
        },
        {
          text: [{text: 'DECIMA CUARTA.-', bold: true},
              'EL USUARIO se da por enterado y acepta que no podrá permitir o conceder derivaciones de las instalaciones del servicio de agua que reciba a otro u otros edificios, predios, giros o establecimientos, en caso de incurrir en algún acto de los anteriormente citados está conforme en aceptar y cumplir con las sanciones que le imponga EL SISTEMA por dichos motivos, así como evitar la repetición de los mismos actos.'],
          alignment: 'justify',
          margin: separacion,
          lineHeight: interlineado,
          style: 'normal'
        },
        {
          text: [{text: 'DECIMA QUINTA.-', bold: true},
              'La responsabilidad de EL SISTEMA cesa precisamente en el punto de entrega del agua potable al consumidor, precisamente antes del medidor; en consecuencia cualquier reclamación que surja de este punto en adelante, por ser la parte de la instalación perteneciente al USUARIO, será de la exclusiva responsabilidad del mismo.'],
          alignment: 'justify',
          margin: separacion,
          lineHeight: interlineado,
          style: 'normal'
        },
        {
          text: [{text: 'DECIMA SEXTA.-', bold: true},
              'EL USUARIO se obliga a tener un lugar de almacenamiento para agua potable, en el lugar donde se abastezca por parte del SISTEMA, en razón a prever un desabasto por cualquier contingencia que no pueda ser reparada de manera inmediata por el SISTEMA, eximiendo de responsabilidad al SISTEMA el USUARIO por la falta de servicio temporal que pueda darse y no tener previsto el almacenamiento.'],
          alignment: 'justify',
          margin: separacion,
          lineHeight: interlineado,
          style: 'normal'
        },
        {
          text: [{text: 'DECIMA SEPTIMA.-', bold: true},
              'EL SISTEMA, tendrá derecho sin restricción alguna por parte de EL USUARIO para instalar, extender, componer, cambiar o quitar la línea, equipo de medición, útiles de limitación o estrangulación y demás materiales necesarios para el servicio objeto de este Contrato.'],
          alignment: 'justify',
          margin: separacion,
          lineHeight: interlineado,
          style: 'normal'
        },
        {
          text: [{text: 'DECIMA OCTAVA.-', bold: true},
              'EL USUARIO se obliga utilizar las instalaciones en forma adecuada y a no desperdiciar el agua y que de no hacerlo así, acepta las sanciones técnicas económicas que determine el SISTEMA. DECIMA NOVENA.- En caso de enajenació'],
          alignment: 'justify',
          margin: separacion,
          lineHeight: interlineado,
          style: 'normal'
        },
        {
          text: [{text: 'DECIMA NOVENA.-', bold: true},
              'En caso de enajenación del inmueble donde se encuentren conectados los servicios a que este Contrato se refiere, EL USUARIO deberá de dar al aviso por escrito de este hecho a EL SISTEMA.'],
          alignment: 'justify',
          margin: separacion,
          lineHeight: interlineado,
          style: 'normal'
        },
        {
          text: [{text: 'VIGÉSIMA.-', bold: true},
              'Si llegara a ser interrumpidos los servicios que ampara este CONTRATO, por casos fortuitos o de fuerza mayor o por causa que no le sean imputables, así como por la descompostura de la maquinaria y aparatos instalados, el presente Contrato que dará en suspenso sin responsabilidad para ninguna de las partes. Los sellos que se colocan en los medidores, a la llave de limitación o de estrangulación a las cajas de protección o cualquier otro artículo, no podrán ser removidos más que por el personal que al efecto designe EL SISTEMA o por las autoridades competentes.'],
          alignment: 'justify',
          margin: separacion,
          lineHeight: interlineado,
          style: 'normal'
        },
        {
          text: [{text: 'VIGÉSIMA PRIMERA.-', bold: true},
              'EL SISTEMA tendrá derecho en todo tiempo y lugar, a suspender el servicio temporalmente para hacer reparaciones o para cualquier otro objeto indispensable al servicio en general, procurando que dichas suspensiones sean lo más cortas posibles. Si la suspensión es larga se prevendrá a los usuarios con avisos oportunos a través de los medios masivos de comunicación.'],
          alignment: 'justify',
          margin: separacion,
          lineHeight: interlineado,
          style: 'normal'
        },
        {
          text: [{text: 'VIGÉSIMA SEGUNDA.-', bold: true},
              'EL SISTEMA se reserva la facultad de cuantificar el gasto individual de agua potable en las tomas de los USUARIOS, en función de la capacidad de sus instalaciones y de la cuantía integral de la demanda, constituyéndose en arbitro exclusivo de la regulación de los caudales de acuerdo con las fluctuaciones de la relación PRODUCCIÓN-DEMANDA, facultad que el USUARIO desde ahora reconoce y acepta respetar las disposiciones que para el cumplimiento de esta Cláusula dicte EL SISTEMA.'],
          alignment: 'justify',
          margin: separacion,
          lineHeight: interlineado,
          style: 'normal'
        },
        {
          text: [{text: 'VIGÉSIMA TERCERA.-', bold: true},
              'En caso de querer prescindir del servicio de agua, EL USUARIO tendrá que dar parte al SISTEMA por medio de un escrito en forma induvitable.'],
          alignment: 'justify',
          margin: separacion,
          lineHeight: interlineado,
          style: 'normal'
        },
        {
          text: [{text: 'VIGÉSIMA CUARTA.-', bold: true},
              'Para la interpretación y cumplimiento el presente Contrato así como para todo aquello que no esté expresamente estipulado en el'],
          alignment: 'justify',
          margin: separacion,
          lineHeight: interlineado,
          style: 'normal'
        },
				{
					text: 'Tequesquitengo, Mor., a ' + dia + ' de ' + mes + ' del ' + anio,
					style: 'normal',
					alignment:  'right',
					margin: [0,60,0,100]

				},
				{
					alignment: 'center',
					columns: [
						{
							// width: 280,
							text: 'EL USUARIO',
							style: 'normal',
						},
						{
							// width: 260,
							text: 'DIRECTOR GENERAL S.A.P.A.S.T.',
							style: 'normal',
						}
					]
				},
				{
					canvas : [
						{
							type: 'line',
							x1: 60, y1: 130,
							x2: 230, y2: 130,
							lineWidth: 1
						},
						{
							type: 'line',
							x1: 340, y1: 130,
							x2: 515, y2: 130,
							lineWidth: 1
						}
					]
				},
				{text: 'RECIBO DE PAGO', pageOrientation: 'portrait', pageSize: 'LETTER', pageBreak: 'before'},

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
    		}
    	}
    };
    var pdfDoc = printer.createPdfKitDocument(docDefinition);
    pdfDoc.pipe( res );
    // pdfDoc.pipe(fs.createWriteStream('contrato.pdf'));
    pdfDoc.end();
  });


  module.exports = router;
