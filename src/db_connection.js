import { MongoClient } from "mongodb";

let client 

let documentosColecao;

try {
    client = new MongoClient(process.env.DB_CONNECTION_STRING);
    console.log('Conectando-se ao cluster... ')
    
    await client.connect();        
    console.log("Conecatado com sucesso ao banco de dados! ;-)");

    const db = client.db("alura-websockets");
    documentosColecao = db.collection("documentos");

} catch (erro) {
    console.log(erro)
}

export { documentosColecao };