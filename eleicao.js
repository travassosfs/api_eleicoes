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

//Retorna todas as eleições ativas
app.get('/eleicoes', function(req, res){
	connection.query('select * from eleicoes', function(erro, result){
		res.send(result);
	});
})

//Adiciona nova eleição
app.post('/eleicoes', function(req, res){
	var eleicao = req.body;
	var query = "INSERT INTO eleicoes (nome) VALUES ('"+eleicao.nome+"');";
  	
  	connection.query(query, function(erro, result){
		res.send(erro);
	});
})

//Retona uma eleição especifica pelo ID
app.get('/eleicoes/eleicao', function(req, res){
	var eleicao = req.query;
	connection.query('select * from candidatos where id = ' + eleicao.id, function(erro, result){
		res.send(result);
	});
})

//Adiciona candidato a eleição, recebe o id da eleição 
//e os dados do candidato 
app.post('/eleicoes/candidato', function(req, res){
	var candidato = req.body;
	var query = "INSERT INTO candidatos (id_eleicao, nome) VALUES ('"+candidato.id_eleicao+"','"+candidato.nome+"');";
	
	connection.query(query, function(erro, result){
		res.send(erro);
	});
})

//Retorna o resultado da eleição pelo ID da eleição
app.get('/eleicoes/resultado', function(req, res){

})

//Computa votação, deverá ser passado o ID da eleição 
//e o ID do Candidato
app.put('/eleicoes', function(req, res){	
	res.send(req.body);
})

//Adiciona candidato a eleição, recebe o id da eleição 
//e os dados do candidato 
app.post('/eleicoes/candidato', function(req, res){
	res.send(req.body);
})

app.listen(3000, function(){


	console.log('Servidor Rodando com Express')
});