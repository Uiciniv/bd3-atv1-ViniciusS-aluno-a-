/*NOME DO BANCO DE DADOS*/
const database = "BD3-NoSQL-AtlasMongoDB"
/*NOME DA COLEÇÃO*/
const collection = "bd3-nosql-atv1"
/*USAR OU CRIAR O BANCO DE DADOS*/
use(database)

db[collection].updateOne(
    {nome:"Gumball Watterson"}, {$set: {nome:"Gumball Azulzinho"}},
    {cpf:"234.567.890-11"}, {$set: {cpf:"321.654.987-99"}},
    {rg:"SP-23.456.789"},      {$set: {rg:"SP-31.745.145"}},
    {"cod_aluno": "002"}
)