var PdfPrinter = require('pdfmake');
var path = require ('path');
// var PdfPrinter = require('../src/printer');
var fonts = {
	Roboto: {
		normal: path.join(__dirname , 'fonts/'+'Roboto-Regular.ttf'),
		bold: path.join(__dirname , 'fonts/'+'fonts/Roboto-Medium.ttf'),
		italics: path.join(__dirname , 'fonts/'+'fonts/Roboto-Italic.ttf'),
		bolditalics: path.join(__dirname , 'fonts/'+'fonts/Roboto-Italic.ttf')
	}
};


var printer = new PdfPrinter(fonts);
var fs = require('fs');

var docDefinition = {
	content: [
		'First paragraph',
		'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines'
	]
};

var pdfDoc = printer.createPdfKitDocument(docDefinition);
pdfDoc.pipe(fs.createWriteStream('basics.pdf'));
pdfDoc.end();

