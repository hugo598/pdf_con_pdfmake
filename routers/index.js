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
    		}
    	}
    };
    var pdfDoc = printer.createPdfKitDocument(docDefinition);
    pdfDoc.pipe( res );
    // pdfDoc.pipe(fs.createWriteStream('contrato.pdf'));
    pdfDoc.end();
  });

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
						absolutePosition : { x :30,y :89 },
						style: 'bigger',
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
