module.exports = function(app,connection) {
	//Retorna todas as eleições ativas
	app.get('/eleicoes', function(req, res){
		connection.query('select * from eleicoes', function(erro, result){
			res.send(result);
		});
	});
	
	//Adiciona nova eleição
	app.post('/eleicoes', function(req, res){
		var eleicao = req.body;
		var query = "INSERT INTO eleicoes (nome) VALUES ('"+eleicao.nome+"');";
	  	
	  	connection.query(query, function(erro, result){
			res.send(erro);
		});
	});
	
	//Retorna o resultado da eleição pelo ID da eleição
	app.get('/eleicoes/resultado', function(req, res){

	});

};