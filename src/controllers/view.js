class Cadastro{

    async get(req, res){        
        let id = req.query.id;
        if(id){
            let resp = await getQuerySingle(id);
            res.send(resp)
        } else {
            let resp = await getQueryFull();
            res.send(resp)
        }
    }

    async post(req, res){
        let nome = req.body.nome
        let idade = req.body.idade
        let uf = req.body.uf
        let resp = await postCliente(nome, idade, uf)
        if (resp.rowCount == 1){
            res.sendStatus(200)
        } else {
            res.sendStatus(400)
        }
    }

    async put(req, res){
        let id = req.query.id;
        let nome = req.body.nome
        let idade = req.body.idade
        let uf = req.body.uf
        let resp = await putCliente(id, nome, idade, uf)
        if (resp.rowCount == 1){
            res.sendStatus(200)
        } else {
            res.sendStatus(400)
        }
    }

