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



router.route('/')
.get(function(req, res)
{
	res.render('index.html')
});





module.exports = router;
