var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'123465', 
	database:'eleicoes_ipms'
});

var rotaEleicoes = require('./app/routes/eleicoes');
var rotacandidaturas = require('./app/routes/candidaturas');

rotaEleicoes(app,connection);
rotacandidaturas(app,connection);

app.listen(3000, function(){
	console.log('Servidor Rodando com Express')
});