/*NOME DO BANCO DE DADOS*/
const database = "BD3-NoSQL-AtlasMongoDB"

/*NOME DA COLEÇÃO*/
const collection = "bd3-nosql-atv1"

/*USAR OU CRIAR O BANCO DE DADOS*/
use(database)

db[collection].insertMany(
    [
        {
            "cod_aluno": "001",
            "cod_turma": "001",
            "nome": "Ben Tennyson",
            "cpf": "123.456.789-00",
            "rg": "MG-12.345.678",
            "telefone_aluno": "(31) 98765-4321",
            "telefone_responsavel": "(31) 91234-5678",
            "email": "ben.tennyson@example.com",
            "data_nascimento": "2005-01-15"
        },
        {
            "cod_aluno": "002",
            "cod_turma": "002",
            "nome": "Gumball Watterson",
            "cpf": "234.567.890-11",
            "rg": "SP-23.456.789",
            "telefone_aluno": "(11) 99876-5432",
            "telefone_responsavel": "(11) 93456-7890",
            "email": "gumball.watterson@example.com",
            "data_nascimento": "2004-02-20"
        },
        {
            "cod_aluno": "003",
            "cod_turma": "003",
            "nome": "Dexter McPherson",
            "cpf": "345.678.901-22",
            "rg": "RJ-34.567.890",
            "telefone_aluno": "(21) 98765-4321",
            "telefone_responsavel": "(21) 91234-5678",
            "email": "dexter.mcpherson@example.com",
            "data_nascimento": "2006-03-25"
        },
        {
            "cod_aluno": "004",
            "cod_turma": "004",
            "nome": "Johnny Bravo",
            "cpf": "456.789.012-33",
            "rg": "RS-45.678.901",
            "telefone_aluno": "(51) 99876-5432",
            "telefone_responsavel": "(51) 93456-7890",
            "email": "johnny.bravo@example.com",
            "data_nascimento": "2005-04-10"
        },
        {
            "cod_aluno": "005",
            "cod_turma": "005",
            "nome": "Blossom Utonium",
            "cpf": "567.890.123-44",
            "rg": "BA-56.789.012",
            "telefone_aluno": "(71) 98765-4321",
            "telefone_responsavel": "(71) 91234-5678",
            "email": "blossom.utonium@example.com",
            "data_nascimento": "2004-05-15"
        },
        {
            "cod_aluno": "006",
            "cod_turma": "006",
            "nome": "Samurai Jack",
            "cpf": "678.901.234-55",
            "rg": "PR-67.890.123",
            "telefone_aluno": "(41) 99876-5432",
            "telefone_responsavel": "(41) 93456-7890",
            "email": "samurai.jack@example.com",
            "data_nascimento": "2006-06-20"
        },
        {
            "cod_aluno": "007",
            "cod_turma": "007",
            "nome": "Raven Roth",
            "cpf": "789.012.345-66",
            "rg": "GO-78.901.234",
            "telefone_aluno": "(62) 98765-4321",
            "telefone_responsavel": "(62) 91234-5678",
            "email": "raven.roth@example.com",
            "data_nascimento": "2005-07-25"
        },
        {
            "cod_aluno": "008",
            "cod_turma": "008",
            "nome": "Ed, Edd n Eddy",
            "cpf": "890.123.456-77",
            "rg": "CE-89.012.345",
            "telefone_aluno": "(85) 99876-5432",
            "telefone_responsavel": "(85) 93456-7890",
            "email": "ed.ed.n.eddy@example.com",
            "data_nascimento": "2004-08-30"
        },
        {
            "cod_aluno": "009",
            "cod_turma": "009",
            "nome": "Courage the Cowardly Dog",
            "cpf": "901.234.567-88",
            "rg": "DF-90.123.456",
            "telefone_aluno": "(61) 98765-4321",
            "telefone_responsavel": "(61) 91234-5678",
            "email": "courage.the.cowardly.dog@example.com",
            "data_nascimento": "2006-09-15"
        },
        {
            "cod_aluno": "010",
            "cod_turma": "010",
            "nome": "Finn Mertens",
            "cpf": "012.345.678-99",
            "rg": "MT-01.234.567",
            "telefone_aluno": "(65) 99876-5432",
            "telefone_responsavel": "(65) 93456-7890",
            "email": "finn.mertens@example.com",
            "data_nascimento": "2005-10-20"
        }


    ])