module.exports = function(app) {	
	//Retorna todas as eleições ativas
	app.get('/eleicoes', function(req, res){
		connection.query('select * from eleicoes', function(erro, result){
			res.send(result);
		});
	})

	//Retona uma eleição especifica pelo ID
	app.get('/eleicoes', function(req, res){
		connection.query('select * from candidatos where id = 1', function(erro, result){
			res.send(result);
		});
	})

	//Retorna o resultado da eleição pelo ID da eleição
	app.get('/eleicoes/resultado', function(req, res){

	})

	//Adiciona nova eleição
	app.post('/eleicoes', function(req, res){
		var eleicao = req.body;	
		res.send(eleicao);
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
};