module.exports = function(app,connection) {
	//Adiciona candidato a eleição, recebe o id da eleição 
	//e os dados do candidato 
	app.post('/eleicoes/candidato', function(req, res){
		var candidato = req.body;
		var query = "INSERT INTO candidatos (id_eleicao, nome) VALUES ('"+candidato.id_eleicao+"','"+candidato.nome+"');";
		
		connection.query(query, function(erro, result){
			res.send(erro);
		});
	});

	//Retona candidato de uma eleição especifica pelo ID
	app.get('/eleicoes/eleicao', function(req, res){
		var eleicao = req.query;
		connection.query('select * from candidatos where id_eleicao = ' + eleicao.id + ";", function(erro, result){
			res.send(result);
		});
	});

	//Computa votação, deverá ser passado o ID da eleição 
	//e o ID do Candidato
	app.put('/eleicoes', function(req, res){	
		var votacao = req.body;
		connection.query('select * from candidatos where id = ' + votacao.id_candidato + ";", function(erro, row){
			console.log(row);
			//res.send(result);
			connection.query('update candidatos set votos = '+(row[0].votos + 1)+" where id = "+votacao.id_candidato+";", function(erro, result){
				res.send(erro);
			});
		});

		//res.send(req.body);
	});

	//Adiciona candidato a eleição, recebe o id da eleição 
	//e os dados do candidato 
	app.post('/eleicoes/candidato', function(req, res){
		res.send(req.body);
	});
};