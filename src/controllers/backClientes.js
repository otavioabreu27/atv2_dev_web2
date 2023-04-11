import pg from "pg";

// CONEXAO BD
var client = new pg.Client({
                    host:'127.0.0.1',
                    user:'user',
                    database: 'postgres',
                    password: 'senha',
                    port: 5432,
                });

await client.connect();
// #############################################################################

// GET
async function getQuerySingle(id){
    try {
        
        let result = await client.query(`SELECT * FROM clientes WHERE id=$1`, [id]);
        return result.rows
    } catch(e){
        return {
            error: `${e}`
        }
    }
}

async function getQueryFull(){
    try {
        let result = await client.query(`SELECT * FROM clientes`);
        return result.rows
    } catch(e){
        console.log(`error: ${e}`)
        return {
            error: `${e}`
        }
    }
}
// #############################################################################

// POST
async function postCliente(nome, idade, uf){
    try {
        let result = await client.query(
            'INSERT INTO clientes (nome, idade, uf) values ($1, $2, $3)',
            [nome, idade, uf]
        )
        return result
    } catch(e) {
        console.log(`error: ${e}`)
        return {
            error: `${e}`
        }
    }
}
// #############################################################################

// PUT
async function putCliente(id, nome, idade, uf){
    try {
        let result = await client.query(
            'UPDATE clientes SET nome = $1, idade = $2, uf = $3 WHERE id = $4',
            [nome, idade, uf, id]
        )
        return result
    } catch(e) {
        console.log(`error: ${e}`)
        return {
            error: `${e}`
        }
    }
}
// #############################################################################

// DEL
async function delCliente(id){
    try {
        let result = await client.query(
        'DELETE FROM clientes where id = $1',
        [id]
        );
        return result
    } catch(e) {
        console.log(`error: ${e}`)
        return {
            error: `${e}`
        }
    }
}
// #############################################################################

class BackClientes{

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

    async del(req, res){
        let id = req.query.id;
        let resp = await delCliente(id);
        if (resp.rowCount == 1){
            res.sendStatus(200)
        } else {
            res.sendStatus(400)
        }
    }
}

let backclientes = new BackClientes;

export default backclientes;
