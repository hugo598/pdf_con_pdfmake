'use strict';
var express 	= require('express'),
	server 			= express(),
	swig  			= require('swig'),
	path 				= require('path'),
	routers 		= require('./routers'),
	port 				= process.env.PORT || 3007;

server.engine('html', swig.renderFile);
server.set('view engine', 'html');
server.set('views', __dirname + '/views');
server.use( express.static( __dirname + '/public', { redirect : true } ) );

server.listen(port, function()
{
	console.log('Servidor iniciado en el puerto: ' + port);
});

server.use('/', require('./routers'));
