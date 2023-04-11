# Rotas de acesso:
### GET 1
**METODO**: GET
**URI**(http://localhost:3000/apiClientes?id=10)
- Nesse caso retornaria os dados do cliente no de id 10

### GET ALL
**METODO**: GET
**URI**(http://localhost:3000/apiClientes)
- Nesse caso retornaria os dados de todos os clientes

### POST
**METODO**: POST
**URI**(http://localhost:3000/apiClientes)
**BODY**(nome, idade, uf)
- Nesse caso criaria um novo cliente a partir do nome, idade e uf passados no body da requisição

### PUT
**METODO**: PUT
**URI**(http://localhost:3000/apiClientes?id=10)
**BODY**(nome, idade, uf)
- Nesse caso alteraria o cliente de id 10 com os dados passados no body da requisição

### DELETE
**METODO**: DELETE
**URI**(http://localhost:3000/apiClientes?id=10)
- Nesse caso deletaria o cliente de id 10
