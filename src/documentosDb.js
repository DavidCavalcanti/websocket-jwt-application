import { documentosColecao } from "./db_connection.js";

function encontraDocumento(nome) {
    const documento = documentosColecao.findOne({
        nome
    });

    return documento;
}

function atualizaTexto(nomeDocumento, texto) {
    const atualizacao = documentosColecao.updateOne(
        { nome: nomeDocumento },
        {
            $set: {
                texto
            }
        }
    );

    return atualizacao;
}

export { encontraDocumento, atualizaTexto }